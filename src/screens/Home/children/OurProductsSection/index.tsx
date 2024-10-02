import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./OurProductsSection.styles";
import Slider from "../../../../components/Slider";

const OurProductsSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.sectionTitleAndDescriptionBox}>
        <Typography className={classes.sectionTitleAndDescription} variant="h3">
          Our products
        </Typography>
        <Typography
          className={classes.sectionTitleAndDescription}
          variant="subtitle2"
        >
          For more than 25 years, Magnolia Bakery has been making America’s
          favorite baked goods the old-fashioned way: from scratch, in small
          batches, and using the finest ingredients.
        </Typography>
      </Box>
      <Box className={classes.sliderSection}>
        <Slider />
      </Box>
    </Box>
  );
};

export default OurProductsSection;
