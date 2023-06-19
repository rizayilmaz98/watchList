import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function WatchListMovie() {
  const favoriteMovieData = useSelector((state) => state.movies.favoriteList);
  return (
    <div className="container-fluid  bg-watchList pb-5">
      <div className="col-12 pt-4">
        <h4 className="text-center text-seventh fw-bold">
          WATCH LIST ({favoriteMovieData && favoriteMovieData.length})
        </h4>
      </div>
      
      <div className="row row-cols-1 row-cols-md-6 g-4 p-4 d-flex justify-content-center">
        {favoriteMovieData && favoriteMovieData.length > 0 ? (
          favoriteMovieData.map((item, index) => {
            return <MovieCard key={index} movieInfo={item} />;
          })
        ) : (
          <div className="mt-5">
            <p className="text-seventh text-center">Your Watch List is Empty</p>
          </div>
        )}
      </div>
      

    </div>
  );
}

export default WatchListMovie;
