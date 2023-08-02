import { MouseEventHandler, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: ReactElement;
}

export const IconButton = ({ className, onClick, icon }: IconButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
      className
    )}
  >
    {icon}
  </button>
);
