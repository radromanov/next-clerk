import { Menubar } from "@/components/ui/menubar";
import { UserButton } from "@clerk/nextjs";

const DashboardMenu = () => {
  return (
    <Menubar>
      <nav className="flex">
        <ul className="flex gap-4">
          <li>Overview</li>
          <li>Customers</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>

        <UserButton />
      </nav>
    </Menubar>
  );
};

export default DashboardMenu;
