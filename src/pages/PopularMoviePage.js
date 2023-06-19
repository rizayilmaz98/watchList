import React from "react";
import OtherNavbar from "../components/OtherNavbar";
import Footer from "../components/Footer";
import PopularMovies from "../components/PopularMovies";
import Pagination from "../components/Pagination";
function PopularMoviePage() {
  return (
    <div>
      <OtherNavbar />
      <PopularMovies />
      <Pagination />
      <Footer />
    </div>
  );
}

export default PopularMoviePage;
