"use client";
import { Input } from "@/components/Inputs";
import { ListItem } from "@/components/ListItem";
import { Combobox } from "@/components/ui/combobox";
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
    label: "Acmasdasdadasdasdadasdasde Inc.",
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
    <>
      <div className="flex flex-grow gap-4">
        <Combobox elements={initialComboboxItems} />
        <nav className="flex w-full items-center justify-between">
          <ul className="flex gap-4">
            {menuItems.map((item, i) => (
              <ListItem key={i} className={i === 0 ? "text-black" : ""}>
                {item.label}
              </ListItem>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <Input name="search" placeholder="Search" />
        <UserButton />
      </div>
    </>
  );
};

export default DashboardMenu;
