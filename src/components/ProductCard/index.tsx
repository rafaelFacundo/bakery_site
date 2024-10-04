import React from "react";
import useStyles from "./ProductCard.styles";
import { Box, Typography } from "@mui/material";

type ProductCardProps = {
  productImage: string;
  productName: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  productImage,
  productName,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.productImageBox}>
        <img
          src={productImage}
          alt="cupcake"
          className={classes.productImage}
        />
      </Box>
      <Box className={classes.productTitleBox}>
        <Typography>{productName}</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
