import { DatePickerWithRange } from "@/components/Calendars";
import { Heading } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center pb-5">
      <Heading>Dashboard</Heading>

      <div className="flex gap-2">
        <DatePickerWithRange />
        <Button className="font-semibold">Download</Button>
      </div>
    </div>
  );
};
