import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "500px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    background: "white",
  },
  input: {
    flexGrow: 1,
    height: "100%",
    border: "none",
    padding: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
    background: "none",
    "&:focus": {
      outline: "none",
    },
  },
  sendButton: {
    width: "20px",
    height: "100%",
    border: "none",
    background: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
