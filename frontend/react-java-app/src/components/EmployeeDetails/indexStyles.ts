import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Solitude, Gray67 } from "../../colors";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
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
    },
    margins: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    paper: {
      height: "450px",
      width: "100%",
    },
    label: {
      marginLeft: theme.spacing(2),
    },
    input: {
      height: "45px",
    },
    innerGrid: {
      marginLeft: "16px",
      marginRight: "16px",
    },
    selectInput: {
      justifyContent: "flex-start",
    },
    helperText: {
      color: "red",
    },
  })
);

export default styles;
