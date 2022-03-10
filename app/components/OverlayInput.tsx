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
    width: "100%",
    height: "20vh",
    x: 0,
    y: 0,
    borderRadius: "1rem 1rem 0 0",
    background: "gray",
  },
  deactive: {
    height: "3rem",
    width: "3rem",
    background: "darkblue",
    borderRadius: "999px",
    y: "-3rem",
    x: "-2rem",
  },
};

function OverlayInput() {
  const [active, setActive] = useState(false);
  return (
    <StyledOverlay>
      <motion.button
        onClick={() => setActive(!active)}
        style={{
          cursor: "pointer",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
        variants={VariantStyle}
        transition={{
          duration: 0.5,
        }}
        initial={"deactive"}
        animate={active ? "active" : "deactive"}
      >
        {!active ? "Add" : <Input handleClick={setActive} />}
      </motion.button>
    </StyledOverlay>
  );
}

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
