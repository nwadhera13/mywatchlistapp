import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import FavouriteCard from "./FavouriteCard";

const API_URL="http://www.omdbapi.com/?apikey=30493b30&s=";
const App = () => {
    document.body.style = 'background: black;';
    const [movies, setMovies] =useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchTerm, setSearchTerm]=useState('');
    //searching for movie here
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect( ()=> {
        searchMovie("superman");
    }, []);
    const addFavourite = (movie) => {
        const newFavourite=[...favourites, movie];
        setFavourites(newFavourite);
    }


    return(
        <>
        <h1 className="font-monospace text-center mt-6 m-2 text-warning">MyWatchlist</h1>

        <div className="d-flex justify-content-center">
        <div className="input-group mb-3 w-50">
            <input 
                className="form-control" 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button 
                className="btn btn-outline-secondary" 
                onClick={()=>searchMovie(searchTerm)}
            >Search</button>
        </div>

        </div>
        {
            favourites?.length>0 ? (<>
                <hr style={{color:"yellow"}}/>
                <h2 className="font-monospace text-center mt-6 m-2 text-warning">Watchlist</h2>
                <div className="container-fluid text-center fav">
                <div className="row">
                    {favourites.map((movie)=>(
                        <FavouriteCard movie={movie}/>
                    ))}
                </div>
                </div>
                <hr style={{color:"yellow"}}/>
                </>
            ) : (
                <h1></h1>
            )
        }



        {
            movies?.length>0 ? (
                <div className="container-fluid text-center myinput">
                <div className="row justify-content-center">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} addFavourite={addFavourite}/>
                    ))}
                </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                <h1 className="text-warning">not found</h1>
                </div>
            )
        }
        </>
    );
}
export default App;