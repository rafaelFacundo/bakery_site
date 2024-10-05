import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "500px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    background: "white",
    position: "relative",
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
    zIndex: 2,
    fontSize: "20px",
  },
  sendButton: {
    width: "50px",
    height: "100%",
    border: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
    },
    zIndex: 2,
  },
  sendButtonImage: {
    width: "100%",
    height: "100%",
  },
  inputLayoutSvg: {
    position: "absolute",
  },
}));

export default useStyles;
