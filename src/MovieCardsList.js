import React from 'react';
import MovieCard from './MovieCard';

const MovieCardsList = props => {
  const { profiles, users, movies } = props;
  const usersByMovie = {};

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });

  console.log('usersByMovie:', usersByMovie);

  console.log('Object.keys(movies):', Object.keys(movies));
  const movieCards = Object.keys(movies).map(id => {
    console.log('------------------');
    console.log('id', id);
    console.log('users', users);
    console.log('usersByMovie[id]', usersByMovie[id]);
    console.log('movies[id]', movies[id]);
    
    return <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
});

  return <ul>{movieCards}</ul>;
}

export default MovieCardsList;
