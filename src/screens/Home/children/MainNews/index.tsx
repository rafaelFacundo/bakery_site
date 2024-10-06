import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useStyles from "./News.styles";

import BoloImage from "../../../../assets/images/bolo.jpg";
import CookiesImage from "../../../../assets/images/cookies.jpg";
import PanettoneImage from "../../../../assets/images/panettone.jpg";
import Arrow from "../../../../assets/images/arrow.png";

import Quadro from "../../../../components/svg/quadro";

const MainNews: React.FC = () => {
  const newsCardBoxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
    }
    if (currentSlideIndex < testes.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleScrollToLeft = () => {
    if (newsCardBoxRef.current) {
      newsCardBoxRef.current.scrollBy({
        left: -newsCardBoxRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  console.log(buttonRef.current?.getBoundingClientRect());

  const buttonRefValues = buttonRef.current?.getBoundingClientRect();

  return (
    <Box className={classes.container}>
      <Box className={classes.newsCardBox} ref={newsCardBoxRef}>
        {testes.map((teste) => (
          <Box className={classes.newsCard} key={teste.title}>
            <Box className={classes.descriptionBox}>
              <Quadro className={classes.quadro} />
              <Box className={classes.teste}>
                <Typography variant="h4">{teste.title}</Typography>
                <Typography>{teste.description}</Typography>
                <button ref={buttonRef} className={classes.seeMoreButton}>
                  Saiba mais
                </button>
              </Box>
            </Box>

            <img src={teste.image} alt="Bolo" className={classes.cardImage} />
          </Box>
        ))}
      </Box>
      <Box
        className={classes.sliderButtonsBox}
        style={
          buttonRefValues && {
            top: buttonRefValues.top,
            width: buttonRefValues.width,
          }
        }
      >
        <button
          className={classes.sliderButtonLeft}
          onClick={handleScrollToLeft}
        >
          <img src={Arrow} alt="arrow" className={classes.sliderButtonImage} />
        </button>
        <Box className={classes.indexSliderCircleBox}>
          {testes.map((teste, index) => (
            <Box
              className={`${classes.indexSliderCircle} ${
                index === currentSlideIndex && classes.currentIndexSliderCircle
              }`}
              key={`${teste.title} ${index}`}
            ></Box>
          ))}
        </Box>
        <button
          className={classes.sliderButtonRigth}
          onClick={handleScrollToRight}
        >
          <img src={Arrow} alt="arrow" className={classes.sliderButtonImage} />
        </button>
      </Box>
    </Box>
  );
};

export default MainNews;
