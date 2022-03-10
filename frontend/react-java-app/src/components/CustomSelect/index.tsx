import { MenuItem, Select, SelectProps } from "@material-ui/core";
import React from "react";

interface CustomSelectProps extends SelectProps {
  defaultSelectText?: string;
  defaultSelectValue?: string | number;
}

const CustomSelect = (props: CustomSelectProps) => (
  <Select {...props}>
    <MenuItem value={props.defaultSelectValue}>
      {props.defaultSelectText || "Select"}
    </MenuItem>
    {props.children}
  </Select>
);

export default CustomSelect;
