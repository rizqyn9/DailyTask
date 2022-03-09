import { ReactNode, useEffect, useRef, useState } from "react";
import type { MetaFunction } from "remix";
import { Grid } from "~/components/Grid";
import { H5, H6 } from "~/components/Typography";
import { animate, motion, Reorder, useMotionValue } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { styled } from "~/stitches.config";

export const meta: MetaFunction = () => {
  return { title: "Home | Daily Task" };
};

export default function Index() {
  return (
    <div>
      <Title>Test</Title>
    </div>
  );
}

const Title = styled("h1", {
  color: "$mauve1",
});

const dummy: Array<string> = ["Task 1 ", "Task 2", "Task 3"];

function TodoReorder() {
  const [items, setItems] = useState(dummy);
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="relative rounded-lg bg-white/10 p-5"
    >
      {items.map((val, i) => (
        <TodoReorderItem key={i} item={val} />
      ))}
    </Reorder.Group>
  );
}

function TodoReorderItem({ item }: { item: string }) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{ y, boxShadow }}
      whileDrag={{
        zIndex: 100,
      }}
      className="relative my-2 cursor-grab rounded-md bg-white/20 py-2 px-5"
    >
      <span>{item}</span>
    </Reorder.Item>
  );
}

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}
