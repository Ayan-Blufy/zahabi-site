
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative font-medium transition-all duration-300 ease-out inline-flex items-center justify-center rounded-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group",
          
          // Variants
          variant === "default" && "bg-purple text-white hover:bg-purple-dark",
          variant === "outline" && "border border-purple text-purple hover:bg-purple/10",
          variant === "ghost" && "text-purple hover:bg-purple/10",
          variant === "link" && "text-purple underline-offset-4 hover:underline",
          
          // Sizes
          size === "default" && "h-12 px-8",
          size === "sm" && "h-9 px-5 text-xs",
          size === "lg" && "h-14 px-10 text-base",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
