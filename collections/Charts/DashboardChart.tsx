import { Subheading, Typography } from "@/components/Typography";

const earningBreakponts: string[] = ["$6000", "$4500", "$3000", "$1500", "$0"];

export const DashboardChart = () => {
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("en-US", { month: "short" })
  );

  const percent = () => Math.floor(Math.random() * 80) + 1;

  console.log(percent());

  return (
    <section className="flex flex-col gap-5 border border-neutral-300 shadow rounded-md px-6 py-4">
      <Subheading>Overview</Subheading>

      <div className="h-[360px] flex gap-4">
        <ul className="h-[calc(100%_-_14px)] flex flex-col justify-between">
          {earningBreakponts.map((earning, i) => (
            <li className="text-end" key={i}>
              <p className="text-xs text-muted-foreground">
                <span>{earning}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-2">
          <ul className="flex h-full items-end justify-between gap-2">
            {months.map((month, i) => (
              <li key={i} className="flex flex-col justify-end h-full">
                <div
                  className="w-10 bg-foreground"
                  style={{
                    height: `${percent()}%`,
                  }}
                />
                <Typography className="text-center" width={40}>
                  {month}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
