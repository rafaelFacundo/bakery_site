import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "740px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      backgroundColor: "green",
      boxSizing: "border-box",
    },
    sectionTitleAndDescriptionBox: {
      height: "100px",
      width: "40%",
    },
    sectionTitleAndDescription: {
      textAlign: "center",
    },
    sliderSection: {
      width: "70%",
      flexGrow: 1,
      //height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "pink",
      marginTop: "25px",
    },
  })
);

export default useStyles;
