import { cn } from "@/lib/utils";
import React from "react";

interface ListItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children: React.ReactNode;
}

export const ListItem = ({ children, className, ...props }: ListItemProps) => {
  return (
    <li
      className={cn(
        "text-sm text-neutral-500 cursor-pointer hover:text-black transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};
