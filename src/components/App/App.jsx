import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Box } from "./App.styled";

const SharedLayout = lazy(() => import('../SharedLayout'))
const Home = lazy(() => import('../Home'))
const Movies = lazy(() => import('../Movies'))
const MovieDetails = lazy(() => import('../MovieDetails'))
const Cast = lazy(() => import('../Cast'))
const Reviews = lazy(() => import('../Reviews'))

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
