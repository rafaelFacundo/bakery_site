import React from "react";
import useStyles from "./BigInput.styles";
import { Box, TextField } from "@mui/material";

const BigInput: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <input className={classes.input} />
      <button className={classes.sendButton}>{"->"}</button>
    </Box>
  );
};

export default BigInput;
