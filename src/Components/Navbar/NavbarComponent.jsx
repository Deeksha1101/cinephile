import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <FaSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <FaSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies"
      />
    </div>
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
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          <Link to={"/plays"}>Plays</Link>
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

const Navbar = () => {
  return (
    <nav className="px-4 py-3 bg-voilet-700">
      <div className="md:hidden">
        {/* mobile device  */}
        <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">
        {/* medium/tab device  */}
        <NavMd />
      </div>
      <div className="hidden w-full lg:flex">
        {/* large device  */}
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
