import { Input } from "@/components/Inputs";
import { Combobox } from "@/components/ui/combobox";
import { UserButton } from "@clerk/nextjs";
import { NavigationList } from "../Lists";

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

export const DashboardMenu = () => {
  return (
    <>
      <div className="flex flex-grow gap-4">
        <Combobox elements={initialComboboxItems} />

        <nav className="flex w-full items-center justify-between">
          <NavigationList />
        </nav>
      </div>

      <div className="flex gap-4">
        <Input name="search" placeholder="Search" />
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </>
  );
};
