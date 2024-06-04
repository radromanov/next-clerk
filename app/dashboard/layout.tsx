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

      <main>{children}</main>

      <footer>Footer here</footer>
    </>
  );
};

export default DashboardLayout;
