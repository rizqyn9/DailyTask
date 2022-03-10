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
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "15px",
        4: "17px",
        5: "19px",
        6: "21px",
        7: "27px",
        8: "35px",
        9: "59px",
      },
      fonts: {
        poppins: "'Poppins', sans-serif",
      },
    },
    media: {
      bp1: "(max-width: 480px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
      bp4: "(max-width: 1200px)",
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
