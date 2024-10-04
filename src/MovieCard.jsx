import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
        <div className="movie"> 
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://placehold.co/400"
                }
                alt={movie.Title}
              />
            </div>
            <div>
              <span>{movie.Type}</span>
              <h1>{movie.Title}</h1>
            </div>
          </div>
        </div>
  )
}

export default MovieCard