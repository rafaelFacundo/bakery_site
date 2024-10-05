import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "400px",
    width: "100%",
    backgroundColor: "#bae8d4",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "20px",
    flexDirection: "column",
  },
  logoImageBox: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "25px",
  },
  logoImage: {
    width: "70px",
    height: "70px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  subsectionsBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px",
  },
  subsectionBox: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    "& > *": {
      marginBottom: "15px",
    },
  },
  contactAndCreditCardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  socialMediaIcons: {
    display: "flex",
    alignItems: "center",
  },
  socialMediaIcon: {
    marginRight: "10px",
  },
  creditCardsIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
