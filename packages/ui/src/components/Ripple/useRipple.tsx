import { useEffect, useState, useRef } from "react";
import { type MouseEvent, type CSSProperties } from "react";

interface PippleProps {
  top: number;
  left: number;
  width: number;
  height: number;
}
export function useRipple(ref: React.RefObject<HTMLElement>) {
  const [ripples, setRipples] = useState<Partial<PippleProps>[]>([]);
  const timer = useRef<null | NodeJS.Timeout>(null);
  useEffect(() => {
    const element = ref.current;
    const handler = (event: MouseEvent<HTMLDivElement, MouseEvent>): void => {
      event.preventDefault();
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const diameter = Math.max(width, height);
      setRipples([
        ...ripples,
        {
          left: left - diameter / 2,
          top: top - diameter / 2,
          width: diameter,
          height: diameter,
        },
      ]);
    };
    element?.addEventListener("click", handler);
    return () => {
      element?.removeEventListener("click", handler);
    };
  }, [ref, ripples]);

  // 1 分钟后显示
  useEffect(() => {
    timer.current = setTimeout(() => {
      setRipples([]);
    }, 1000);
    return () => {
      clearTimeout(timer.current!);
    };
  }, [ripples]);

  return (
    <>
      <style>
        {`
        @keyframes ripple {
          to{
            transform: scale(1);
            opacity: 0;
          }
        }
        `}
      </style>

      {ripples.map((style, index) => {
        return (
          <div
            className="absolute rounded-full bg-inverse-surface/25"
            key={index}
            style={{
              ...(style as CSSProperties),
              transform: "scale(0)",
              animation: "ripple 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        );
      })}
    </>
  );
}
