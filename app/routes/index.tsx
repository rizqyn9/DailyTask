import { ReactNode, useEffect, useRef } from "react";
import type { MetaFunction } from "remix";
import { Grid } from "~/components/Grid";
import { H5, H6 } from "~/components/Typography";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return { title: "Home | Daily Task" };
};

export default function Index() {
  return (
    <Grid nested className="py-5">
      <H5 className="col-span-full">Tues, 23 March 2022</H5>

      {/* Todo Container */}
      <div className="col-span-full">
        <Todo />
      </div>
    </Grid>
  );
}

function Todo() {
  return (
    <div className="">
      <p className="text-xl">Todo</p>
      <DraggableContainer items={dummy} />
    </div>
  );
}

const dummy = ["asd", "asdad", "item3"];

type Position = { top: number; height: number };

function DraggableContainer({ items }: { items: Array<string> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positions = useRef<Array<Position>>([]).current;

  const registerPosition = (i: number, offset: Position) =>
    (positions[i] = offset);

  return (
    <div className="relative flex flex-col gap-5" ref={containerRef}>
      {items.map((val, i) => {
        return (
          <DraggableItem
            title={val}
            key={i}
            i={i}
            containerRef={containerRef}
            setPosition={registerPosition}
          />
        );
      })}
    </div>
  );
}

type DraggableItemState = "drag" | "iddle" | "active";

function DraggableItem({
  i,
  title,
  containerRef,
  setPosition,
}: {
  i: number;
  title: string;
  containerRef: React.Ref<HTMLDivElement>;
  setPosition: (i: number, offset: Position) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPosition(i, {
      height: ref.current?.offsetHeight || 10,
      top: ref.current?.offsetTop || 10,
    });
  }, []);

  return (
    <motion.button
      ref={ref}
      whileTap={{ opacity: 0.5 }}
      drag={"y"}
      whileDrag={{ scale: 1.2 }}
      //@ts-ignore
      dragConstraints={containerRef}
      className="bg-gray-200/10 py-4"
    >
      <H6>{title}</H6>
    </motion.button>
  );
}
