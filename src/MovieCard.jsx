import React from "react";
const MovieCard = ({movie, addFavourite}) => {
    return(
        <>
        <div className="card text-bg-warning m-3 p-0" style={{width: 16 +'rem'}}>
        <img src={movie.Poster} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
            <a className="btn btn-dark" onClick={()=>addFavourite(movie)}>Add to Watchlist</a>
        </div>
        </div>
        
        </>
    );
}

export default MovieCard;