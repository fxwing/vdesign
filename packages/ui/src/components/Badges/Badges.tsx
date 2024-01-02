"use client";
import React, { forwardRef, useMemo } from "react";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "absolute rounded-full p-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-1/2 -translate-y-1/2 text-white min-w-[24px] min-h-[24px]",
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
      error: "bg-error",
    },
  },
  defaultVariants: {
    color: "error",
  },
});

export const badgesColor = [
  "primary",
  "secondary",
  "tertiary",
  "error",
] as const;

interface BadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  value?: string | number;
  color?: (typeof badgesColor)[number];
}

const Badge: React.FC<BadgeProps> = forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { style, color, value = "", className, children, ...rest } = props;

    const badge = useMemo(() => {
      if (parseInt(value.toString()) > 999) {
        return "999+";
      }
      return value;
    }, [value]);

    return (
      <div className="inline-flex relative" ref={ref} {...rest}>
        {children}
        <span className={variants({ color, className })} style={style}>
          {badge}
        </span>
      </div>
    );
  }
);

Badge.displayName = "Actify.Badge";

export default Badge;
