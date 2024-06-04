import { Subheading } from "@/components/Typography";
import { EarningsList, MonthlyEarningsList } from "../Lists";

export const DashboardChart = () => {
  return (
    <section className="flex flex-col gap-5 border border-neutral-300 shadow rounded-md px-6 py-4">
      <Subheading>Overview</Subheading>

      <div className="h-[360px] flex gap-4">
        <EarningsList />

        <div className="flex flex-col items-center gap-2">
          <MonthlyEarningsList />
        </div>
      </div>
    </section>
  );
};
