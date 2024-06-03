import { User } from "@clerk/nextjs/server";
import DashboardMenu from "../Menus/DashboardMenu";
import { UserButton } from "@clerk/nextjs";

interface DashboardHeaderProps {}

const DashboardHeader = () => {
  return (
    <header>
      <DashboardMenu />
    </header>
  );
};

export default DashboardHeader;
