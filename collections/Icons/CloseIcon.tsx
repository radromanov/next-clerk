import { Icon } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {}
{
}

export const CloseIcon = ({ className, ...props }: CloseIconProps) => {
  return (
    <Icon className={cn("cursor-pointer", className)} {...props}>
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </Icon>
  );
};
