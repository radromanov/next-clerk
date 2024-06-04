import { DashboardHeader } from "@/collections";
import { DashboardTab } from "@/collections/Tabs";

export const DashboardMain = () => {
  return (
    <main className="flex flex-col flex-grow px-8 py-6">
      <DashboardHeader />

      <DashboardTab />
    </main>
  );
};
