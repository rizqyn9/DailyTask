import { styled } from "~/stitches.config";

const Wrapper = styled("div", {
  // mini reset
  minHeight: "100vh",
  color: "$mauve1",
  width: "100%",
  maxWidth: "72rem",

  variants: {
    fullScreen: {
      true: {
        width: "100vw",
        maxWidth: "100vw",
      },
    },
  },

  compoundVariants: [{ fullScreen: false, css: { background: "$mauve1" } }],
});

export { Wrapper };
