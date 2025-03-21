
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gold" | "outline" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative font-medium transition-all duration-300 ease-out inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zahabi-gold disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group",
          
          // Variants
          variant === "default" && "bg-zahabi-orange text-white hover:bg-zahabi-orange/90",
          variant === "gold" && "bg-gradient-to-r from-zahabi-gold to-zahabi-orange text-white hover:shadow-md",
          variant === "outline" && "border border-zahabi-gold text-zahabi-dark hover:bg-zahabi-cream/50",
          variant === "link" && "text-zahabi-gold underline-offset-4 hover:underline",
          
          // Sizes
          size === "default" && "h-11 px-6",
          size === "sm" && "h-9 px-4 text-xs",
          size === "lg" && "h-12 px-8 text-base",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></span>
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
