import { motion } from "framer-motion";
import type { Variant } from "framer-motion";
import { styled } from "~/stitches.config";
import { useState } from "react";
import * as React from "react";

const StyledOverlay = styled("div", {
  color: "white",
  position: "fixed",
  bottom: "0",
  width: "100vw",
  minHeight: "3rem",
});

const VariantStyle: Record<string, Variant> = {
  active: {
    x: 0,
    y: 0,
    borderRadius: "1rem 1rem 0 0",
    background: "gray",
    width: "100%",
    height: "max-content",
    minHeight: "20vh",
  },
  deactive: {
    background: "darkblue",
    borderRadius: "999px",
    y: "-3rem",
    x: "-2rem",
    height: "4rem",
    width: "4rem",
  },
};

function OverlayInput() {
  const [active, setActive] = useState(false);
  return (
    <StyledOverlay css={{ maxWidth: "72rem" }}>
      <OverlayContainerStyled
        initial={"deactive"}
        variants={VariantStyle}
        animate={active ? "active" : "deactive"}
        transition={{
          duration: 0.3,
        }}
      >
        <button onClick={() => setActive(!active)}>Button</button>
        {active && <div style={{ height: "80vh" }}>asd</div>}
      </OverlayContainerStyled>
    </StyledOverlay>
  );
}

const OverlayContainerStyled = styled(motion.div, {
  position: "absolute",
  bottom: 0,
  right: 0,
});

function Input({ handleClick }: { handleClick: React.Dispatch<boolean> }) {
  return (
    <div>
      <p>Input</p>
      <input type={"text"} />
      <button onClick={() => handleClick(false)}>Close</button>
    </div>
  );
}

export { OverlayInput };
