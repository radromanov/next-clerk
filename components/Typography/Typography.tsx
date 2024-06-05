import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
}

export const Typography = ({ width, className, children }: TypographyProps) => {
  return (
    <p
      className={cn(`text-start truncate`, className)}
      style={{ width: width || "100%" }}
    >
      <span>{children}</span>
    </p>
  );
};
