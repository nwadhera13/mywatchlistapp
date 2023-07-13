import React from "react";
const FavouriteCard = ({movie}) => {
    return(
        <>
        <div className="card text-bg-warning m-1 p-0" style={{width: 10 +'rem'}}>
        <img src={movie.Poster} className="card-img-top" alt="..."/>
        <div className="card-body p-1">
            <h6 className="card-title">{movie.Title}</h6>
            <p className="card-text">{movie.Year}</p>
        </div>
        </div>
        
        </>
    );
}

export default FavouriteCard;