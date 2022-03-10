import { motion } from "framer-motion";
import type {
  Variant,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";
import { styled } from "~/stitches.config";
import { useState } from "react";
import * as React from "react";
import { Title } from "./Typography";
import { Form } from "remix";

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
    borderRadius: "2rem 2rem 0 0",
    width: "100%",
    height: "max-content",
    minHeight: "25vh",
    boxShadow: "0px -2px 5px white",
  },
  deactive: {
    boxShadow: "0px 0px 2px white",
    borderRadius: "999px",
    y: "-3rem",
    x: "-2rem",
    height: "4rem",
    width: "4rem",
  },
};

function OverlayInput() {
  const [active, setActive] = useState(true);
  return (
    <StyledOverlay css={{ maxWidth: "72rem" }}>
      <OverlayContainerStyled
        // initial={"deactive"}
        active={active}
        variants={VariantStyle}
        animate={active ? "active" : "deactive"}
        transition={{
          duration: 0.3,
          delayChildren: 1,
        }}
      >
        <ButtonIconStyled active={active} onClick={() => setActive(true)}>
          +
        </ButtonIconStyled>
        <FormCreate
          active={active}
          setActive={setActive}
          variants={{
            active: {
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
            deactive: {
              opacity: 1,
            },
          }}
        />
      </OverlayContainerStyled>
    </StyledOverlay>
  );
}

const ButtonIconStyled = styled("button", {
  width: "100%",
  height: "100%",
  color: "White",
  cursor: "pointer",
  fontSize: "3rem",

  variants: {
    active: {
      true: {
        display: "none",
      },
      false: {
        display: "block",
      },
    },
  },
});

function FormCreate({
  active,
  setActive,
  ...props
}: {
  active: boolean;
  setActive: React.Dispatch<boolean>;
} & HTMLMotionProps<"div">) {
  return (
    <FormCreateStyled active={active} {...props}>
      <Title type={"h5"}>Create new task</Title>
      <Form>
        <div>
          <InputStyled type={"text"} placeholder="Title" />
        </div>
      </Form>
      <Title type={"h5"} onClick={() => setActive(false)}>
        Cancel
      </Title>
    </FormCreateStyled>
  );
}

const InputStyled = styled("input", {
  appearance: "none",
  width: "100%",
  border: "none",
  borderRadius: "5px",
  color: "white",
  background: "$mauve12",
  px: ".7rem",
  py: ".5rem",
  outline: "none",

  "&::placeholder": {
    color: "$mauve10",
    fontSize: "1em",
  },
});

const FormCreateStyled = styled(motion.div, {
  variants: {
    active: {
      true: {
        display: "block",
      },
      false: {
        display: "block",
      },
    },
  },
});

const OverlayContainerStyled = styled(motion.div, {
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(100, 100, 100, .8)",
  overflow: "hidden",

  "@supports (backdrop-filter: blur())": {
    backdropFilter: "blur(1rem)",
    backgroundColor: "rgba(144, 142, 150, .2)",
  },
  variants: {
    active: {
      true: {
        py: "1rem",
        px: "1rem",
      },
      false: {
        padding: 0,
      },
    },
  },
});

export { OverlayInput };
