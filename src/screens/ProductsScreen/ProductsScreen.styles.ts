import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
  mainContentBox: {
    display: "flex",
    boxSizing: "border-box",
    padding: "30px",
    paddingTop: "80px",
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "270px",
  },
  filterRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    borderBottom: "1px solid gray",
    paddingBottom: "5px",
  },
  filterOption: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    borderBottom: "1px solid gray",
    paddingBottom: "5px",
    paddingTop: "10px",
  },
  filterOptionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  filterOptionList: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    /*  height: "0px",
    overflow: "hidden", */
    transition: " max-height 4s ease",
  },
  productListBox: {
    boxSizing: "border-box",
    flex: 1,
    flexGrow: 1,
    padding: "10px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default useStyles;
