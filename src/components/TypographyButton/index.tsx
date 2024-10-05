import React from "react";
import { Button, Typography } from "@mui/material";
import useStyles from "./TypographyButton.styles";

type TypographyButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const TypographyButton: React.FC<TypographyButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  const classes = useStyles();
  return (
    <button className={`${classes.container} ${className}`} onClick={onClick}>
      <Typography className={classes.typography}>{text}</Typography>
    </button>
  );
};

export default TypographyButton;
