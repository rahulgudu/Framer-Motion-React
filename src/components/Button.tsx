import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};
const Button = ({ children, size = "md" }: Props) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-8 py-4",
  };
  return (
    <button
      className={twMerge(
        "bg-white text-textBlack rounded-full",
        sizeClassNames[size]
      )}>
      {children}
    </button>
  );
};

export default Button;
