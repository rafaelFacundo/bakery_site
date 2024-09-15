import React from "react";
import useStyles from "./Header.styles";
import { Box, Typography } from "@mui/material";
import BakerySiteLogo from "../../assets/images/bakery_icon.png";
import SearchIcon from "../../assets/images/searchIcon.png";
import UserIcon from "../../assets/images/userLogo.png";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.saleBox}>
        <Typography variant="body2">panettones on sale</Typography>
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.logoImageBox}>
          <img
            src={BakerySiteLogo}
            alt="Bakery logo site"
            className={classes.logoImage}
          />
        </Box>
        <Box className={classes.sectionsBox}>
          <Typography variant="h6" className={classes.sections}>
            salgados
          </Typography>
        </Box>
        <Box className={classes.sectionsBox}>
          <Typography variant="h6" className={classes.sections}>
            bolos
          </Typography>
        </Box>
        <Box className={classes.sectionsBox}>
          <Typography variant="h6" className={classes.sections}>
            kit festas
          </Typography>
        </Box>
        <Box className={classes.sectionsBox}>
          <Typography variant="h6" className={classes.sections}>
            Panettones
          </Typography>
        </Box>
        <Box className={classes.sectionsBox}>
          <Typography variant="h6" className={classes.sections}>
            sobre nos
          </Typography>
        </Box>
        <Box className={classes.accountBox}>
          <img
            className={classes.icons}
            src={SearchIcon}
            alt="Bakery logo site"
          />
          <img
            className={classes.icons}
            src={UserIcon}
            alt="Bakery logo site"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
