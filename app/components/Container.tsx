import { styled } from "~/stitches.config";

const Wrapper = styled("div", {
  // mini reset
  color: "$mauve1",
  width: "100%",
  maxWidth: "72rem",

  variants: {
    fullScreen: {
      true: {
        width: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
      },
    },
    flexCols: {
      true: {
        display: "flex",
        flexDirection: "column",
      },
    },
    flex: {
      true: {
        display: "flex",
      },
    },
  },

  compoundVariants: [],
});

export { Wrapper };
