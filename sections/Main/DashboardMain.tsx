import { DashboardHeader } from "@/collections";

interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const DashboardMain = ({ children }: MainProps) => {
  return (
    <main className="flex flex-col flex-grow px-8 py-6">
      <DashboardHeader />

      {children}
    </main>
  );
};
