import clsx from "clsx";
import * as React from "react";
import { Spinner } from "../spinner";


const variants = {
  primary: "bg-[#8E44AD] text-white",
  inverse: "bg-white text-[#8E44AD]",
  danger: "bg-red-600 text-white",
  success: "bg-green-600 text-white",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

const positionsX = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  positionX?: keyof typeof positionsX;
} & IconProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      positionX = "center",
      ...props
    },
    ref
  ) => {
    return (
      <button
        disabled={isLoading}
        ref={ref}
        type={type}
        className={clsx(
          "flex items-center disabled:opacity-70 disabled:cursor-not-allowed rounded-full shadow-sm font-medium focus:outline-none hover:opacity-80",
          variants[variant],
          sizes[size],
          positionsX[positionX],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <div className="mx-2">{props.children}</div> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
