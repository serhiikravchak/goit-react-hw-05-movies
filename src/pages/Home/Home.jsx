import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Main, Title, TrendingMoviesList, MovieInfo } from './Home.styled';
import * as API from '../../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trendingMovies = await API.getTrendingMovies();
        setTrendingMovies(trendingMovies.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      <TrendingMoviesList>
        {trendingMovies.map(({ id, title }) => (
          <MovieInfo key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MovieInfo>
        ))}
      </TrendingMoviesList>
    </Main>
  );
};

export default Home;
