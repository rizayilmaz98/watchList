import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

function MovieCard({ movieInfo }) {
  return (
    <div className="col">
      <Link
        to={`/popularMovie/${movieInfo.id}`}
        className="card h-100 categoryCardText border-0"
      >
        <img
          src={
            movieInfo.poster_path === null
              ? "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
              : `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`
          }
          className="card-img-top h-100"
          alt="..."
        />
        <div className="overlay  d-grid align-items-center">
          <div className="text">
            <div
              className=" mt-5 mt-md-0 mx-auto"
              style={{ width: 75, height: 75 }}
            >
              <CircularProgressbar
                value={parseInt(movieInfo.vote_average) * 10}
                text={`${movieInfo.vote_average.toFixed(1)}`}
                strokeWidth={5}
                styles={buildStyles({
                  textColor: "#FFDD00",
                  pathColor: "#FFDD00",
                  trailColor: "#9f9e9e",
                })}
              />
            </div>{" "}
            <br />
            <span className="fs-8 fw-bold pt-5 pt-md-0">{movieInfo.title}</span>
            <br />
            <span className="fs-9">
              ({movieInfo.release_date.split("-")[0]})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
