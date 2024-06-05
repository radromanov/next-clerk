import { ListItem } from "@/components/ListItem";

const menuItems: { value: string; label: string }[] = [
  { label: "Overview", value: "overview" },
  { label: "Customers", value: "customers" },
  { label: "Products", value: "products" },
  { label: "Settings", value: "settings" },
];

export const NavigationList = () => {
  return (
    <ul className="flex gap-4">
      {menuItems.map((item, i) => (
        <ListItem
          key={i}
          className={`cursor-pointer text-muted-foreground
      hover:text-foreground focus:text-foreground active:text-foreground 
      ${i === 0 ? "text-black" : ""}`}
        >
          {item.label}
        </ListItem>
      ))}
    </ul>
  );
};
