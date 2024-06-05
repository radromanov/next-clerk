import { Subheading } from "@/components/Typography";
import { EarningsList, MonthlyEarningsList } from "../Lists";
import { DashboardArticle } from "@/components/Articles";

export const DashboardChart = () => {
  return (
    <DashboardArticle>
      <Subheading>Overview</Subheading>

      <div className="h-[360px] flex gap-4">
        <EarningsList />

        <div className="flex flex-col items-center gap-2">
          <MonthlyEarningsList />
        </div>
      </div>
    </DashboardArticle>
  );
};
