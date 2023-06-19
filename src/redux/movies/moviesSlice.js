import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getMovieGenreAsync = createAsyncThunk(
  "movies/getMovieGenreAsync",
  async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MDB_KEY}&language=en`
    );
    return res.data;
  }
);
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    changeMenu: "home",
    pageCount: 1,
    fiterInformation: [1965, 9, [""]],
    movieGenre: [],
    favoriteList: JSON.parse(localStorage.getItem("movies"))===null ? [] : JSON.parse(localStorage.getItem("movies")),
  },
  reducers: {
    changeMenuStatus: (state, action) => {
      state.changeMenu = action.payload;
    },
    changePageCount: (state, action) => {
      if (action.payload === "next") {
        state.pageCount++;
      } else if (action.payload === "previous") {
        state.pageCount--;
      } else if (action.payload === "firstPage") {
        state.pageCount = 1;
      } else if (action.payload === "lastPage") {
        state.pageCount = 500;
      } else {
      }
    },
    changeFilter: (state, action) => {
      state.fiterInformation = action.payload;
    },
    addFavoriteList: (state, action) => {
      localStorage.setItem("movies", JSON.stringify(state.favoriteList));
      const addData = state.favoriteList.push(action.payload);
      localStorage.setItem("movies", JSON.stringify(addData));
    },
    removeFavoriteList: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (movie) => movie.title !== action.payload
      );
      localStorage.setItem("movies", JSON.stringify(state.favoriteList));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieGenreAsync.fulfilled, (state, action) => {
      state.movieGenre = action.payload.genres;
    });
  },
});

export const {
  changeMenuStatus,
  changePageCount,
  changeFilter,
  addFavoriteList,
  removeFavoriteList,
} = moviesSlice.actions;
export default moviesSlice.reducer;
