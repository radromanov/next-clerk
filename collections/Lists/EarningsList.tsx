import { ListItem } from "@/components/ListItem";

const earningBreakponts: string[] = ["$6000", "$4500", "$3000", "$1500", "$0"];

export const EarningsList = () => {
  return (
    <ul className="h-[calc(100%_-_18px)] bg-background flex flex-col justify-between laptop-lg:h-[calc(100%_-_20px)] desktop-4k:h-[calc(100%_-_28px)]">
      {earningBreakponts.map((earning, i) => (
        <ListItem
          key={i}
          className="text-end text-xs text-muted-foreground laptop-lg:text-sm desktop-md:text-md desktop-lg:text-lg desktop-4k:text-2xl"
        >
          {earning}
        </ListItem>
      ))}
    </ul>
  );
};
