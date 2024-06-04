import DashboardMenu from "../Menus/DashboardMenu";

const DashboardHeader = () => {
  return (
    <header className="flex px-4 h-16 items-center justify-between border border-b-neutral-200">
      <DashboardMenu />
    </header>
  );
};

export default DashboardHeader;
