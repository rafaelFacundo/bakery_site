import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //padding: "10px",
    boxSizing: "border-box",
  },
  arrowButtonsSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
  },
  slideSection: {
    flexGrow: 1,
    width: "100%",
    //height: "100px",
    overflow: "hidden",
    padding: "10px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: "25px",
    },
  },
}));

export default useStyles;
