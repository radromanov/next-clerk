import { DashboardMenu } from "../../collections/Menus";

export const DashboardNav = () => {
  return (
    <header className="flex px-4 h-16 items-center justify-between border border-b-neutral-200">
      <DashboardMenu />
    </header>
  );
};
