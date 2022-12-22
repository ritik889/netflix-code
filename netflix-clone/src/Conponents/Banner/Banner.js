import axios from '../../APIs/axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../APIs/Request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function getMovie(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length - 1)
            ])

            return request;
        }
        getMovie();
    },[])

    const elipsis = (des, n) => {
        return des?.length > n ? des.substr(0, n-1) + '...' : des
    }
    return (
        <header
        className='banner'
        style={{
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        }}>
            <div className='header_contents'>
                <h1 className='movie__Iname'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='header_buttons'>
                    <button className='header_button'>Play Movie</button>
                    <button className='header_button'>My watch List</button>
                </div>
                <div className='movie_des'> 
                    {elipsis(movie?.overview, 200)}
                </div>
            </div>
            {/* <div className='fade_effect' /> */}
        </header>
    )
}

export default Banner
