import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Icon = ({ children, className, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={cn("h-4 w-4 text-muted-foreground", className)}
      {...props}
    >
      {children}
    </svg>
  );
};
