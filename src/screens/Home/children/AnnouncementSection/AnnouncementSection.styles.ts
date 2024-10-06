import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "740px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    boxSizing: "border-box",
  },
  sectionTitleAndDescriptionBox: {
    height: "100px",
    width: "50%",
    zIndex: 2,
    "& > *": {
      marginTop: "50px",
    },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  descriptionBox: {
    marginTop: "20px",
  },
  sectionTitleAndDescription: {
    textAlign: "center",
  },
  sliderSection: {
    width: "80%",
    flexGrow: 1,
    //height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
  },
  viewMoreBox: {
    marginTop: "20px",
    "&:hover": {
      cursor: " pointer",
    },
  },
  viewMoxText: {
    textDecoration: "underline",
  },
}));

export default useStyles;
