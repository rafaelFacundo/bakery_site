import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./ProductInfo.styles";
import Bolo from "../../../../assets/images/bolo2.jpg";
import BoloCortado from "../../../../assets/images/boloCortado.jpg";
import CircleButtonArrow from "../../../../components/CircleArrowButton";

const ProductInfo: React.FC = () => {
  const classes = useStyles();
  const photos = [Bolo, BoloCortado];
  return (
    <Box className={classes.container}>
      <Box className={classes.imageBox}>
        <img src={Bolo} className={classes.image} alt="Cake" />
      </Box>
      <Box className={classes.imageSliderBox}>
        <Box className={classes.imageList}>
          {photos.map((photo) => (
            <>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
              <Box className={classes.sliderImageBox}>
                <img src={photo} className={classes.image} alt="Cake" />
              </Box>
            </>
          ))}
        </Box>
        <Box className={classes.imageSliderButtonsBox}>
          <CircleButtonArrow onClick={() => {}} orientation="left" />
          <CircleButtonArrow onClick={() => {}} orientation="right" />
        </Box>
      </Box>
      <Box className={classes.descriptionsBox}>
        <Box className={classes.descriptionBox}>
          <Typography>
            We make our buttery, beloved vanilla cake extra festive with
            confetti folded into each layer, then cover the cake with
            buttercream and adorn it with more confetti outside.
          </Typography>
        </Box>
        <Box className={classes.howManyServesBox}>
          <Typography>3 Layer 6" Cake - Serves 6 to 8</Typography>
          <Typography>3 Layer 9" Cake - Serves 25 to 28</Typography>
        </Box>
        <Box className={classes.detailsBox}>
          <Box className={classes.detailsBoxHeader}>
            <Typography>Ingredients</Typography>
          </Box>
          <Box className={classes.detailText}>
            <Typography>
              Confetti Cake (Sugar, Cake Flour (Bleached Wheat Flour, Niacin,
              Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Whole Milk
              (Vitamin D3), Butter (Pasteurized Cream, Natural Flavorings
              (Lactic Acid)), Egg Whites, Sprinkles (Sugar, Cornstarch, Rice
              Flour, Palm Oil, Gum Acacia, Xantham Gum, Natural And Artificial
              Flavor, Titanium Dioxide, Red 3, Blue 1 Lake, Blue 1, Yellow 5,
              Yellow 6, Potassium Sorbate, Mono-&Diglycerides, Polysorbate 60),
              Sour Cream (Cultured Cream), Pure Vanilla Extract (Vanilla Bean
              Extractives In Water, Alcohol (35%)), Baking Powder (Corn Starch,
              Sodium Bicarbonate, Sodium Aluminum Sulfate And Monocalcium
              Phosphate), Salt (Salt, Yellow Prussiate Of Soda), Baking Soda),
              Vanilla Buttercream (Powdered Sugar (Sugar, Cornstarch), Butter
              (Pasteurized Cream, Natural Flavorings (Lactic Acid)), Whole Milk
              (Vitamin D3), Pure Vanilla Extract (Vanilla Bean Extractives In
              Water, Alcohol (35%)), Food Coloring (Water, Sugar, One Or More Of
              The Following Colors: Blue 1, Blue 2, Yellow 5, Yellow 6, Red 3,
              Red 40, Titanium Dioxide, Mica Pigment, Vegetable Gum, Modified
              Corn Starch, Citric Acid And Less Than 1% Sodium Benzoate,
              Potassium 6"3l Confetti Cake Serving Size 1/19 Cake (80g) % Daily
              Value* Total Fat 16g 21% Saturated Fat 10g 50% Trans Fat 0.5g
              Cholesterol 40mg 13% Sodium 80mg 3% Total Carbohydrate 56g 20%
              Dietary Fiber 0g 0% Total Sugars 46g Includes 45g Added Sugars 90%
              Protein 2g Vitamin D 0.1mcg 0% Calcium 30mg 2% Iron 0.5mg 4%
              Potassium 40mg 0% * The % Daily Value (Dv) Tells You How Much A
              Nutrient In A Serving Of Food Contributes To A Daily Diet. 2,000
              Calories A Day Is Used For General Nutrition Advice. Nutrition
              Facts About 19 Servings Per Container Amount Per Serving Calories
              370 Sorbate)), Sprinkles (Sugar, Cornstarch, Rice Flour, Palm Oil,
              Gum Acacia, Xantham Gum, Natural And Artificial Flavor, Titanium
              Dioxide, Red 3, Blue 1 Lake, Blue 1, Yellow 5, Yellow 6, Potassium
              Sorbate, Mono-&Diglycerides, Polysorbate 60)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
