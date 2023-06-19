import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { changePageCount } from "../redux/movies/moviesSlice";

function Pagination() {
  const pageCount = useSelector((state) => state.movies.pageCount);
  const dispatch = useDispatch();
  return (
    <section className="container-fluid bg-black d-flex justify-content-center mb-5 pb-5">
      <div className="col-12 col-md-10 d-flex justify-content-center">
        <ul className="pagination pagination-sm ">
          <li
            className="page-item cursor"
            onClick={() => {
              dispatch(changePageCount("firstPage"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className={`page-link border-0 text-seventh py-2 ${
                pageCount === 1 ? "bg-secondary disabled" : " bg-sixth"
              }`}
            >
              <BsChevronDoubleLeft className="mb-1" /> First
            </span>
          </li>
          <li
            className="page-item cursor d-flex align-items-center"
            onClick={() => {
              pageCount === 1
                ? dispatch(changePageCount(""))
                : dispatch(changePageCount("previous"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className={`page-link border-0 text-seventh py-2 ${
                pageCount === 1 ? "bg-secondary disabled" : " bg-sixth"
              }`}
            >
              <BsChevronLeft className="mb-1" /> Previous
            </span>
          </li>
          <li className="page-item">
            <span
              className="page-link border-0 fw-bold px-4 py-2 px-md-5 bg-eighth text-seventh"
              style={{}}
            >
              {pageCount}
            </span>
          </li>
          <li
            className="page-item cursor"
            onClick={() => {
              pageCount === 500
                ? dispatch(changePageCount(""))
                : dispatch(changePageCount("next"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className={`page-link border-0 text-seventh py-2 ${
                pageCount === 500 ? "bg-secondary disabled" : " bg-sixth"
              }`}
            >
              Next <BsChevronRight className="mb-1" />
            </span>
          </li>
          <li
            className="page-item cursor"
            onClick={() => {
              dispatch(changePageCount("lastPage"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className={`page-link border-0 text-seventh py-2 ${
                pageCount === 500 ? "bg-secondary disabled" : " bg-sixth"
              }`}
            >
              Last <BsChevronDoubleRight className="mb-1" />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pagination;
