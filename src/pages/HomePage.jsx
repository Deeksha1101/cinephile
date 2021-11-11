import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
      console.log(getPopularMovies);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setPremiereMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovie = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovie.data.results);
    };

    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Movies
        </h1>
        <EntertainmentCardSlider isDark={true} />
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <PosterSlider
            title="Premieres"
            subtitle="Brand new Movies"
            posters={premiereMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          title="Online Streaming Event"
          subtitle="List of recommended Movies"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default HomePage;
