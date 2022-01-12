 
 const api_key="a8fee735cbe0726bab82e4bbd5c5ed97";
 const Requests=
 {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflexOriginals:  `/discover/tv?api_key=${api_key}&with_networks=223`,
    fetchTopRated:  `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:   `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:   `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:   `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:   `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:   `/discover/movie?api_key=${api_key}&with_genres=99`,
 
 }
//  https://api.themoviedb.org/3/trending/all/week?api_key=a8fee735cbe0726bab82e4bbd5c5ed97&language=en-US
//  https://api.themoviedb.org/3/discover/tv?api_key=a8fee735cbe0726bab82e4bbd5c5ed97&with_networks=223  

export default Requests;