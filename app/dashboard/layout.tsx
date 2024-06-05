"use client";
import { DashboardNav } from "@/sections";
import { useUser } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useUser();

  if (!user) return <>Loading...</>;

  return (
    <>
      <DashboardNav />

      <main className="flex flex-col flex-grow px-6 laptop-sm:px-8 py-6 gap-4 laptop-lg:max-w-[1600px] laptop-lg:px-8 laptop-lg:mr-auto laptop-lg:ml-auto">
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
