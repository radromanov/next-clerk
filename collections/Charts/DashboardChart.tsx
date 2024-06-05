import { Subheading } from "@/components/Typography";
import { EarningsList, MonthlyEarningsList } from "../Lists";
import { DashboardArticle } from "@/components/Articles";

export const DashboardChart = () => {
  return (
    <DashboardArticle className="px-4">
      <Subheading>Overview</Subheading>

      <div className="relative h-[360px] flex gap-4">
        <EarningsList />

        <div className="flex flex-col items-start gap-2 py-2 overflow-hidden overflow-x-auto scroll-smooth laptop-sm:gap-4 laptop-sm:items-center">
          <MonthlyEarningsList />
        </div>
      </div>
    </DashboardArticle>
  );
};
