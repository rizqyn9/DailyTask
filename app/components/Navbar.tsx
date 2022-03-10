import React from "react";
import { styled } from "~/stitches.config";
import { Wrapper } from "./Container";
import { Hamburger } from "./Hamburger";

const WrapNav = styled(Wrapper, {
  position: "sticky",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: "1rem",
  px: "3rem",
  backgroundColor: "rgba(100, 100, 100, .8)",
  minHeight: "unset",
  zIndex: 50,
  borderBottom: "1px solid $mauve1",

  "@bp2": {
    px: "1rem",
  },

  "@supports (backdrop-filter: blur())": {
    backdropFilter: "blur(1rem)",
    backgroundColor: "hsla(260, 25.0%, 11.0%,40%)",
  },
});

function Navbar() {
  return (
    <WrapNav as="nav">
      <Hamburger
        style={{
          flex: "0 1 5%",
          appearance: "none",
          background: "transparent",
          border: "none",
          width: "100%",
        }}
      />
      <h1>Daily Task</h1>
      <div
        style={{
          flex: "0 1 5%",
        }}
      >
        3
      </div>
    </WrapNav>
  );
}

export { Navbar, WrapNav };
