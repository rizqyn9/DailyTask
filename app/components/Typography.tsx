import { StyledComponent } from "@stitches/react/types/styled-component";
import { styled } from "~/stitches.config";

const Title = styled("h1", {
  fontFamily: "$poppins",
  variants: {
    type: {
      h1: {
        fontSize: "$8",
      },
      h5: {
        fontSize: "$4",
      },
    },
  },
});

const P = styled("p", {
  fontFamily: "$poppins",
  fontSize: "$1",
});

export { Title, P };
