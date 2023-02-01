import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Box } from "./App.styled";

import SharedLayout from "components/SharedLayout/SharedLayout";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

// const SharedLayout = lazy(() => import('../SharedLayout'));
// const Home = lazy(() => import('../../pages/Home'));
// const Movies = lazy(() => import('../../pages/Movies'));
// const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
// const Cast = lazy(() => import('../Reviews'));
// const Reviews = lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </Box>
  );
};
