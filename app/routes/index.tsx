import { animated, useSprings, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRef } from "react";
import { Grid } from "~/components/Grid";
import { H4, H5 } from "~/components/Typography";
import clamp from "lodash.clamp";
import swap from "lodash-move";

export default function Index() {
  return (
    <Grid nested className="py-5">
      <H5 className="col-span-full">Tues, 22 March 2022</H5>

      {/* Todo Container */}
      <div className="col-span-full">
        <DraggableContainer />
      </div>
    </Grid>
  );
}

function DraggableContainer() {
  return (
    <div>
      <DraggableList items={["adsasd", "asd", "asdad"]} />
    </div>
  );
}

function DraggableItem() {}

export function Card() {
  return (
    <div className="flex gap-3 rounded-lg bg-white/50 py-2 px-3">
      <button style={{ flex: "0 1 5%" }}>{">"}</button>
      <div>Bdy</div>
    </div>
  );
}

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * 50 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === "zIndex",
          config: (key: string) =>
            key === "y" ? config.stiff : config.default,
        }
      : {
          y: order.indexOf(index) * 50,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        };

function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder;
  });

  return (
    <div
      className={"w-full bg-gray-500/30"}
      style={{ height: items.length * 100 }}
    >
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            y,
            scale,
          }}
          className="w-full touch-none bg-red-200/50 p-5"
          children={items[i]}
        />
      ))}
    </div>
  );
}
