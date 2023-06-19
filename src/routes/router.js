import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleMoviePage from "../pages/SingleMoviePage";
import WatchListPage from "../pages/WatchListPage";
import PopularMoviePage from "../pages/PopularMoviePage";
import SearchMoviePage from "../pages/SearchMoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/popularMovie",
    children: [
      {
        index: true,
        element: <PopularMoviePage />,
      },
      {
        path: ":id",
        element: <SingleMoviePage />,
      },
    ],
  },
  {
    path: "/searchMovie",
    element: <SearchMoviePage />,
  },
  {
    path: "/watchList",
    element: <WatchListPage />,
  },
]);
export default router;
