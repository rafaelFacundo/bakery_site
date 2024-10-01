import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./News.styles";

import Quadro from "../svg/quadro";

import BoloImage from "../../assets/images/bolo.jpg";
import CookiesImage from "../../assets/images/cookies.jpg";
import PanettoneImage from "../../assets/images/panettone.jpg";
import Arrow from "../../assets/images/arrow.png";

const MainNews: React.FC = () => {
  const newsCardBoxRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const classes = useStyles();

  const testes = [
    {
      title: "BOLO DE MARACUJA",
      description: "O NOVO BOLO DE MARACUJA FEITO COM MARACUJAS DA INDIA...",
      image: BoloImage,
    },
    {
      title: "PANETTONE DE MARACUJA",
      description:
        "O NOVO PANETTONE DE MARACUJA FEITO COM MARACUJAS DA INDIA...",
      image: PanettoneImage,
    },
    {
      title: "COOKIE DE MARACUJA",
      description: "O NOVO COOKIE DE MARACUJA FEITO COM MARACUJAS DA INDIA...",
      image: CookiesImage,
    },
  ];

  const handleScrollToRight = () => {
    if (newsCardBoxRef.current) {
      newsCardBoxRef.current.scrollBy({
        left: newsCardBoxRef.current.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleScrollToLeft = () => {
    if (newsCardBoxRef.current) {
      newsCardBoxRef.current.scrollBy({
        left: -newsCardBoxRef.current.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.newsCardBox} ref={newsCardBoxRef}>
        {testes.map((teste) => (
          <Box className={classes.newsCard} key={teste.title}>
            <Box className={classes.descriptionBox}>
              <Typography variant="h4">{teste.title}</Typography>
              <Typography>{teste.description}</Typography>
              <button className={classes.seeMoreButton}>Saiba mais</button>
              <Box className={classes.sliderButtonsBox}>
                <button
                  className={classes.sliderButtonLeft}
                  onClick={handleScrollToLeft}
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={classes.sliderButtonImage}
                  />
                </button>
                <Box className={classes.indexSliderCircleBox}>
                  {testes.map((teste, index) => (
                    <Box
                      className={`${classes.indexSliderCircle} ${
                        index === currentSlideIndex &&
                        classes.currentIndexSliderCircle
                      }`}
                      key={`${teste.title} ${index}`}
                    ></Box>
                  ))}
                </Box>
                <button
                  className={classes.sliderButtonRigth}
                  onClick={handleScrollToRight}
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={classes.sliderButtonImage}
                  />
                </button>
              </Box>
            </Box>

            <img src={teste.image} alt="Bolo" className={classes.cardImage} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainNews;
