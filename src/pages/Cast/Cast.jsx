import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
import { Box } from 'components/Box';
import { List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchCredits(movieId) {
      try {
        const { cast } = await API.getMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCredits(movieId);
  }, [movieId]);

  const basePosterPath = 'http://image.tmdb.org/t/p/original';

  return (
    <>
      {credits && (
        <List>
          {credits.map(({ credit_id, name, character, profile_path }) => (
            <Item key={credit_id}>
              <Box width="10%">
                <img src={`${basePosterPath}${profile_path}`} alt={name}></img>
              </Box>
              <p>{name}</p>
              <p>Character: {character}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
