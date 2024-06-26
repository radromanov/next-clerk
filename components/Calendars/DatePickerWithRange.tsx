"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();
  const initialDate = new Date(currentYear, currentMonth, currentDate);

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: initialDate,
    to: addDays(initialDate, 7),
  });

  return (
    <div
      className={cn(
        "grid gap-2 mobile-md:w-full tablet-sm:max-w-[276px] laptop-sm:min-w-max",
        className
      )}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "text-xs justify-start text-left font-normal px-1 mobile-md:px-2 mobile-md:text-sm laptop-lg:text-md desktop-md:text-md desktop-md:w-[360px] desktop-md:h-10 desktop-md:px-4 desktop-lg:h-11 desktop-lg:text-lg desktop-4k:text-2xl desktop-4k:w-[444px] desktop-4k:h-14",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-3 w-3 mobile-md:h-4 mobile-md:w-4 desktop-lg:h-5 desktop-lg:w-5 desktop-4k:h-6 desktop-4k:w-6" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
