import React from "react";
import useStyles from "./ImageButton.styles";

type ImageButtonProps = {
  className?: string;
  onClick: () => void;
  image: string;
  alt: string;
};

const ImageButton: React.FC<ImageButtonProps> = ({
  className,
  onClick,
  image,
  alt,
}) => {
  const classes = useStyles();
  return (
    <button
      onClick={onClick}
      className={`${classes.container} ${className && className}`}
    >
      <img src={image} alt={alt} className={classes.image} />
    </button>
  );
};

export default ImageButton;
