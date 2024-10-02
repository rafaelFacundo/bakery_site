import React from "react";
import useStyles from "./CircleArrowButton.styles";
import { Box } from "@mui/material";
import Arrow from "../../assets/images/arrow.png";

type CircleButtonArrowProps = {
  onClick: () => void;
  orientation: "right" | "left";
};

const CircleButtonArrow: React.FC<CircleButtonArrowProps> = ({
  onClick,
  orientation,
}) => {
  const classes = useStyles();
  return (
    <>
      <button
        className={
          orientation === "left"
            ? classes.sliderButtonLeft
            : classes.sliderButtonRigth
        }
        onClick={onClick}
      >
        <img src={Arrow} alt="arrow" className={classes.sliderButtonImage} />
      </button>
    </>
  );
};

export default CircleButtonArrow;
