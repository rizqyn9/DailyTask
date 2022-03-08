import React from "react";
import { Grid } from "./Grid";
import { H2 } from "./Typography";

function Navbar() {
  return (
    <Grid
      className="border-b border-white/20 bg-gray-500/10 lg:border-transparent lg:bg-transparent"
      nested
    >
      <div className="col-span-full flex items-center justify-between  p-6 lg:bg-transparent">
        <div>3</div>
        <H2 className="font-bold">Daily Task</H2>
        <div>3</div>
      </div>
    </Grid>
  );
}

export { Navbar };
