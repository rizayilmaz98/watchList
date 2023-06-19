import React from "react";
import { Link } from "react-router-dom";
import iconWatch from "../assets/iconWatch.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeMenuStatus } from "../redux/movies/moviesSlice";

function OtherNavbar() {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.movies.changeMenu);
  const watchList = useSelector((state) => state.movies.favoriteList);
  return (
    <nav className="navbar navbar-expand-lg otherNavbar navbar-dark bg-black ">
      <div className="container">
        <Link className="navbar-brand fw-bold text-seventh" to="/">
          <img
            src={iconWatch}
            className="me-2"
            style={{ maxWidth: "100%" }}
            alt=""
          />
          OnlyWatch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="navbarLink"
                onClick={() => dispatch(changeMenuStatus("home"))}
              >
                <span
                  className="nav-link text-center cursor fw-semibold"
                  aria-current="page"
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/popularMovie"
                className="navbarLink"
                onClick={() => dispatch(changeMenuStatus("popular"))}
              >
                <span
                  className={`nav-link text-center cursor fw-semibold ${
                    activeMenu === "popular" ? "activeMenuText" : ""
                  }`}
                  aria-current="page"
                >
                  Popular Movie
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/searchMovie"
                className="navbarLink"
                onClick={() => dispatch(changeMenuStatus("search"))}
              >
                <span
                  className={`nav-link text-center cursor fw-semibold ${
                    activeMenu === "search" ? "activeMenuText" : ""
                  }`}
                >
                  Filter Movie
                </span>
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                to="/watchList"
                className="navbarLink"
                onClick={() => dispatch(changeMenuStatus("watchList"))}
              >
                <span
                  className={`nav-link text-center cursor fw-semibold rounded-5 bg-eighth px-lg-3 ${
                    activeMenu === "watchList" ? "activeMenuText" : ""
                  }`}
                >
                  Watch List ({watchList && watchList.length})
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default OtherNavbar;
