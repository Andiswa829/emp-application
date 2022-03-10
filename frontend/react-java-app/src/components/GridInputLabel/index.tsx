import { Grid, InputLabel, GridProps } from "@material-ui/core";
import React from "react";

interface GridControlInputLabelProps extends GridProps {
  label?: string;
  children?: React.ReactNode;
}

const GridControlInputLabel = (props: GridControlInputLabelProps) => {
  return (
    <Grid item {...props}>
      <InputLabel>{props.label}</InputLabel>
      {props.children}
    </Grid>
  );
};

export default GridControlInputLabel;
