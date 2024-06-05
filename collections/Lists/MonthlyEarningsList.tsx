import { Typography } from "@/components/Typography";

interface MonthlyEarningItemProps {
  month: string;
}
const MonthlyEarningItem = ({ month }: MonthlyEarningItemProps) => {
  const percent = () => Math.floor(Math.random() * 80) + 1;

  return (
    <li className="h-full flex flex-col items-center gap-1 justify-end">
      <div
        className="w-4 bg-foreground rounded-t-sm laptop-sm:rounded-t-md laptop-sm:w-10"
        style={{
          height: `${percent()}%`,
        }}
      />
      <Typography className="text-center text-muted-foreground text-xs w-fit">
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
    <ul className="flex h-full items-end justify-between gap-1 laptop-sm:gap-2">
      {months.map((month, i) => (
        <MonthlyEarningItem key={i} month={month} />
      ))}
    </ul>
  );
};
