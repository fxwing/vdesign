"use client";
import React, {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type RefObject,
} from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Ripple } from "../Ripple";
import { Elevation } from "../Elevation";

const variants = tv({
  base: "relative inline-flex gap-2 items-center justify-center select-none h-10 text-sm px-6 rounded-full transition-all duration-300 ease-in-out",
  variants: {
    color: {
      primary: "bg-primary text-on-primary hover:bg-primary/90",
      secondary: "bg-secondary text-on-secondary hover:bg-secondary/90",
      tertiary: "bg-tertiary text-on-tertiary hover:bg-tertiary/90",
      error: "bg-error text-on-error hover:bg-error/90",
    },
    disabled: {
      true: "bg-inverse-surface opacity-[.12] pointer-events-none",
    },
    variant: {
      filled: "",
      elevated: "",
      outlined: "border border-outline",
      tonal:
        "bg-secondary-container text-on-surface hover:bg-secondary-container/60",
      text: "",
    },
    size: {
      small: "text-sm",
      default: "text-base",
      large: "text-lg",
    },
  },
  compoundVariants: [
    {
      variant: ["outlined", "text"],
      className: "bg-transparent text-primary hover:bg-primary/10",
    },
    {
      color: "secondary",
      variant: ["outlined", "text"],
      className: "bg-transparent text-secondary hover:bg-secondary/10",
    },
    {
      color: "tertiary",
      variant: ["outlined", "text"],
      className: "bg-transparent text-tertiary hover:bg-tertiary/10",
    },
    {
      color: "error",
      variant: ["outlined", "text"],
      className: "bg-transparent text-error hover:bg-error/10",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
  },
});

export const variantsList = [
  "filled",
  "elevated",
  "outlined",
  "tonal",
  "text",
] as const;

export const colorsList = [
  "primary",
  "secondary",
  "tertiary",
  "error",
] as const;

export const sizeList = ["small", "default", "large"] as const;

export type Variant = (typeof variantsList)[number];
export type Color = (typeof colorsList)[number];
export type Size = (typeof sizeList)[number];

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;
export interface ButtonProps<T extends ButtonTypes>
  extends VariantProps<typeof variants>,
    AnchorHTMLAttributes<T>,
    ButtonHTMLAttributes<T> {
  children?: React.ReactNode;
  ref?: RefObject<T>;
  variant?: Variant;
  ripple?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  color?: Color;
  size: Size;
}

const Button = forwardRef(
  <T extends ButtonTypes>(
    props: ButtonProps<T>,
    ref?: React.Ref<ButtonTypes>
  ) => {
    const {
      href,
      style,
      disabled,
      children,
      className,
      size,
      ripple = true,
      color = "primary",
      variant = "filled",
    } = props;

    if (href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          style={style}
          {...{
            ...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>),
            className: variants({
              color,
              variant,
              className,
              size,
            }),
          }}
        >
          {children}
          {ripple ? <Ripple /> : null}
          {variant === "elevated" && <Elevation className="" level={2} />}
        </a>
      );
    }

    return (
      <button
        disabled={disabled}
        ref={ref as RefObject<HTMLButtonElement>}
        style={style}
        {...{
          ...(props as ButtonHTMLAttributes<HTMLButtonElement>),
          className: variants({
            color,
            variant,
            disabled,
            className,
            size,
          }),
        }}
      >
        {children}
        {ripple ? <Ripple /> : null}
        {variant === "elevated" && <Elevation level={3} />}
      </button>
    );
  }
);

Button.displayName = "fxwing.Button";

export default Button;
