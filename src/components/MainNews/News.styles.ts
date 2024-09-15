import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "80vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    newsCardBox: {
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    newsCard: {
      width: "100%",
      height: "100%",
      flexShrink: 0,
      position: "relative",
    },
    cardImage: {
      width: "100%",
      height: "100%",
    },
    descriptionBox: {
      width: "500px",
      height: "500px",
      position: "absolute",
      left: "40px",
      top: "20%",
      /*  backgroundColor: "yellow", */
      opacity: ".70",
      borderRadius: "10px 100px / 120px",
      boxShadow: "2px 2px 5px black",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: "35px",
      boxSizing: "border-box",
    },
    seeMoreButton: {
      width: "60%",
      height: "60px",
      border: "none",
      backgroundColor: "pink",
    },
    sliderButtonsBox: {
      position: "absolute",
      bottom: "20px",
      left: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
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
