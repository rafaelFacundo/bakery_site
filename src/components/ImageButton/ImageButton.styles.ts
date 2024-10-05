import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "black",
    padding: "9px",
    boxSizing: "border-box",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
