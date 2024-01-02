"use client";
import React, { forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const variants = tv({
  base: "hover:z-10 inline-block relative object-cover object-center",
  variants: {
    rounded: {
      true: "rounded-lg",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
    square: {
      true: "rounded-none",
    },
    size: {
      xs: "size-6",
      sm: "size-9",
      md: "size-12",
      lg: "size-[58px]",
      xl: "size-[74px]",
      "2xl": "size-[110px]",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "full",
  },
});

export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof variants>;

export const AvatarVariants = variants;

const Avatar: React.FC<AvatarProps> = forwardRef(
  (props, ref?: React.Ref<HTMLImageElement>) => {
    const { style, className, size, square, rounded, alt, src, ...rest } =
      props;
    return (
      <img
        ref={ref}
        {...rest}
        alt={alt || "avatar"}
        className={variants({ size, square, rounded, className })}
        src={src || "https://avatars.githubusercontent.com/u/15228321?v=4"}
        style={style}
      />
    );
  }
);

Avatar.displayName = "fxwing.Avatar";

export default Avatar;
