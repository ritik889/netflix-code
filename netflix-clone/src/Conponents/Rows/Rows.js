import axios from "../../APIs/axios"
import { useEffect, useState } from "react"
import './Rows.css'

function Rows({ title, fetchUrl, id, isLargeRow }) {
    const [movies, setMovies] = useState([])

    const base_url = 'https://image.tmdb.org/t/p/original/'

    const elipsis = (movie_Name, n) => {
        return movie_Name.length > n ? movie_Name.substr(0, n-1) + ".." : movie_Name
    }

    useEffect(() => {
        async function getMovies(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data?.results);
            return request
        }
        getMovies()
    },[fetchUrl])

    return (
        <>
         <h2 className="row_title">{title}</h2>
        <div className='movies_container'>
           
            {
                movies.map( movie => (
                    <div key={movie.id} className='movie_card'>
                        <img
                         src={`${base_url}${movie?.poster_path}`}
                         className={`movie_img ${isLargeRow && "large_row"}`}
                         alt='mocie_poster'
                        />
                        <h5 className="movie_name">
                            {
                                elipsis( movie?.title || movie?.name || movie?.original_name, 15)
                            }
                        </h5>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Rows
