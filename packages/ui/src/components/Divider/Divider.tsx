"use client";
import React from "react";
import { tv } from "tailwind-variants";
import { setColor } from "../../utils/setColor";

const variants = tv({
  base: "relative before:absolute before:inset-0 before:bg-[--color]",
});

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  thickness?: number | string;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { style, color, thickness, className, ...rest } = props;
  const styles: React.CSSProperties & Record<string, any> = { ...style };
  if (color) {
    styles["--color"] = setColor(color);
  } else {
    styles["--color"] = "var(--md-sys-color-outline-variant, #cac4d0)";
  }
  if (thickness) {
    styles.height = `${thickness}px`;
  } else {
    styles.height = "1px";
  }

  return <div {...rest} className={variants({ className })} style={styles} />;
};

Divider.displayName = "fxwing.Divider";

export default Divider;
