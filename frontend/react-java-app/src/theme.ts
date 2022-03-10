import { createTheme } from "@material-ui/core";
import {
  TableThemeSecondaryMain,
  EternalBlue,
  AdreyBlue,
  Gray67,
  Solitude,
  Debussy,
  OceanBoatBlue,
  GreyLight,
} from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: `"Futura Medium", sans-serif`,
    fontSize: 14,
    fontWeightLight: 600,
    fontWeightRegular: 600,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: EternalBlue,
    },
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 64],
});

export const TableTheme = createTheme({
  typography: {
    fontFamily: `"Futura Medium", sans-serif`,
    fontSize: 14,
    fontWeightLight: 600,
    fontWeightRegular: 600,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    secondary: {
      main: TableThemeSecondaryMain,
    },
  },
});

theme.overrides = {
  MuiInput: {
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
  },
  MuiInputBase: {
    root: {
      border: `1px solid ${Solitude}`,
      color: Gray67,
      padding: "2px 6px",
      borderRadius: "2px",
      boxShadow: "0.5px 0.5px 2.3px rgb(0, 0, 0, 0.3)",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      "&$disabled": {
        background: Solitude,
        boxShadow: "none",
      },
    },
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  MuiSwitch: {
    root: {
      width: "39px",
      height: "19px",
      padding: 0,
      display: "flex",
      "& .MuiSwitch-colorPrimary.Mui-checked": {
        color: theme.palette.common.white,
      },
    },
    switchBase: {
      padding: "3px",
      color: GreyLight,
      "& $checked$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: AdreyBlue,
          borderColor: AdreyBlue,
        },
      },
    },
    thumb: {
      width: 13,
      height: 13,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${Debussy}`,
      borderRadius: "10px",
      opacity: 1,
      backgroundColor: Debussy,
      "$checked$checked + &": {
        opacity: "unset",
        backgroundColor: OceanBoatBlue,
      },
    },
    checked: {},
  },
  MuiInputLabel: {
    root: {
      fontSize: "14px",
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: "20px",
    },
  },
  MuiChip: {
    root: {
      margin: "1px",
    },
    deleteIcon: {
      color: theme.palette.common.white,
      "&:hover": {
        color: theme.palette.common.white,
      },
      width: "12px",
      height: "12px",
    },
  },
};

export default theme;
