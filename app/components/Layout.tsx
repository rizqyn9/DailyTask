import React from "react";
import { Outlet } from "remix";
import { Wrapper } from "./Container";
import { Navbar } from "./Navbar";
import { OverlayInput } from "./OverlayInput";

function MainLayout() {
  return (
    <>
      <Wrapper
        fullScreen
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
          zIndex: "-10",
          backgroundColor: "$mauve12",
        }}
      >
        <Wrapper
          css={{
            maxWidth: "unset",
            background: "url('/bg5.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "200vw",
            height: "250vh",
            transform: "translate(-20vw, -20vh)",
            filter: "blur(5rem)",
          }}
        />
      </Wrapper>
      <Wrapper css={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Navbar />
        <Outlet />
      </Wrapper>
      <OverlayInput />
    </>
  );
}

export { MainLayout };
