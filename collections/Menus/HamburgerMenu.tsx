"use client";

import { useState } from "react";
import { HamburgerMenuIcon } from "../Icons";

export const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="relative">
        <HamburgerMenuIcon onClick={() => setIsOpened(true)} />
      </div>

      {isOpened && (
        <aside
          className={`absolute h-screen w-screen bg-foreground z-50 top-0 left-0`}
        ></aside>
      )}
    </>
  );
};
