import { Input } from "@/components/Inputs";
import { Combobox } from "@/components/ui/combobox";
import { UserButton } from "@clerk/nextjs";
import { NavigationList } from "../Lists";
import { CloseIcon } from "../Icons";

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
      <div className="flex flex-col flex-grow gap-2 laptop-sm:flex-row">
        <Combobox elements={initialComboboxItems} />

        <Input
          name="search"
          placeholder="Search"
          className="h-8 border-x-0 rounded-none laptop-sm:hidden"
        />

        <nav className="flex w-full items-center justify-between">
          <NavigationList />
        </nav>
      </div>

      <div className="w-full border-t shadow-sm laptop-sm:hidden" />

      <div className="flex p-2 laptop-sm:gap-2">
        <Input
          className="hidden laptop-sm:inline-block desktop-md:placeholder:text-lg desktop-md:w-[360px] desktop-md:text-lg desktop-lg:text-xl desktop-lg:palceholder:text-xl"
          name="search"
          placeholder="Search"
        />

        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </>
  );
};
