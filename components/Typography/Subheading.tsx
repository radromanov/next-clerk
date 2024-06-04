import { cn } from "@/lib/utils";

interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Subheading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h3 className={cn("font-medium text-1xl", className)} {...props}>
      <span>{children}</span>
    </h3>
  );
};
