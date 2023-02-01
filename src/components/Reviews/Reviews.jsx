import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ReviewsSection,
  ReviewsList,
  Review,
  Author,
  Content,
  ReviewNotFound,
} from './Reviews.styled';
import * as API from '../../services/api';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await API.getMovieReviews(id);
        setMovieReviews(movieReviews.results);
      } catch (error) {
        toast.error(`Oops something went wrong, try again.`);
      }
    };
    fetchMovieReviews();
  }, [id]);

  return (
    movieReviews && (
      <ReviewsSection>
        {movieReviews.length > 0 ? (
          <ReviewsList>
            {movieReviews.map(({ id, author, content }) => (
              <Review key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Review>
            ))}
          </ReviewsList>
        ) : (
          <ReviewNotFound>
            We don`t have any reviews for this movie
          </ReviewNotFound>
        )}
      </ReviewsSection>
    )
  );
};

export default Reviews;
