import { Box, Slide } from "@mui/material";
import React from "react";
import MainNews from "./children/MainNews";
import AnnouncementSection from "./children/AnnouncementSection";
import useStyles from "./Home.styles";
import ProductCard from "../../components/ProductCard";
import cupCakeImage from "../../assets/images/cupcake.jpg";
import BirthDayCake from "../../assets/images/birthDayCake.jpeg";
import Slider from "../../components/Slider";
import BigInput from "../../components/BigInput";
import SideTitleAnnouncementSection from "../../components/SideTitleAnnouncementSection";
import TsteImage from "../../assets/images/teste.jpg";

const Home: React.FC = () => {
  const products = [
    { name: "cupCake", image: cupCakeImage },
    { name: "teste 1", image: cupCakeImage },
    { name: "teste 2", image: cupCakeImage },
    { name: "teste 3", image: cupCakeImage },
    { name: "teste 4", image: cupCakeImage },
    { name: "teste 5", image: cupCakeImage },
    { name: "teste 6", image: cupCakeImage },
  ];

  const productsCardsArray = products.map((product) => (
    <ProductCard
      key={product.name}
      productName={product.name}
      productImage={product.image}
    />
  ));

  const OccasionsList = [
    {
      name: "birthDay",
      image: BirthDayCake,
    },
    {
      name: "Gifts under 50$",
      image: BirthDayCake,
    },
    {
      name: "Mais vendidos",
      image: BirthDayCake,
    },
    {
      name: "comidas rápidas",
      image: BirthDayCake,
    },
  ];

  const occasionsCardsArray = OccasionsList.map((occasion) => (
    <ProductCard
      key={occasion.name}
      productName={occasion.name}
      productImage={occasion.image}
    />
  ));
  return (
    <Box>
      <MainNews />
      <AnnouncementSection
        title="Our products"
        description="For more than 25 years, Magnolia Bakery has been making America’s
          favorite baked goods the old-fashioned way: from scratch, in small
          batches, and using the finest ingredients."
        component={<Slider listOfComponents={productsCardsArray} />}
        showViewMoreOption={true}
        background={"white"}
      />
      <AnnouncementSection
        title="Treats for any Occasion "
        description="We've got you covered for any holiday, special occasion, or cause for celebration. "
        component={<Slider listOfComponents={occasionsCardsArray} />}
        showViewMoreOption={true}
        background={"#bae8d4"}
      />
      <AnnouncementSection
        title="Delivery and Pick Up Options"
        description="We make it easy for you to get Magnolia Bakery's best, wherever you are. Order now for nationwide shipping, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event."
        component={<Slider listOfComponents={productsCardsArray} />}
        showViewMoreOption={true}
        background={"white"}
      />
      <SideTitleAnnouncementSection
        title="Catering, Gifting & Events"
        description="Our catering, gifting and events team is ready to fill your event or celebration with a custom selection of Magnolia Bakery's best creations. No occasion is too large—or too small!"
        showViewMoreOption={true}
        background={"pink"}
        image={TsteImage}
      />
      <AnnouncementSection
        title="Join our Newsletter"
        description="Get the freshest Magnolia Bakery updates and offers right to your inbox! Plus, enjoy 10% off on your birthday when you share the date with us!"
        component={<BigInput />}
        showViewMoreOption={false}
        background={"white"}
      />
    </Box>
  );
};

export default Home;
