import React, { type FC, useRef } from "react";
import { tv } from "tailwind-variants";
import { useRipple } from "./useRipple";

type RippleProps = React.HTMLAttributes<HTMLSpanElement>;

const variant = tv({
  base: "absolute inset-0 overflow-hidden rounded-[inherit]",
});

const Ripple: FC<RippleProps> = (props: RippleProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { className, ...rest } = props;
  const ripple = useRipple(ref);
  return (
    <span className={variant({ className })} ref={ref} {...rest}>
      {ripple}
    </span>
  );
};
Ripple.displayName = "vdesign.Ripple";

export default Ripple;
