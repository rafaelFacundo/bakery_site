import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "&:hover": {
        cursor: "pointer",
      },
    },
    productImageBox: {
      width: "300px",
      height: "350px",
      overflow: "hidden",
      flexGrow: 1,
    },
    productImage: {
      width: "100%",
      height: "100%",
      transition: "transform 0.4s ease",
      "&:hover": {
        transform: "scale(1.2)",
        width: "100%",
      },
    },
    productTitleBox: {
      flexGrow: 1,
    },
  })
);

export default useStyles;
