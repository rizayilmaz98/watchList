import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ShowMovie from "./ShowMovie";
import { useSelector } from "react-redux";
import axios from "axios";

function SearchMovie() {
  const [filterMovieInformation, setFilterMovieInformation] = useState(null);
  const filterInformation = useSelector(
    (state) => state.movies.fiterInformation
  );
  useEffect(() => {
    filterInformation &&
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            process.env.REACT_APP_MDB_KEY
          }&language=en-US&sort_by=popularity.desc&page=1&primary_release_date.gte=${
            filterInformation[0]
          }-01-01&primary_release_date.lte=${
            filterInformation[0]
          }-12-31&vote_average.gte=${
            filterInformation[1]
          }&with_genres=${filterInformation[2].map((item) => `${item},`)}`
        )
        .then((res) => setFilterMovieInformation(res.data));
  }, [filterInformation]);

  return (
    <section className="container-fluid px-5 pb-3 bg-black">
      <div className="row pt-3">
        <div className="col-12 col-md-3">
          <Filter />
        </div>
        <div className="col-12 col-md-9 mt-5 mt-md-0">
          <ShowMovie movieData={filterMovieInformation} />
        </div>
      </div>
    </section>
  );
}

export default SearchMovie;
