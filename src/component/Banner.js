import axios from "../axios";
import React, { useEffect, useState } from "react";
import Requests from "../Requests";
import "./Banner.css";
const Banner=()=>{
    const [movie ,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(Requests.fetchNetflexOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );
            return request;
        }
        fetchData();
    },[]);
    
    console.log(movie);
    const truncate=(strings ,n)=>{
     return strings?.length > n ? strings.substr(0,n-1)+"...": strings;
    }
    return(
        <header className="banner"
        style={{backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
                

        }}
        >
        <div className="banner_content">
            <h1 className="banner_title">
                {movie?.name || movie?.title ||  movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My list</button>
            </div>
            <h1 className="banner_discription">
           {truncate(movie?.overview,160)  }
           </h1>
        </div>
        {/* <div className="banner_FadeBottom"></div> */}
        </header>
    );
}

export default Banner;