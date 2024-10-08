import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./BuyProductScreen.style";

import ProductInfo from "./children/productInfo";

const BuyProductScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <ProductInfo />
      <Box className={classes.priceAndSelections}>
        <Box className={classes.productName}>
          <Typography>Confetti Cake</Typography>
        </Box>
        <Box className={classes.productPrice}>
          <Typography>$59.00</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyProductScreen;
