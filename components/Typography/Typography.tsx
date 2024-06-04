import { cn } from "@/lib/utils";

interface TypographyProps {
  width: number;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ width, className, children }: TypographyProps) => {
  return (
    <p className={cn(`text-start truncate w-[${width}px]`, className)}>
      <span>{children}</span>
    </p>
  );
};
