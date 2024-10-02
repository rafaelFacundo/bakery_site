import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sliderButtonRigth: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      borderRadius: "50px",
      boxSizing: "border-box",
      padding: "4px",
      outline: "none",
      border: "none",
      transform: "rotate(180deg)",
      marginLeft: "10px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    sliderButtonLeft: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      borderRadius: "50px",
      boxSizing: "border-box",
      padding: "4px",
      outline: "none",
      border: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    sliderButtonImage: {
      width: "80%",
      height: "80%",
    },
  })
);

export default useStyles;
