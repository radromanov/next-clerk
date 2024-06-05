"use client";

import { useState } from "react";
import { CloseIcon, HamburgerMenuIcon } from "../Icons";
import { DashboardMenu } from "./DashboardMenu";

export const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="relative laptop-sm:hidden">
        <HamburgerMenuIcon onClick={() => setIsOpened(true)} />
      </div>

      {isOpened && (
        <>
          <div className="relative">
            <CloseIcon
              onClick={() => setIsOpened(false)}
              className="absolute top-1/2 right-0 transform translate-y-1/2 w-4 h-4 z-[51]"
            />
          </div>
          <aside
            className={`flex flex-col absolute h-screen w-screen bg-background z-50 top-0 left-0 justify-between`}
          >
            <DashboardMenu />
          </aside>
        </>
      )}
    </>
  );
};
