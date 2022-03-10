import { motion, Variant } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import type { MetaFunction } from "remix";
import { Wrapper } from "~/components/Container";
import { Title } from "~/components/Typography";
import { styled } from "~/stitches.config";

export const meta: MetaFunction = () => {
  return { title: "Home | Daily Task" };
};

export default function Index() {
  return (
    <Wrapper
      flexCols
      css={{ px: "3rem", py: "2rem", gap: "2rem", "@bp2": { px: "1rem" } }}
    >
      <ListContainer />
      <ListContainer />
      <ListContainer />
      <ListContainer />
      <ListContainer />
    </Wrapper>
  );
}

function ListContainer() {
  const [data, setData] = useState(["sad", "asd"]);

  return (
    <GroupTasksLayout>
      <Title type={"h5"}>Todo</Title>
      {data.map((val, i) => {
        return <TaskContainer key={i}>{val}</TaskContainer>;
      })}
    </GroupTasksLayout>
  );
}

const GroupTasksLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const StyledTask = styled(motion.div, {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  color: "Aqua",
  width: "100%",
  py: "10px",
  px: "1rem",
  borderRadius: "3px",
  borderLeft: "3px solid Aqua",
  cursor: "pointer",
  transition: "all ease-in-out .2s",
  background: "$mauve11",

  "&:hover": {
    background: "$mauve12",
  },
});

type VariantTask = "important" | "iddle" | "hobby";

let catDummy: Array<VariantTask> = ["hobby", "iddle", "important"];

function TaskContainer({ children }: { children: ReactNode }) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [isMounted]);

  return (
    <StyledTask css={{ gap: ".5rem" }}>
      <span>{children}</span>
      <CategoryTaskContainer
        initial={"hidden"}
        animate={isMounted && "show"}
        transition={{
          staggerChildren: 0.2,
        }}
      >
        {catDummy.map((val, i) => {
          return (
            <StyledCategory
              key={i}
              variant={val}
              variants={VariantState}
              transition={{
                duration: 1,
              }}
            />
          );
        })}
      </CategoryTaskContainer>
    </StyledTask>
  );
}

const CategoryTaskContainer = styled(motion.div, {
  display: "flex",
  gap: "1rem",
});

const VariantState: Record<"hidden" | "show", Variant> = {
  hidden: {
    opacity: 0,
    x: "-10rem",
  },
  show: {
    opacity: 1,
    x: "0",
  },
};

const StyledCategory = styled(motion.div, {
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
