import React from 'react';
import requests from '../../APIs/Request';
import Banner from '../../Conponents/Banner/Banner';
import Nav from '../../Conponents/Nav/Nav';
import Rows from '../../Conponents/Rows/Rows';

function HomeScreen() {
  return (
    <div className="App">
       <Nav />

       <Banner />

       <Rows fetchUrl={requests.fetchNetflixOriginals} 
        title="Netflix Originals"
        isLargeRow
        id="NO"
       />
       <Rows fetchUrl={requests.fetchTrending} 
        title="Trending"
        id="TRE"
       />
       <Rows fetchUrl={requests.fetchTopRated} 
        title="Top Rated"
        id="TR"
       />
       <Rows fetchUrl={requests.fetchActionMovies} 
        title="Action Movies"
        id="AM"
       />
       <Rows fetchUrl={requests.fetchComedyMovies} 
        title="Comedy Movies"
        id="CM"
       />
       <Rows fetchUrl={requests.fetchHorrorMovies} 
        title="Horror Movies"
        id="HM"
       />
       <Rows fetchUrl={requests.fetchRomanceMovies} 
        title="Romantic Movies"
        id="RM"
       />
       <Rows fetchUrl={requests.fetchDocumentaries} 
        title="Documantries"
        id="DT"
       />
       

    </div>
  );
}

export default HomeScreen;
