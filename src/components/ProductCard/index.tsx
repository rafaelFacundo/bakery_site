import React from "react";
import useStyles from "./ProductCard.styles";
import { Box, Typography } from "@mui/material";

import CupCake from "../../assets/images/cupcake.jpg";

const ProductCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <img src={CupCake} alt="cupcake" />
      <Typography>Cupcake</Typography>
    </Box>
  );
};

export default ProductCard;
