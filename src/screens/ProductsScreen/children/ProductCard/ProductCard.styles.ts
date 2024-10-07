import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "300px",
    height: "470px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "20px",
  },
  imageDiv: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  nameDescriptAndPrice: {
    width: "100%",
    flexGrow: 1,
  },
  productDescription: {
    textOverflow: "ellipsis",
    textAlign: "justify",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexGrow: 1,
    boxSizing: "border-box",
    padding: "10px",
    flexDirection: "column",
  },
}));

export default useStyles;
