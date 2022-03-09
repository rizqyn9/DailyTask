import React from "react";
import { Outlet } from "remix";
import { Navbar } from "./Navbar";
import { OverlayInput } from "./OverlayInput";

function BaseLayout() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden">
        <div
          className="h-[200%] w-[150%] -translate-x-[35%] translate-y-[0%] blur-3xl brightness-75"
          style={{
            background: "url('/bg5.jpg')",
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

      <OverlayInput />
    </>
  );
}

export { BaseLayout };
