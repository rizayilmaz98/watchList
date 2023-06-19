import React from "react";
import MovieCard from "./MovieCard";
function ShowMovie({ movieData }) {
  return (
    <div className="row row-cols-1 row-cols-md-5 g-4 pb-5">
      {movieData &&
        movieData.results.map((item, index) => {
          return <MovieCard key={index} movieInfo={item} />;
        })}
    </div>
  );
}

export default ShowMovie;
