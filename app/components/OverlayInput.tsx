import { motion } from "framer-motion";
import type { Variant, HTMLMotionProps } from "framer-motion";
import { styled } from "~/stitches.config";
import { useState } from "react";
import * as React from "react";
import { Title } from "./Typography";
import { ActionFunction, Form, useActionData } from "remix";
import { ButtonStyled } from "./Button";

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
    borderRadius: "1.5rem 1.5rem 0 0",
    width: "100%",
    height: "max-content",
    minHeight: "25vh",
    boxShadow: "0px -1px 1px white",
  },
  deactive: {
    boxShadow: "0px 0px 5px white",
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

export const action: ActionFunction = () => {
  console.log("asdsad");
};

function FormCreate({
  active,
  setActive,
  ...props
}: {
  active: boolean;
  setActive: React.Dispatch<boolean>;
} & HTMLMotionProps<"div">) {
  const action = useActionData();

  return (
    <FormCreateStyled active={active} {...props}>
      <Title
        type={"h5"}
        css={{
          borderBottom: "1px solid rgba(225,225,255, .6)",
          marginBottom: "1rem",
          paddingBottom: ".5rem",
          textAlign: "center",
        }}
      >
        Create new task
      </Title>
      <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        {/* Category Container */}
        <div style={{ display: "flex", gap: ".5rem" }}>
          {["asd", "asd", 1, 1, 2, 3, 4].map((val, i) => {
            return <CategoryItem key={i} />;
          })}
        </div>
        <Form action="/" method="get">
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
          >
            <InputStyled type={"text"} placeholder="Title" />
            <InputStyled type={"text"} placeholder="Body" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "1rem",
            }}
          >
            <ButtonStyled type="submit">Add</ButtonStyled>
            <ButtonStyled onClick={() => setActive(false)}>Cancel</ButtonStyled>
          </div>
        </Form>
      </div>
    </FormCreateStyled>
  );
}

const CategoryItem = styled("button", {
  width: "1rem",
  height: "1rem",
  borderRadius: "100%",
  background: "red",
});

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
