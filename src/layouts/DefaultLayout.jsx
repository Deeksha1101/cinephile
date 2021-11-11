import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/NavbarComponent";
import Footer from "../Components/Footer/Footer";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
