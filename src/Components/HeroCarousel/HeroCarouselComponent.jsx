import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Arrow components
import { NextArrow, PrevArrow } from "./ArrowsComponent";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

//    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsLGhvdGVsfHx8fHx8MTYzNTc5NTIxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
//     "https://images.unsplash.com/photo-1606046604972-77cc76aee944?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsLGhvdGVsfHx8fHx8MTYzNTc5NTIwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
//     "https://images.unsplash.com/photo-1503178427426-413e153f886c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsLGhvdGVsfHx8fHx8MTYzNTc5NTIwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240"
