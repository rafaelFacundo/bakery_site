import { Box } from "@mui/material";
import React from "react";
import MainNews from "../../components/MainNews";
import useStyles from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Box>
      <MainNews />
    </Box>
  );
};

export default Home;
