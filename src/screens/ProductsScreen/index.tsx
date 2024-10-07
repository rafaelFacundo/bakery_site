import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./ProductsScreen.styles";
import SideTitleAnnouncementSection from "../../components/SideTitleAnnouncementSection";
import chesseCakeImage from "../../assets/images/chesseCake.jpg";
import TypographyButton from "../../components/TypographyButton";

import cheese from "../../assets/images/cheese.jpg";
import ProductCard from "./children/ProductCard";

const ProductsScreen: React.FC = () => {
  const classes = useStyles();
  const [showOptionList, setShowOptionList] = useState<any>({});
  const teste = [
    { filterOption: "flavor", optionList: ["strawberry", "banana"] },
    { filterOption: "Type", optionList: ["cheesecake"] },
    { filterOption: "delivery", optionList: ["local", "national"] },
  ];

  const handleOpen = (x: any) => {
    setShowOptionList((previous: any) => ({
      ...previous,
      [x]: !previous[x],
    }));
  };

  return (
    <Box className={classes.container}>
      <SideTitleAnnouncementSection
        title="Cheesecakes "
        description="A classic New York dessert melding decadent cream cheese filling and cookie crust to make a deliciously-rich bite."
        background="#bae8d4"
        showViewMoreOption={false}
        image={chesseCakeImage}
      />
      <Box className={classes.mainContentBox}>
        <Box className={classes.filterBox}>
          <Box className={classes.filterRow}>
            <Typography variant="filterHeader">Filter By</Typography>
            <TypographyButton text="clear all" onClick={() => {}} />
          </Box>
          {teste.map((element, index) => (
            <>
              <Box className={classes.filterOption}>
                <Box
                  className={classes.filterOptionHeader}
                  onClick={() => handleOpen(element.filterOption)}
                >
                  <Typography variant="headerOption" key={element.filterOption}>
                    {element.filterOption}
                  </Typography>
                </Box>
                <Box
                  className={classes.filterOptionList}
                  style={{
                    display:
                      showOptionList[element.filterOption] === true
                        ? "flex"
                        : "none",
                  }}
                >
                  {element.optionList.map((option) => (
                    <Typography key={option}>{option}</Typography>
                  ))}
                </Box>
              </Box>
            </>
          ))}
        </Box>
        <Box className={classes.productListBox}>
          <ProductCard
            image={cheese}
            name="Red Velvet Cheesecake"
            description="Our prized red velvet cake—but make it cheesecake! Ric.."
            price="Starting at $8.95 "
          />
          <ProductCard
            image={cheese}
            name="Red Velvet Cheesecake"
            description="Our prized red velvet cake—but make it cheesecake! Ric.."
            price="Starting at $8.95 "
          />{" "}
          <ProductCard
            image={cheese}
            name="Red Velvet Cheesecake"
            description="Our prized red velvet cake—but make it cheesecake! Ric.."
            price="Starting at $8.95 "
          />{" "}
          <ProductCard
            image={cheese}
            name="Red Velvet Cheesecake"
            description="Our prized red velvet cake—but make it cheesecake! Ric.."
            price="Starting at $8.95 "
          />{" "}
          <ProductCard
            image={cheese}
            name="Red Velvet Cheesecake"
            description="Our prized red velvet cake—but make it cheesecake! Ric.."
            price="Starting at $8.95 "
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsScreen;
