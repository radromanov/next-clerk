import { DatePickerWithRange } from "@/components/Calendars";
import { Heading } from "@/components/Typography";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Heading>Dashboard</Heading>
      <DatePickerWithRange />
    </div>
  );
};
