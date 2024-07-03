import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
  solid: {
    brandBlue: "relative overflow-hidden bg-brandBlue text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-brandBlue active:text-white/80 before:transition-colors",
    brandBeige: "relative overflow-hidden bg-brandBeige text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-brandBeige active:text-white/80 before:transition-colors",
  },
  outline: {
    brandBlue: "border-brandBlue text-brandBlue hover:border-brandBlue active:bg-brandBlue active:text-white/80 px-6 py-3 text-lg",
    brandBeige: "border-brandBeige text-brandBeige hover:border-brandBeige active:bg-brandBeige active:text-white/80 px-6 py-3 text-lg",
  },
};

const Button = forwardRef(function Button(
  { variant = "solid", color = "brandBlue", className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  );
});

export default Button;
