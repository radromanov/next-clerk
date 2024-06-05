import { Icon } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface HamburgerMenuIconProps extends React.SVGProps<SVGSVGElement> {}

export const HamburgerMenuIcon = ({
  className,
  ...props
}: HamburgerMenuIconProps) => {
  return (
    <Icon
      className={cn(
        "absolute h-5 w-5 text-foreground mx-2 my-2 active:transform active:rotate-90 transition-transform duration-300",
        className
      )}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </Icon>
  );
};
