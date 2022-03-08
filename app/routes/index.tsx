import { ReactNode, useRef } from "react";
// import { Example } from "~/components/Draggable";
import { Grid } from "~/components/Grid";
import { H5 } from "~/components/Typography";

export default function Index() {
  return (
    <Grid nested className="py-5">
      <H5 className="col-span-full">Tues, 22 March 2022</H5>

      {/* Todo Container */}
      <div className="col-span-full">{/* <Example /> */}</div>
    </Grid>
  );
}
