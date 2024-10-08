import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    padding: "80px",
    paddingTop: "200px",
    boxSizing: "border-box",
  },
  priceAndSelections: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexGrow: 1,
  },
  productName: {},
  productPrice: {},
  selectionsBox: {},
}));

export default useStyles;
