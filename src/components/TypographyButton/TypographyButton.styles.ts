import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: "none",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  typography: {
    "&:hover": {
      color: "gray",
    },
  },
}));

export default useStyles;
