import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2 py-4">
        <img
          className="w-full h-full rounded-xl"
          src={props.src}
          alt="entertainment img"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NTUwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1514899706957-d22ee867a77b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NTk5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1539481915544-f5cd50562d66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NTk4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NTk5MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1621276336795-925346853745?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NjAyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1634157703702-3c124b455499?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NjA0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1494000423186-5c470f68ed62?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NjA0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1538438839575-1303ee807d1f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWxzLGhvdGVsfHx8fHx8MTYzNTg1NjUyNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1551785889-958d14a884aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWxzLGhvdGVsfHx8fHx8MTYzNTg1NjUzNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1589569334232-fdc917c38226?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NjA1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    "https://images.unsplash.com/photo-1580478341213-659047bb025c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2luZW1hLG1vdmllfHx8fHx8MTYzNjU1NjA1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",

    // "https://images.unsplash.com/photo-1605346475807-2088e0897b2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8aG90ZWxzLGhvdGVsfHx8fHx8MTYzNTg1NjU2OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250"
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
