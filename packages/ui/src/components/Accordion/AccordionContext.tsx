import type { PropsWithChildren, ReactNode } from "react";
import { createContext, useContext } from "react";

export interface AccordionContextProps {
  multiple?: boolean;
  open?: (boolean | undefined)[];
  setOpen?: (value: boolean[] | undefined) => void;
}

const AccordionContext = createContext<AccordionContextProps>({});
export function AccordionProvider(
  props: PropsWithChildren<AccordionContextProps>
): ReactNode {
  const { children, ...rest } = props;
  return (
    <AccordionContext.Provider value={{ ...rest }}>
      {children}
    </AccordionContext.Provider>
  );
}
AccordionProvider.displayName = "AccordionProvider";
export function useAccordionContext(): AccordionContextProps {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error(
      "useAccordionContext must be used within a AccordionProvider"
    );
  return context;
}
