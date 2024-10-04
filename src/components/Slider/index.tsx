import React, { useEffect, useRef, useState } from "react";
import useStyles from "./Slider.styles";
import { Box } from "@mui/material";
import CircleButtonArrow from "../CircleArrowButton";
import ProductCard from "../ProductCard";

type SliderProps = {
  listOfComponents: React.ReactNode[];
};

const Slider: React.FC<SliderProps> = ({ listOfComponents }) => {
  const slideSectionRef = useRef<HTMLDivElement>(null);
  const [doesTheSliderHaveAnOverflow, setDoesTheSliderHaveAnOverflow] =
    useState(true);
  const classes = useStyles({ doesNeedToSlide: doesTheSliderHaveAnOverflow });

  useEffect(() => {
    const elementToObserve = slideSectionRef.current;

    if (!elementToObserve) return;

    const handleSize = () => {
      if (elementToObserve.scrollWidth > elementToObserve.clientWidth) {
        setDoesTheSliderHaveAnOverflow(true);
      } else {
        setDoesTheSliderHaveAnOverflow(false);
      }
    };

    const resizeObserver = new ResizeObserver(() => handleSize());

    resizeObserver.observe(elementToObserve);

    return () => {
      if (elementToObserve) {
        resizeObserver.unobserve(elementToObserve);
      }
    };
  }, []);

  const handleScrollRight = () => {
    if (slideSectionRef.current) {
      slideSectionRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (slideSectionRef.current) {
      slideSectionRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className={classes.container}>
      {doesTheSliderHaveAnOverflow && (
        <Box className={classes.arrowButtonsSection}>
          <CircleButtonArrow orientation="left" onClick={handleScrollLeft} />
          <CircleButtonArrow orientation="right" onClick={handleScrollRight} />
        </Box>
      )}
      <Box
        className={classes.slideSection}
        ref={slideSectionRef}
        style={{
          justifyContent: doesTheSliderHaveAnOverflow ? "flex-start" : "center",
        }}
      >
        {listOfComponents}
      </Box>
    </Box>
  );
};

export default Slider;
