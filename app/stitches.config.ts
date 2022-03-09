import { createStitches, CSS as StitchesCSS } from "@stitches/react";
import { mauve } from "@radix-ui/colors";

const { config, css, getCssText, keyframes, styled, globalCss, theme } =
  createStitches({
    theme: {
      colors: {
        ...mauve,
      },
    },
    media: {
      bp1: "(min-width: 480px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
      bp4: "(min-width: 1200px)",
    },
  });

export const globalStyles = globalCss({
  div: {
    padding: 0,
    margin: 0,
  },
  body: {
    padding: 0,
    margin: 0,
  },
});

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";
export { config, css, getCssText, keyframes, styled, theme };
