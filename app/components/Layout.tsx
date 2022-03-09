import React from "react";
import { Outlet } from "remix";
import { styled } from "~/stitches.config";
import { Wrapper } from "./Container";
import { Navbar } from "./Navbar";
import { OverlayInput } from "./OverlayInput";

const BoxLayout = styled("div", {
  position: "relative",
});

function MainLayout() {
  return (
    <>
      <Wrapper
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          overflow: "hidden",
          zIndex: "-10",
          backgroundColor: "$mauve12",
        }}
      >
        <Wrapper
          css={{
            background: "url('/bg5.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "120vw",
            height: "150vh",
            transform: "translate(-10vw, -20vh)",
            filter: "blur(5rem)",
          }}
        />
      </Wrapper>
      <Wrapper>
        {/* <div className="fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden">
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
        <div className="p-6"> */}
        <Outlet />
        {/* </div>
      </div>

      <OverlayInput /> */}
      </Wrapper>
    </>
  );
}

export { MainLayout };
