import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './Netflix.css'

function MovieRow(props) {

    let [movies, setMovies] = useState([])
    const image = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {

        async function ApiCall() {

            let trending = await axios.get(`https://api.themoviedb.org/3/${props.request}`)

            setMovies(trending.data.results)
            console.log(trending.data.results)
        }

        ApiCall()


    }, [])

    return (
        <>

            <h1 className='heading'>{props.heading}</h1>
            <div className='flex'>
                {movies.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <img src={`${image}${item.poster_path}`}></img>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
export default MovieRow