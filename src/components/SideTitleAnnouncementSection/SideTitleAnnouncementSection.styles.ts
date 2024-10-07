import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "740px",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",

    boxSizing: "border-box",
  },
  sectionTitleAndDescriptionBox: {
    height: "100px",
    width: "50%",
    padding: "16px",
    paddingLeft: "40px",
    paddingRight: "40px",
    zIndex: 2,
    "& > *": {
      marginTop: "10px",
    },
  },
  sectionTitleAndDescription: {
    textAlign: "center",
  },
  descriptionBox: {
    marginTop: "20px",
  },
  sliderSection: {
    width: "50%",
    height: "100%",
    //flexGrow: 1,
    //height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  viewMoreBox: {
    marginTop: "20px",
    height: "inherit",
    position: "relative",
    "&:hover": {
      cursor: " pointer",
    },
  },
  viewMoxText: {
    textDecoration: "underline",
  },
  buttonLayout: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fill: "white",
  },
  buttonLayoutText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    flexGrow: 1,
  },
}));

export default useStyles;
