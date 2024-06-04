import { cn } from "@/lib/utils";

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <h1 className={cn("", className)} {...props}>
      <span>{children}</span>
    </h1>
  );
};
