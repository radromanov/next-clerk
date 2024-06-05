import { DatePickerWithRange } from "@/components/Calendars";
import { Heading } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-2 laptop-sm:flex-row">
      <Heading className="w-full desktop-lg:text-4xl">Dashboard</Heading>

      <div className="flex justify-between items-center w-full mobile-md:gap-2 laptop-sm:justify-end">
        <DatePickerWithRange />
        <Button className="flex font-semibold text-xs px-2 mobile-md:px-3 mobile-lg:px-4 mobile-lg:text-sm desktop-lg:text-lg desktop-lg:h-12 desktop-lg:px-5">
          Download
        </Button>
      </div>
    </div>
  );
};
