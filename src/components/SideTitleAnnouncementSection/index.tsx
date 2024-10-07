import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./SideTitleAnnouncementSection.styles";
import ButtonLayout from "../svg/ButtonLayout";
import TypographyButton from "../TypographyButton";

type AnnouncementProps = {
  title: string;
  description: string;
  showViewMoreOption: boolean;
  background: string;
  image: string;
};

const SideTitleAnnouncementSection: React.FC<AnnouncementProps> = ({
  title,
  description,
  showViewMoreOption,
  background,
  image,
}) => {
  const classes = useStyles({ background: background });

  return (
    <Box className={classes.container} style={{ backgroundColor: background }}>
      <Box className={classes.sectionTitleAndDescriptionBox}>
        <Box className={classes.descriptionBox}>
          <Typography
            className={classes.sectionTitleAndDescription}
            variant="announcement"
          >
            {title}
          </Typography>
        </Box>
        <Box className={classes.descriptionBox}>
          <Typography
            className={classes.sectionTitleAndDescription}
            variant="announcementDescription"
          >
            {description}
          </Typography>
        </Box>

        {showViewMoreOption && (
          <Box className={classes.viewMoreBox}>
            <ButtonLayout className={classes.buttonLayout} />
            <TypographyButton
              className={classes.buttonLayoutText}
              text={"view more"}
              onClick={() => {}}
            />
          </Box>
        )}
      </Box>
      <Box className={classes.sliderSection}>
        <img src={image} alt="bolo" className={classes.image} />
      </Box>
    </Box>
  );
};

export default SideTitleAnnouncementSection;
