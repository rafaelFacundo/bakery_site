import announcementOneImageOne from "../assets/mock/announcementImages/announcement1/announ_1_1.jpg";
import announcementOneImageTwo from "../assets/mock/announcementImages/announcement1/announ_1_2.jpg";
import announcementOneImageThree from "../assets/mock/announcementImages/announcement1/announ_1_3.jpg";
import announcementOneImageFour from "../assets/mock/announcementImages/announcement1/announ_1_4.jpg";
import announcementOneImageFive from "../assets/mock/announcementImages/announcement1/announ_1_5.jpg";

import announcementTwoImageOne from "../assets/mock/announcementImages/announcement2/announ_2_1.jpg";
import announcementTwoImageTwo from "../assets/mock/announcementImages/announcement2/announ_2_2.jpg";
import announcementTwoImageThree from "../assets/mock/announcementImages/announcement2/announ_2_3.jpg";
import announcementTwoImageFour from "../assets/mock/announcementImages/announcement2/announ_2_4.jpg";

import announcementThreeImageOne from "../assets/mock/announcementImages/announcement3/announ3_1.jpg";
import announcementThreeImageTwo from "../assets/mock/announcementImages/announcement3/announ3_2.jpg";
import announcementThreeImageThree from "../assets/mock/announcementImages/announcement3/announ3_3.jpg";

import announcementFourImageOne from "../assets/mock/announcementImages/announcement4/announ4_1.jpg";

const announcementsMock = [
  {
    type: 1,
    title: "Our Products",
    description:
      "For more than 25 years, Magnolia Bakery has been making America’s favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.",
    showViewMoreButton: true,
    cardsToShow: [
      {
        title: "Cupcakes",
        image: announcementOneImageOne,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Brownies & Bars",
        image: announcementOneImageTwo,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Cakes",
        image: announcementOneImageThree,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Sampler Packs",
        image: announcementOneImageFour,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "World-Famous Banana Pudding",
        image: announcementOneImageFive,
        redirect: {
          to: "TODO",
        },
      },
    ],
  },
  {
    type: 1,
    title: "Treats for any Occasion ",
    description:
      "We've got you covered for any holiday, special occasion, or cause for celebration.",
    showViewMoreButton: true,
    cardsToShow: [
      {
        title: "Best Sellers",
        image: announcementTwoImageOne,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Birthday",
        image: announcementTwoImageTwo,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Gifts Under $50",
        image: announcementTwoImageThree,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Lotsa Chocolate",
        image: announcementTwoImageFour,
        redirect: {
          to: "TODO",
        },
      },
    ],
  },
  {
    type: 1,
    title: "Delivery and Pick Up Options",
    description:
      "We make it easy for you to get Magnolia Bakery's best, wherever you are. Order now for nationwide shipping, place an order to pickup at your local shop, or get in touch with our team to arrange custom catering for your next event.",
    showViewMoreButton: true,
    cardsToShow: [
      {
        title: "Nationwide Shipping",
        image: announcementThreeImageOne,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Advance Orders for Local Pick Up",
        image: announcementThreeImageTwo,
        redirect: {
          to: "TODO",
        },
      },
      {
        title: "Catering & Events",
        image: announcementThreeImageThree,
        redirect: {
          to: "TODO",
        },
      },
    ],
  },
  {
    type: 2,
    title: "Catering, Gifting & Events",
    description:
      "Our catering, gifting and events team is ready to fill your event or celebration with a custom selection of Magnolia Bakery's best creations. No occasion is too large—or too small!",
    buttonText: "GET STARTED",
    image: announcementFourImageOne,
  },
];

export default announcementsMock;
