import { Typography } from "@/components/Typography";

interface MonthlyEarningItemProps {
  month: string;
}
const MonthlyEarningItem = ({ month }: MonthlyEarningItemProps) => {
  const percent = () => Math.floor(Math.random() * 80) + 1;

  return (
    <li className="h-full flex flex-col items-center gap-1 justify-end">
      <div
        className="w-4 bg-foreground rounded-t-sm mobile-md:w-5 tablet-sm:w-7 tablet-sm:rounded-t-md laptop-sm:w-8 laptop-lg:w-10 desktop-lg:w-11"
        style={{
          height: `${percent()}%`,
        }}
      />
      <Typography className="text-center text-muted-foreground text-xs w-fit mobile-md:text-sm laptop-lg:text-md desktop-md:text-lg desktop-lg:text-xl">
        {month}
      </Typography>
    </li>
  );
};

export const MonthlyEarningsList = () => {
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("en-US", { month: "short" })
  );

  return (
    <ul className="flex h-full items-end justify-between gap-1 mobile-md:gap-2 tablet-sm:gap-3 laptop-sm:gap-2 desktop-lg:gap-3">
      {months.map((month, i) => (
        <MonthlyEarningItem key={i} month={month} />
      ))}
    </ul>
  );
};
