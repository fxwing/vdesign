import {
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
  useState,
} from "react";
import type { PropsWithChildren, FC } from "react";
import { tv } from "tailwind-variants";
import {
  AccordionProvider,
  type AccordionContextProps,
} from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import { AccordionHeader } from "./AccordHeader";
import { AccordionContent } from "./AccordionContent";

type AccordionRootProps = React.HTMLAttributes<HTMLDivElement> &
  AccordionContextProps;

const variants = tv({
  base: "rounded-lg flex flex-col gap-4 bg-surface p-4",
});

const AccordionRoot: FC<AccordionRootProps> = forwardRef<
  HTMLDivElement,
  AccordionRootProps
>((props, ref) => {
  const { children, style, className, open: openProp, multiple } = props;
  const [open, setOpen] = useState<AccordionContextProps["open"]>(
    openProp ?? []
  );
  return (
    <AccordionProvider {...{ open, setOpen, multiple }}>
      <div className={variants({ className })} ref={ref} style={style}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, { ...child.props, index });
          }
          return child;
        })}
      </div>
    </AccordionProvider>
  );
});

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem, // 添加 Item 属性，以便可以通过 Accordion.Item 引用
  Header: AccordionHeader,
  Content: AccordionContent,
});

Accordion.displayName = "fxwing.Accordion";

export default Accordion;
