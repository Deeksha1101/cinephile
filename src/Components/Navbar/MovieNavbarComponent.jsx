import React, { useContext } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { BiChevronDown, BiMenu, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { MovieContext } from "../../Context/MovieContext";

function NavSm() {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div className="text-gray-700 flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold ">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavLg() {
  return (
    <div className="container flex mx-auto px-4 items-center justify-between">
      <div className="flex items-center w-1/2 gap-40">
        <div className="w-10 h-10">
          <div className="w-full h-full font-link text-3xl text-white">
            <Link to={"/"}>Cinephile</Link>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <FaSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Plays
        </span>
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Delhi NCR <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-black border-b-2 lg:border-b-0 lg:bg-voilet-700 p-4 ">
        <div className="md:hidden">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          {/* Medium/Tab Screen */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
