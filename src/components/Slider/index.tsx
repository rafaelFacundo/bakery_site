import React from "react";
import useStyles from "./Slider.styles";
import { Box } from "@mui/material";
import CircleButtonArrow from "../CircleArrowButton";

type SliderProps = {
  listOfCoomponents: React.ReactNode[];
};

const Slider: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.arrowButtonsSection}>
        <CircleButtonArrow orientation="left" onClick={() => {}} />
        <CircleButtonArrow orientation="right" onClick={() => {}} />
      </Box>
      <Box className={classes.slideSection}></Box>
    </Box>
  );
};

export default Slider;
