import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./AnnouncementSection.styles";

type AnnouncementProps = {
  title: string;
  description: string;
  component: React.ReactNode;
  showViewMoreOption: boolean;
  background: string;
};

const AnnouncementSection: React.FC<AnnouncementProps> = ({
  title,
  description,
  component,
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
            <Typography className={classes.viewMoxText} variant="subtitle2">
              View More
            </Typography>
          </Box>
        )}
      </Box>
      <Box className={classes.sliderSection}>{component}</Box>
    </Box>
  );
};

export default AnnouncementSection;
