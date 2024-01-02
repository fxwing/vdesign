"use client";
import React, { useMemo } from "react";

type BeforeAfterProps = {
  before: string;
  after: string;
  bgImage?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  before,
  after,
  bgImage,
}) => {
  const image = useMemo(
    () =>
      `url('${
        bgImage ||
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="%23dedede" d="M0 0h8v8H0zM8 8h8v8H8z"/></svg>'
      }')`,
    [bgImage]
  );

  return (
    <div className="h-fit grid place-content-center">
      <div
        className="relative grid place-content-center overflow-hidden rounded-lg"
        style={
          {
            "--position": "50%",
          } as React.CSSProperties
        }
      >
        <div
          className="w-full"
          style={
            {
              "--bg-url": image,
            } as React.CSSProperties
          }
        >
          <img
            alt="before"
            className="absolute top-0 w-[--position] h-full object-cover object-left"
            src={before}
          />
          <img
            alt="after"
            className="h-full w-full bg-[image:--bg-url] object-cover object-left bg-transparent"
            src={after}
          />
        </div>
        <input
          className="absolute top-0 h-full w-full cursor-pointer opacity-1"
          max="100"
          min="0"
          onInput={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            target.parentElement?.style.setProperty(
              "--position",
              `${target.value}%`
            )
          }
          type="range"
        />
        <div className="pointer-events-none absolute top-0 left-[--position] h-full w-1 bg-surface" />
        <div className="pointer-events-none absolute top-1/2 left-[--position] grid -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface p-2 shadow">
          图标
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
