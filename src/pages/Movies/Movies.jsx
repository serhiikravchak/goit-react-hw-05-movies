import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Main, MovieList, MovieItem } from './Movies.styled';
import * as API from '../../services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) return;

    const fetchSearchMovie = async () => {
      try {
        const movie = await API.searchMovie(movieName);

        if (movie.total_result === 0) {
          toast.warn('Your search did not return any results.');
          return;
        }
        setMovies(movie.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    };

    fetchSearchMovie();
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
   

    if (evt.target.query.value.trim() === '') {
      toast.warn('Search field mustn`t be empty');
      return;
    }
    setSearchParams({ query: evt.target.query.value });
    evt.target.query.value = ''
  };

  return (
    <Main>
      <SearchBox onSubmit={handleSubmit} />
      {movies && (
        <MovieList>
          {movies.map(({ id, title }) => (
            <MovieItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </Main>
  );
};


export default Movies