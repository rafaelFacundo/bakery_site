import React from "react";
import { Box } from "@mui/material";
import useStyles from "./Footer.styles";
import BakerySiteLogo from "../../assets/images/bakery_icon.png";
import TypographyButton from "../TypographyButton";
import ImageButton from "../ImageButton";
import FacebookLogo from "../../assets/images/facebookLogo.png";
import InstagramLogo from "../../assets/images/instagramLogo.png";

import MasterCardLogo from "../../assets/images/mastercard.png";
import VisaLogo from "../../assets/images/visa.png";
import AmexLogo from "../../assets/images/amex.png";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.logoImageBox}>
        <img
          src={BakerySiteLogo}
          alt="Bakery logo site"
          className={classes.logoImage}
        />
      </Box>
      <Box className={classes.subsectionsBox}>
        <Box className={classes.subsectionBox}>
          <TypographyButton text={"CARRERS"} onClick={() => {}} />
          <TypographyButton text={"PRESS"} onClick={() => {}} />
          <TypographyButton text={"GIFT CARDS"} onClick={() => {}} />
          <TypographyButton text={"SUBSCRIPTION"} onClick={() => {}} />
          <TypographyButton text={"GIVING BACK"} onClick={() => {}} />
        </Box>
        <Box className={classes.subsectionBox}>
          <TypographyButton text={"HELP CENTER"} onClick={() => {}} />
          <TypographyButton text={"REFUNDS & RETURNS"} onClick={() => {}} />
          <TypographyButton text={"PROMOTION TERMS"} onClick={() => {}} />
          <TypographyButton text={"WHOLESALE"} onClick={() => {}} />
        </Box>
        <Box className={classes.subsectionBox}>
          <TypographyButton
            text={"DO NOT SELL MY INFORMATION"}
            onClick={() => {}}
          />
          <TypographyButton text={"PRIVACY POLICY"} onClick={() => {}} />
          <TypographyButton text={"TERMS OF SERVICES"} onClick={() => {}} />
          <TypographyButton
            text={"ACCESSIBILITY STATEMENT"}
            onClick={() => {}}
          />
        </Box>
      </Box>
      <Box className={classes.contactAndCreditCardBox}>
        <Box className={classes.socialMediaIcons}>
          <ImageButton
            image={FacebookLogo}
            alt="facebook"
            onClick={() => {}}
            className={classes.socialMediaIcon}
          />
          <ImageButton
            image={InstagramLogo}
            alt="instagram"
            onClick={() => {}}
            className={classes.socialMediaIcon}
          />
        </Box>
        <Box className={classes.creditCardsIcons}>
          <ImageButton
            image={MasterCardLogo}
            alt="mastercard"
            onClick={() => {}}
            className={classes.socialMediaIcon}
          />
          <ImageButton
            image={VisaLogo}
            alt="visa"
            onClick={() => {}}
            className={classes.socialMediaIcon}
          />
          <ImageButton
            image={AmexLogo}
            alt="american express"
            onClick={() => {}}
            className={classes.socialMediaIcon}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
