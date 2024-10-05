import React from "react";
import useStyles from "./BigInput.styles";
import { Box } from "@mui/material";
import SendArrow from "../../assets/images/senArrow.png";
import InputLayout from "../svg/inputLayout";

const BigInput: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <input className={classes.input} placeholder="ENTER O EMAIL ADDRESS" />
      <button className={classes.sendButton}>
        <img
          src={SendArrow}
          alt="send email button"
          className={classes.sendButtonImage}
        />
      </button>
      <InputLayout className={classes.inputLayoutSvg} />
    </Box>
  );
};

export default BigInput;
