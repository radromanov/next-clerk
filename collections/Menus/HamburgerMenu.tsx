"use client";

import { useState } from "react";
import { HamburgerMenuIcon } from "../Icons";
import { DashboardMenu } from "./DashboardMenu";

export const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="relative laptop-sm:hidden">
        <HamburgerMenuIcon onClick={() => setIsOpened(true)} />
      </div>

      {isOpened && (
        <aside
          className={`flex flex-col absolute h-screen w-screen bg-background z-50 top-0 left-0 justify-between`}
        >
          <DashboardMenu />
        </aside>
      )}
    </>
  );
};
