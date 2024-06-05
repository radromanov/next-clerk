import { cn } from "@/lib/utils";

interface DashboardArticleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const DashboardArticle = ({
  children,
  className,
  ...props
}: DashboardArticleProps) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 border shadow-sm rounded-md laptop-sm:px-6 py-4",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
};
