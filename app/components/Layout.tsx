import React from "react";
import { Outlet } from "remix";
import { Navbar } from "./Navbar";

function BaseLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen overflow-hidden">
        <div
          className="h-[150%] w-[150%] -translate-x-[35%] -translate-y-[25%] blur-3xl brightness-75"
          style={{
            background: "url('/bg6.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="min-h-screen w-full lg:max-w-6xl">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export { BaseLayout };
