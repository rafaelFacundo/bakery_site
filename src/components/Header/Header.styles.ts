import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100px",
      position: "fixed",
      top: "0px",
      left: "0px",
      zIndex: 3,
      backgroundColor: "white",
    },
    saleBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      height: "30px",
      backgroundColor: "#00211a",
      color: "white",
      boxSizing: "border-box",
      padding: "2px",
    },
    mainContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      width: "80%",
      height: "100%",
      padding: "10px",
      paddingBottom: "0px",
      /*  alignItems: "flex-end",
      justifyContent: "flex-end",
      position: "relative",
      paddingLeft: "30px", */
    },
    logoImageBox: {
      display: "block",
      width: "150px",
      height: "100%",
      position: "relative",
      flexShrink: 0,
    },
    logoAndSectionsBox: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
    },
    logoImage: {
      width: "150px",
      height: "150px",
      position: "relative",
      zIndex: 2,
      top: "10px",
      left: "0px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    icons: {
      width: "20px",
      height: "20px",
      borderRadius: 50,
      marginRight: "10px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    sectionsBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "10px",
      paddingBottom: "10px",
      paddingRight: "10px",
      paddingLeft: "10px",
      "&:hover": {
        cursor: "pointer",
        borderBottom: "0.5px solid #00211a",
      },
    },
    sections: {
      "&:hover": {
        color: "#00211a",
      },
    },
    accountBox: {
      marginLeft: "40px",
      paddingBottom: "10px",
    },
  })
);

export default useStyles;
