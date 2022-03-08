import React from "react";
import { Hamburger } from "./Hamburger";
import { H2 } from "./Typography";

function Navbar() {
  return (
    <nav className="supports-backdrop-blur:bg-white/10 sticky top-0 z-40 w-full flex-none border-b border-white/20 bg-gray-500/50 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-transparent lg:bg-transparent">
      <div className="col-span-full flex items-center justify-between p-4 md:p-6 lg:bg-transparent">
        <Hamburger
          className="grid h-5 place-content-center"
          style={{ flex: "0 1 10%" }}
        />
        <H2 className="font-bold">Daily Task</H2>
        <div style={{ flex: "0 1 10%" }}>3</div>
      </div>
    </nav>
  );
}

export { Navbar };
