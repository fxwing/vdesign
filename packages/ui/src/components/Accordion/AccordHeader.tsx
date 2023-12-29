"use client";
import { tv } from "tailwind-variants";
import React, { useMemo, forwardRef } from "react";
import { useAccordionContext } from "./AccordionContext";

const variants = tv({
  base: "font-black cursor-pointer flex items-center justify-between",
  variants: {
    active: {
      true: "text-primary",
      false: "",
      undefined: "",
    },
  },
});

export type AccordionHeaderProps = {
  index?: number;
  children?: ((_?: any) => React.ReactNode) | React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const AccordionHeader: React.FC<AccordionHeaderProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, className, ...rest } = props;
    const { multiple, open, setOpen } = useAccordionContext();

    const active = useMemo(() => {
      if (open !== undefined) {
        return open[index!];
      }
    }, [open, index]);

    const handleClick = () => {
      let arr: boolean[] = [];
      if (multiple) {
        arr = [...(open as boolean[])];
        arr[index!] = !arr[index!];
      } else {
        arr[index!] = !open?.[index!];
      }
      setOpen?.([...arr]);
    };

    return (
      <div
        ref={ref}
        {...rest}
        className={variants({ active, className })}
        onClick={handleClick}
      >
        <div>{rest.children}</div>
        <div
          className={`transition-transform duration-300 ${
            active ? "rotate-90" : "rotate-0"
          }`}
        >
          箭头
        </div>
      </div>
    );
  }
);

export { AccordionHeader };
