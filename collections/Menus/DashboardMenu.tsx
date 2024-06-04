"use client";
import { Input } from "@/components/Inputs";
import ListItem from "@/components/ListItem/ListItem";
import { Combobox } from "@/components/ui/combobox";
import { Menubar } from "@/components/ui/menubar";
import { UserButton } from "@clerk/nextjs";

const menuItems: { value: string; label: string }[] = [
  { label: "Overview", value: "overview" },
  { label: "Customers", value: "customers" },
  { label: "Products", value: "products" },
  { label: "Settings", value: "settings" },
];

const initialComboboxItems: {
  value: string;
  label: string;
  image: string | null;
}[] = [
  {
    label: "Acme Inc.",
    value: "acme inc.",
    image: null,
  },
  {
    label: "Monsters Inc.",
    value: "monsters inc.",
    image: null,
  },
];

const DashboardMenu = () => {
  return (
    <Menubar>
      <Combobox elements={initialComboboxItems} />
      <nav className="flex w-full items-center justify-between">
        <ul className="flex gap-4">
          {menuItems.map((item, i) => (
            <ListItem key={i}>{item.label}</ListItem>
          ))}
        </ul>

        <Input name="search" placeholder="Search" />
        <UserButton />
      </nav>
    </Menubar>
  );
};

export default DashboardMenu;
