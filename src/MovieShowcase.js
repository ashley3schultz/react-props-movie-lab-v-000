import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    <Moviecard />
  }

  render() {
    return (
      <div id="movie-showcase">
      <MovieCard />
        {this.generateMovieCards()}
      </div>
    )
  }
}
