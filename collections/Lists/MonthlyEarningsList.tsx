import { Typography } from "@/components/Typography";

interface MonthlyEarningItemProps {
  month: string;
}
const MonthlyEarningItem = ({ month }: MonthlyEarningItemProps) => {
  const percent = () => Math.floor(Math.random() * 80) + 1;

  return (
    <li className="flex flex-col gap-2 justify-end h-full">
      <div
        className="w-10 bg-foreground"
        style={{
          height: `${percent()}%`,
        }}
      />
      <Typography
        className="text-center text-muted-foreground text-xs"
        width={40}
      >
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
    <ul className="flex h-full items-end justify-between gap-2">
      {months.map((month, i) => (
        <MonthlyEarningItem key={i} month={month} />
      ))}
    </ul>
  );
};
