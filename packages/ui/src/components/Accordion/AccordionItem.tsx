"use client";
import type { PropsWithChildren } from "react";
import React, {
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
} from "react";
// import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "rounded-md border p-4",
});

export interface AccordionItemProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  index?: number;
}

const AccordionItem: React.FC<AccordionItemProps> = forwardRef<
  HTMLDivElement,
  AccordionItemProps
>((props, ref?: React.Ref<HTMLDivElement>) => {
  const { index, style, className, children, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={variants({ className })} style={style}>
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            index,
            ...child.props,
          })
      )}
    </div>
  );
});

export { AccordionItem };
