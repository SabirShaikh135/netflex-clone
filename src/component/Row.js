import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios"; 
const Row=({title,fetchUrl,isLargeRow=false})=>{

const [movie ,setMovie]=useState([]);
const base_url="https://image.tmdb.org/t/p/original";
useEffect(()=>{
    const fetchData= async()=>
    {
        const req= await axios.get(fetchUrl);
        setMovie(req.data.results);
        return req;
    }
   
   fetchData();  
},[fetchUrl])
 console.log(movie);
    return(
        <div className="row">
            <h2>
                {title}
            </h2> 
            <div className="row_posters">
            {
                movie.map((movies)=>
                ((isLargeRow && movies.poster_path) || 
                  (!isLargeRow && movies.backdrop_path)) &&
                  (
                   <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movies.id}
                    src={`${base_url}${isLargeRow ? movies.poster_path:movies.backdrop_path }`}
                     alt={movies.name}

                     />
                    )
                     
                     )}
            
        </div>
        </div>
    );
}

export default Row;