import ListItem from "@/components/ListItem/ListItem";
import { Menubar } from "@/components/ui/menubar";
import { UserButton } from "@clerk/nextjs";

const menuItems = ["Overview", "Customers", "Products", "Settings"];

const DashboardMenu = () => {
  return (
    <Menubar>
      <nav className="flex">
        <ul className="flex gap-4">
          {menuItems.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </ul>

        <UserButton />
      </nav>
    </Menubar>
  );
};

export default DashboardMenu;
