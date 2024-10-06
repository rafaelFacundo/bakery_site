import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./SideTitleAnnouncementSection.styles";
import ButtonLayout from "../../../../components/svg/ButtonLayout";
import TypographyButton from "../../../../components/TypographyButton";
import TesteImage from "../../../../assets/images/teste.jpg";

type AnnouncementProps = {
  title: string;
  description: string;
  showViewMoreOption: boolean;
  background: string;
};

const SideTitleAnnouncementSection: React.FC<AnnouncementProps> = ({
  title,
  description,
  showViewMoreOption,
  background,
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
        <img src={TesteImage} alt="bolo" className={classes.image} />
      </Box>
    </Box>
  );
};

export default SideTitleAnnouncementSection;
