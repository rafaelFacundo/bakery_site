import React from "react";
import useStyles from "./ProductCard.styles";
import { Box, Typography } from "@mui/material";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.imageDiv}>
        <img src={image} alt="cheese" className={classes.image} />
      </Box>
      <Box className={classes.productDescription}>
        <Typography variant="headerOption">{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{`starting at: ${price}`}</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
