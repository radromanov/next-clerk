interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Icon = ({ children, className, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};
