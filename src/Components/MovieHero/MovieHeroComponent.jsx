import React, { useContext } from "react";
// import MovieHero from "../Components/MovieHero/MovieHeroComponent";

import MovieInfo from "./MovieInfoComponent";

//context
import { MovieContext } from "../../Context/MovieContext";

const MovieHero = () => {
  // const [movie, setMovie] = useState({
  //   id: "diksha",
  //   original_name: "Blue Plaza",
  //   overview: "Adventure, Romantic, Delhi",
  //   backdrop_path:
  //     "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=320&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhdmVsLGhvdGVsfHx8fHx8MTYzNTc5NTIxOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1240",
  //   poster_path:
  //     "https://images.unsplash.com/photo-1543321269-9d86d3680e1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjYXRpb24saG90ZWx8fHx8fHwxNjM1ODYwMTU2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=250",
  // });

  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div>
        {/* mobile and tab */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="background"
            className="m-4 rounded"
            style={{
              width: "calc(100% - 2rem)",
            }}
          />
        </div>

        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>4k ratings</h4>
              <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
              <h4>
                {movie.runtime} min • {genres}{" "}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹599
            </button>
          </div>
        </div>

        {/* large screen devices  */}

        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          ></div>

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo movie={movie} />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="backdrop poster"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
