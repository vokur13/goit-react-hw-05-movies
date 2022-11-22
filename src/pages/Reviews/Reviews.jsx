import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { List, Item, Title } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews(movieId) {
      try {
        const { results } = await API.getMovieReview(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(item => (
            <Item key={item.author}>
              <Title>Author: {item.author}</Title>
              <p>{item.content}</p>
            </Item>
          ))}
        </List>
      ) : (
        'We do not have any reviews for this movie.'
      )}
    </>
  );
};
