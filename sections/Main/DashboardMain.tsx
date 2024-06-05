import {
  DashboardHeader,
  PeopleIcon,
  DollarIcon,
  CreditCardIcon,
  ActivityIcon,
} from "@/collections";
import { DashboardCard, DashboardSales } from "@/collections/Cards";
import { DashboardChart } from "@/collections/Charts";
import { DashboardTab } from "@/collections/Tabs";

const informationCards: {
  title: string;
  icon: React.ReactNode;
  content: string;
  footer: string;
}[] = [
  {
    title: "Total Revenue",
    icon: <DollarIcon />,
    content: "$45,231.89",
    footer: "+20.1% from last month",
  },
  {
    title: "Subscriptions",
    icon: <PeopleIcon />,
    content: "+2350",
    footer: "+180.1% from last month",
  },
  {
    title: "Sales",
    icon: <CreditCardIcon />,
    content: "+12,234",
    footer: "+19% from last month",
  },
  {
    title: "Active Now",
    icon: <ActivityIcon />,
    content: "+573",
    footer: "+201 since last hour",
  },
];

export const DashboardMain = () => {
  return (
    <>
      <DashboardHeader />

      <div className="hidden laptop-sm:inline-block">
        <DashboardTab />
      </div>

      <ul className="grid grid-cols-1 gap-4 tablet-sm:grid-cols-2">
        {informationCards.map((card, i) => (
          <li key={i}>
            <DashboardCard
              title={card.title}
              icon={card.icon}
              content={card.content}
              footer={card.footer}
            />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 tablet-md:grid-cols-2 laptop-sm:flex gap-4 max-h-[444px]">
        <DashboardChart />
        <DashboardSales />
      </div>
    </>
  );
};
