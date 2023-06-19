import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteList,
  removeFavoriteList,
  getMovieGenreAsync,
} from "../redux/movies/moviesSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import { BsPlusLg, BsLink45Deg, BsFillTrashFill } from "react-icons/bs";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [singleMovieData, setSingleMovieData] = useState(null);
  const favoriteList = useSelector((state) => state.movies.favoriteList);

  useEffect(() => {
    dispatch(getMovieGenreAsync());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MDB_KEY}`
      )
      .then((res) => setSingleMovieData(res.data));
  }, [id, dispatch]);

  return (
    <div className="container-fluid bg-singleMovie">
      {singleMovieData && (
        <div className="row d-flex justify-content-center mb-5 pb-5 bg-black">
          <div className="col-11 col-md-8  p-0 bg-secondary border-3 mt-4 mb-5 rounded-3 d-md-flex cardShadow">
            <div className="col-12 col-md-4 text-center text-md-start">
              <img
                src={
                  singleMovieData.poster_path === null
                    ? "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                    : `https://image.tmdb.org/t/p/original/${singleMovieData.poster_path}`
                }
                alt=""
                className="rounded-1 img-fluid h-100 w-100"
                style={{ height: "65vh" }}
              />
            </div>
            <div className="col-12 col-md-8 px-2 px-md-2">
              <div className=" d-md-flex">
                <div className="col-12 col-md-8 mt-3 d-grid">
                  <h4 className="text-tenth text-center text-md-start fw-bold">
                    {singleMovieData.title.toUpperCase()}
                  </h4>
                  <div className="d-flex justify-content-center d-md-inline">
                    <ul className="d-flex gap-2 mt-2 list-unstyled flex-wrap">
                      {singleMovieData.genres.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="rounded-4 fs-9 px-3 py-1 bg-sixth text-third fw-semibold"
                          >
                            {item.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 mt-3 d-flex justify-content-center justify-content-md-end pe-md-5">
                  <div style={{ width: 65, height: 65 }}>
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        const percentage = isVisible
                          ? parseInt(singleMovieData.vote_average) * 10
                          : 0;
                        return (
                          <CircularProgressbar
                            value={percentage}
                            text={`${singleMovieData.vote_average.toFixed(1)}`}
                            styles={buildStyles({
                              textColor: "#FFDD00",
                              pathColor: "#FFDD00",
                              trailColor: "#9f9e9e",
                            })}
                            strokeWidth={7}
                          />
                        );
                      }}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-third fs-8 pe-md-2">
                  {singleMovieData.overview}
                </p>
              </div>
              <div className="mt-3 d-grid">
                <span className="text-seventh fw-semibold">Release Date</span>
                <span className="text-fourth fs-8 mt-2">
                  {singleMovieData.release_date.split("-").reverse().join(".")}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-seventh fw-semibold">
                  Spoken Languages{" "}
                </span>
                <ul className="d-flex mt-2 gap-3 gap-md-4 list-unstyled flex-wrap">
                  {singleMovieData.spoken_languages.map((item, index) => {
                    return (
                      <li key={index} className="text-fourth fs-8">
                        {item.english_name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-4 ">
                {singleMovieData.production_countries.length === 1 ? (
                  <span className="text-seventh fw-semibold">
                    Production Country
                  </span>
                ) : (
                  <span className="text-seventh fw-semibold">
                    Production Countries{" "}
                  </span>
                )}
                <ul className="d-flex mt-2 gap-3 gap-md-4 list-unstyled flex-wrap">
                  {singleMovieData.production_countries.map((item, index) => {
                    return (
                      <li key={index} className="text-fourth fs-8">
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="text-center text-md-end pb-2 pe-2 pt-5 mt-4 w-100">
                <Link to={`${singleMovieData.homepage}`} target="_blank">
                  <button className="px-3 py-2 fs-8 rounded-2 bg-fourteenth border-0 text-seventh fw-semibold me-2">
                    <BsLink45Deg className="mb-1" /> Movie Page
                  </button>
                </Link>
                  {favoriteList && favoriteList.find((e) => e.title === singleMovieData.title) ? (
                  <button
                    className="px-3 py-2 fs-8 rounded-2 border-0 text-seventh fw-semibold bg-sixth"
                    onClick={() =>
                      dispatch(removeFavoriteList(singleMovieData.title))
                    }
                  >
                    <BsFillTrashFill className="mb-1 me-1" />
                    Remove from WatchList
                  </button>
                ) : (
                  <button
                    className="px-3 py-2 fs-8 rounded-2 border-0 text-seventh fw-semibold bg-thirteenth"
                    onClick={() => dispatch(addFavoriteList(singleMovieData))}
                  >
                    <BsPlusLg className="mb-1 me-1" />
                    Add to WatchList
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleMovie;
