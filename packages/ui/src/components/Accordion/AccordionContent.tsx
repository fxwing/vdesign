"use client";

import React, { useMemo, forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";
import { useAccordionContext } from "./AccordionContext";

const variants = tv({
  base: "transition-all duration-300 ease-in-out grid",
  variants: {
    active: {
      true: "grid-rows-[1fr]",
      false: "grid-rows-[0fr]",
      undefined: "grid-rows-[0fr]",
    },
  },
});

export type AccordionContentProps = {
  index?: number;
  children?: ((_?: any) => React.ReactNode) | React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const AccordionContent: React.FC<AccordionContentProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, style, className, ...rest } = props;
    const { open } = useAccordionContext();

    const active = useMemo(() => {
      if (open !== undefined) {
        return open[index!];
      }
    }, [open, index]);

    return (
      <div
        {...rest}
        className={variants({ className, active })}
        ref={ref}
        style={style}
      >
        <p className="overflow-hidden">{rest.children}</p>
      </div>
    );
  }
);

export { AccordionContent };
