"use client";

import { useState } from "react";
import { ListItem } from "@/components/ListItem";

const menuItems: { value: string; label: string }[] = [
  { label: "Overview", value: "overview" },
  { label: "Customers", value: "customers" },
  { label: "Products", value: "products" },
  { label: "Settings", value: "settings" },
];

const childrenItems: string[] = [
  "Overview",
  "Analytics",
  "Reports",
  "Notifications",
];

const NavigationItem = ({ index, label }: { index: number; label: string }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <ListItem
        className={`flex flex-col px-2 cursor-pointer text-muted-foreground hover:text-foreground focus:text-foreground active:text-foreground laptop-sm:text-sm desktop-md:text-lg desktop-lg:text-xl ${
          index === 0 ? "text-black" : ""
        }`}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {label}
      </ListItem>
      {isOpened && (
        <nav className="container flex flex-col gap-2 laptop-sm:hidden">
          {childrenItems.map((child, i) => (
            <li
              key={i}
              className={`cursor-pointer text-muted-foreground
            hover:text-foreground focus:text-foreground active:text-foreground ${
              i === 0 ? "text-black" : ""
            }"`}
            >
              {child}
            </li>
          ))}
        </nav>
      )}
    </>
  );
};

export const NavigationList = () => {
  return (
    <ul className="flex flex-col laptop-sm:flex-row gap-4 laptop-sm:gap-2">
      {menuItems.map((item, i) => (
        <NavigationItem index={i} label={item.label} />
      ))}
    </ul>
  );
};
