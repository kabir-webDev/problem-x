import React from "react";
import Grid from "@material-ui/core/Grid";
import Gridder from "./components/Gridder";

const App = () => {
  return (
    <div>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Gridder />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Gridder />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Gridder />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Gridder />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Gridder />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
