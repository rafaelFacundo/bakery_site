import { createTheme } from "@mui/material/styles";
import PrataFont from "../assets/fonts/Prata-Regular.ttf";
import ArcadFluxFont from "../assets/fonts/AfacadFlux-Regular.ttf";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    announcement: React.CSSProperties;
    announcementDescription: React.CSSProperties;
    headerOption: React.CSSProperties;
    filterHeader: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    announcement?: React.CSSProperties;
    announcementDescription?: React.CSSProperties;
    headerOption?: React.CSSProperties;
    filterHeader?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    announcement: true;
    announcementDescription: true;
    headerOption: true;
    filterHeader: true;
  }
}

const theme = createTheme({
  typography: {
    announcement: {
      fontFamily: "Prata",
      color: "black",
      fontWeight: "500",
      fontSize: "50px",
    },
    announcementDescription: {
      fontFamily: "Afacad flux",
      color: "black",
      fontWeight: "500",
      fontSize: "20px",
    },
    headerOption: {
      fontFamily: "Prata",
      color: "black",
      fontWeight: "500",
      fontSize: "20px",
    },
    filterHeader: {
      fontFamily: "Prata",
      color: "black",
      fontWeight: "bold",
      fontSize: "35px",
    },
  },
});

export default theme;
