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

      <main className="flex flex-col flex-grow px-8 py-6 gap-4">
        {children}
      </main>

      <footer>Footer here</footer>
    </>
  );
};

export default DashboardLayout;
