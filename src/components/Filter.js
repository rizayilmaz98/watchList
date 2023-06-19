import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/movies/moviesSlice";

function Filter() {
  const [genreData, setGenreData] = useState(null);
  const [year, setYear] = useState(null);
  const [imdb, setImdb] = useState("");
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MDB_KEY}&language=en`
      )
      .then((res) => setGenreData(res.data.genres));
  }, []);

  const handleYearInputChange = (e) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue, 10);
    if (parsedValue >= 1888 && parsedValue <= 2023) {
      setYear(inputValue);
    }
  };

  const filterMovie = (e) => {
    console.log("girdi");
    if (year === null) {
      alert("Yıl Bilgilerini 1888-2023 arasında girin");
    } else {
      dispatch(changeFilter([year, imdb, genres]));
    }
    e.preventDefault();
  };
  return (
    <section className="container border-0">
      <div className="row">
        <div className="col-12 bg-twelfth rounded-3">
          <p className="text-third fs-5 fw-bold text-center mt-2">
            FILTER MOVIES
          </p>
          <hr className="text-seventh" />
          <InputMask
            mask="9999"
            maskChar={null}
            value={year}
            onChange={handleYearInputChange}
            placeholder="Release Date"
            className="w-100 form-control mt-4"
          />
          <select
            className="form-select mt-4"
            value={imdb}
            onChange={(e) => setImdb(e.target.value)}
            aria-label="Default select example"
          >
            <option>IMDB Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div className="row mt-5 px-2">
            {genreData &&
              genreData.map((item, index) => {
                return (
                  <div className="col-6" key={index}>
                    <div className="form-check fs-8" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => {
                          setGenres([...genres, e.target.value]);
                        }}
                        value={item.id}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-third"
                        htmlFor="flexCheckDefault"
                      >
                        {item.name}
                      </label>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              type=""
              className="btn btn-tenth mt-3 fw-bold w-75"
              onClick={(e) => filterMovie(e)}
            >
              <FaFilter className="me-2" />
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
