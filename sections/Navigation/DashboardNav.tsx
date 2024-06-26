import { DashboardMenu, HamburgerMenu } from "@/collections";

export const DashboardNav = () => {
  return (
    <>
      <header className="hidden laptop-sm:flex px-4 h-16 items-center justify-between border-b shadow-sm desktop-lg:h-20">
        <DashboardMenu />
      </header>

      <HamburgerMenu />
    </>
  );
};
