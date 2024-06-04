import { DashboardHeader } from "@/collections";

interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const DashboardMain = ({ children }: MainProps) => {
  return (
    <main>
      <DashboardHeader />

      {children}
    </main>
  );
};
