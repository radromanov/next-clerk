import { cn } from "@/lib/utils";

interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={cn("font-semibold text-3xl", className)} {...props}>
      <span>{children}</span>
    </h1>
  );
};
