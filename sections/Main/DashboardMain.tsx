interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const DashboardMain = ({ children }: MainProps) => {
  return <main>{children}</main>;
};
