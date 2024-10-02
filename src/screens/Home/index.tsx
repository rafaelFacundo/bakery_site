import { Box } from "@mui/material";
import React from "react";
import MainNews from "./children/MainNews";
import OurProductsSection from "./children//OurProductsSection";
import useStyles from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Box>
      <MainNews />
      <OurProductsSection />
    </Box>
  );
};

export default Home;
