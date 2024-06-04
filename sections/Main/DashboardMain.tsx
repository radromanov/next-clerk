import { DashboardHeader } from "@/collections";
import { DashboardCard } from "@/collections/Cards";
import { DashboardTab } from "@/collections/Tabs";

const informationCards: { title: string; content: string; footer: string }[] = [
  {
    title: "Total Revenue",
    content: "$45,231.89",
    footer: "+20.1% from last month",
  },
  {
    title: "Subscriptions",
    content: "+2350",
    footer: "+180.1% from last month",
  },
  { title: "Sales", content: "+12,234", footer: "+19% from last month" },
  { title: "Active Now", content: "+573", footer: "+201 since last hour" },
];

export const DashboardMain = () => {
  return (
    <>
      <DashboardHeader />

      <DashboardTab />

      <ul className="grid grid-cols-4 gap-4">
        {informationCards.map((card, i) => (
          <li key={i}>
            <DashboardCard
              title={card.title}
              content={card.content}
              footer={card.footer}
            />
          </li>
        ))}
      </ul>
      </>
  );
};
