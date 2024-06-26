import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DashboardTab = () => {
  return (
    <nav>
      <Tabs defaultValue="overview" className="w-[400px] desktop-lg:w-[480px]">
        <TabsList className="flex flex-col  bg-background laptop-sm:inline-block laptop-sm:ring-offset-background laptop-sm:bg-muted">
          <TabsTrigger
            value="overview"
            className="desktop-lg:text-md desktop-4k:text-xl"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            disabled
            value="analytics"
            className="desktop-lg:text-md desktop-4k:text-xl"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            disabled
            value="reports"
            className="desktop-lg:text-md desktop-4k:text-xl"
          >
            Reports
          </TabsTrigger>
          <TabsTrigger
            disabled
            value="notifications"
            className="desktop-lg:text-md desktop-4k:text-xl"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
};
