import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
}

export const Typography = ({ className, children }: TypographyProps) => {
  return (
    <p className={cn(`truncate`, className)}>
      <span>{children}</span>
    </p>
  );
};
