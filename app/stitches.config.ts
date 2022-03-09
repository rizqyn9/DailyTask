import {
  createStitches,
  CSS as StitchesCSS,
  PropertyValue,
} from "@stitches/react";
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
    utils: {
      p: (value: PropertyValue<"padding">) => ({
        padding: value,
      }),
      pt: (value: PropertyValue<"paddingTop">) => ({
        paddingTop: value,
      }),
      pr: (value: PropertyValue<"paddingRight">) => ({
        paddingRight: value,
      }),
      pb: (value: PropertyValue<"paddingBottom">) => ({
        paddingBottom: value,
      }),
      pl: (value: PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
      }),
      px: (value: PropertyValue<"paddingLeft">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: PropertyValue<"paddingTop">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: PropertyValue<"margin">) => ({
        margin: value,
      }),
      mt: (value: PropertyValue<"marginTop">) => ({
        marginTop: value,
      }),
      mr: (value: PropertyValue<"marginRight">) => ({
        marginRight: value,
      }),
      mb: (value: PropertyValue<"marginBottom">) => ({
        marginBottom: value,
      }),
      ml: (value: PropertyValue<"marginLeft">) => ({
        marginLeft: value,
      }),
      mx: (value: PropertyValue<"marginLeft">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: PropertyValue<"marginTop">) => ({
        marginTop: value,
        marginBottom: value,
      }),
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
