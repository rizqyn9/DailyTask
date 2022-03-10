import { useState } from "react";
import type { MetaFunction } from "remix";
import { Wrapper } from "~/components/Container";
import { Title, P } from "~/components/Typography";
import { styled } from "~/stitches.config";

export const meta: MetaFunction = () => {
  return { title: "Home | Daily Task" };
};

export default function Index() {
  return (
    <Wrapper css={{ px: "3rem", py: "2rem" }}>
      <ListContainer />
    </Wrapper>
  );
}

function ListContainer() {
  const [data, setData] = useState(["sad", "asd"]);

  return (
    <Wrapper flexCols css={{ gap: ".5rem" }}>
      <Title type={"h5"}>Todo</Title>
      {data.map((val, i) => {
        return <TaskContainer key={i} />;
      })}
    </Wrapper>
  );
}

const StyledTask = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  color: "Aqua",
  background: "$mauve11",
  width: "100%",
  py: "10px",
  px: "1rem",
  borderRadius: "3px",
  borderLeft: "3px solid Aqua",
  cursor: "pointer",
  transition: "all ease-in-out .2s",

  "&:hover": {
    background: "$mauve12",
  },
});

type VariantTask = "important" | "iddle" | "hobby";

let catDummy: Array<VariantTask> = ["hobby", "iddle", "important"];

function TaskContainer() {
  return (
    <StyledTask css={{ gap: ".5rem" }}>
      <span>Task 1</span>
      <Wrapper css={{ display: "flex", gap: ".5rem" }}>
        {catDummy.map((val, i) => {
          return <StyledCategory key={i} variant={val} />;
        })}
      </Wrapper>
    </StyledTask>
  );
}

const StyledCategory = styled("div", {
  width: "2rem",
  height: "5px",
  borderRadius: "9999px",

  variants: {
    variant: {
      important: {
        background: "red",
      },
      iddle: {
        background: "blue",
      },
      hobby: {
        background: "aqua",
      },
    },
  },
  defaultVariants: { variant: "hobby" },
});
