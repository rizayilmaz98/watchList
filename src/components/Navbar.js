import React from "react";
import Footer from "./Footer";
import iconWatch from "../assets/iconWatch.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStatus } from "../redux/movies/moviesSlice";

function Navbar() {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.movies.favoriteList);
  return (
    <div className="hebele">
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-transparent">
        <div className="container">
          <span className="navbar-brand fw-bold text-seventh">
            <img
              src={iconWatch}
              className="me-2"
              style={{ maxWidth: "100%" }}
              alt=""
            />
            OnlyWatch
          </span>
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
                    className="nav-link activeMenuText text-center cursor
           fw-semibold"
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
                    className="nav-link text-center cursor fw-semibold"
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
                  <span className="nav-link text-center cursor fw-semibold">
                    Filter Movie
                  </span>
                </Link>
              </li>
              <li className="nav-item ms-lg-3 ">
                <Link
                  to="/watchList"
                  className="navbarLink"
                  onClick={() => dispatch(changeMenuStatus("watchList"))}
                >
                  <span className="nav-link text-center cursor fw-semibold rounded-5 bg-eighth px-lg-3">
                    Watch List ({watchList.length})
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="col-12 h-50 d-grid align-items-center">
        <div className="text-center mt-5 mt-lg-0 pt-3 pt-lg-0">
          <div>
            <p className="text-seventh fw-bold fs-2">
              Your Viewing Guide For Movies
            </p>
          </div>
          <div>
            <p className="text-ninth fs-6 ">
              Easily discover new and popular movies and add them to your list
              with OnlyWatch !
            </p>
          </div>
          <div className="d-flex justify-content-center gap-4 mt-5">
            <div className="">
              <Link
                to="popularMovie"
                className="btn btn-eighth fs-6 px-lg-5"
                onClick={() => dispatch(changeMenuStatus("popular"))}
              >
                Popular Movies
              </Link>
            </div>
            <div className="">
              <Link
                to="searchMovie"
                className="btn btn-eighth fs-6 px-lg-5"
                onClick={() => dispatch(changeMenuStatus("search"))}
              >
                Search Movies
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
