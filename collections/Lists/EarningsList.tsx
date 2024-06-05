import { ListItem } from "@/components/ListItem";

const earningBreakponts: string[] = ["$6000", "$4500", "$3000", "$1500", "$0"];

export const EarningsList = () => {
  return (
    <ul className="h-[calc(100%_-_18px)] bg-background flex flex-col justify-between">
      {earningBreakponts.map((earning, i) => (
        <ListItem key={i} className="text-end text-xs text-muted-foreground">
          {earning}
        </ListItem>
      ))}
    </ul>
  );
};
