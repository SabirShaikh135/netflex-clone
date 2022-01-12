import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Requests from "../Requests";
import Row from "./Row";
import "./HomeScreen.css";
const HomeScreen=()=>{
    return(
        <div className="HomeScreen">
        {/* <h1>HomeScreen</h1> */}
        {/* nav bar */}
        <Nav/>

        <Banner/>
        {/* banner */}
        {/* row */}
            <Row
                title="Netflex Originals"
                fetchUrl={Requests.fetchNetflexOriginals}
                isLargeRow
            />
            <Row
                title="Trending Now"
                fetchUrl={Requests.fetchTrending}
            />
            <Row
                title="Top Rated"
                fetchUrl={Requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={Requests.fetchActionMovies}
            />

            <Row
                title="Comedy Movies"
                fetchUrl={Requests.fetchComedyMovies}
            />

            <Row
                title="Horror Movies"
                fetchUrl={Requests.fetchHorrorMovies}
            />

            <Row
                title="Romance Movies"
                fetchUrl={Requests.fetchRomanceMovies}
            />


            <Row
                title="Documentaries"
                fetchUrl={Requests.fetchDocumentaries}
            />
           

        </div>
    );
}

export default HomeScreen;