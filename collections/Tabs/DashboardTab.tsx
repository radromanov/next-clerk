import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DashboardTab = () => {
  return (
    <nav>
      <Tabs defaultValue="overview" className="w-[400px]">
        <TabsList className="flex flex-col bg-background">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger disabled value="analytics">
            Analytics
          </TabsTrigger>
          <TabsTrigger disabled value="reports">
            Reports
          </TabsTrigger>
          <TabsTrigger disabled value="notifications">
            Notifications
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  );
};
