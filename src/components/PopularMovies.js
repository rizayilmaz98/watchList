import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import axios from "axios";

function PopularMovies() {
  const [movieData, setMovieData] = useState(null);
  const pageCount = useSelector((state) => state.movies.pageCount);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MDB_KEY}&language=en-US&page=${pageCount}`
      )
      .then((res) => setMovieData(res.data));
  }, [pageCount]);

  return (
    <section className="container-fluid pt-5 pb-5 bg-black">
      <div className="col-9 col-md-10 mx-auto">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {movieData &&
            movieData.results.map((item, index) => {
              return <MovieCard key={index} movieInfo={item} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default PopularMovies;
