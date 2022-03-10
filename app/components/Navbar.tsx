import React from "react";
import { styled } from "~/stitches.config";
import { Wrapper } from "./Container";
import { Hamburger } from "./Hamburger";

const WrapNav = styled(Wrapper, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: "1rem",
  px: "3rem",
  backgroundColor: "rgba(144, 142, 150, .2)",

  "@bp2": {
    px: "1rem",
  },
});

function Navbar() {
  return (
    <WrapNav as="nav" css={{ minHeight: "unset" }}>
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
      <div>3</div>
    </WrapNav>
  );
}

export { Navbar };
