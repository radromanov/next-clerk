import { DatePickerWithRange } from "@/components/Calendars";
import { Heading } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 laptop-sm:flex-row">
      <Heading className="w-full">Dashboard</Heading>

      <div className="flex justify-between items-center w-full">
        <DatePickerWithRange />
        <Button className="flex font-semibold text-xs px-2">Download</Button>
      </div>
    </div>
  );
};
