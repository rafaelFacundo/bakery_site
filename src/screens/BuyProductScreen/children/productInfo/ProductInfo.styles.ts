import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "20px",
    width: "50%",
  },
  imageBox: {
    width: "100%",
    maxHeight: "50%",
    aspectRatio: " 1 / 1 ",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageSliderBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    boxSizing: "border-box",
    paddingTop: "15px",
    paddingBottom: "10px",
    paddingRight: "10px",
  },
  sliderImageBox: {
    width: "80px",
    height: "80px",
    aspectRatio: "1 / 1",
    marginRight: "10px",
    borderBottom: "1px solid black",
    paddingBottom: "3px",
    boxSizing: "border-box",
  },
  imageList: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
  },
  imageSliderButtonsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    paddingLeft: "15px",
  },
  descriptionsBox: {},
  descriptionBox: {
    textAlign: "left",
    marginTop: "10px",
  },
  howManyServesBox: {
    textAlign: "left",
    marginTop: "10px",
  },
  detailsBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "5px",
    paddingTop: "10px",
  },
  detailsBoxHeader: {
    borderBottom: "1px solid gray",
    display: "flex",
    /* justifyContent: "space-between",
    alignItems: "flex-start", */

    width: "100%",
    height: "47px",
    paddingBottom: "5px",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "70px",
  },
  detailText: {
    textAlign: "left",
    paddingTop: "20px",
  },
}));

export default useStyles;
