import { cn } from "@/lib/utils";
import React from "react";
import { Typography } from "../Typography";

interface ListItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children: React.ReactNode;
}

export const ListItem = ({ children, className, ...props }: ListItemProps) => {
  return (
    <li className={cn("text-sm", className)} {...props}>
      <Typography>{children}</Typography>
    </li>
  );
};
