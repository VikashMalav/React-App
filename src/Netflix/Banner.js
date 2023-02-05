import React, { useEffect, useState } from 'react'
import requests from './NetflixList'
import axios from 'axios'
// import BasePath from './BasePath'
// import Netflix from './netflix.css'

function Banner() {
  let [bigBanner, setBigBanner] = useState([])
  const image = 'https://image.tmdb.org/t/p/original'


  // 

  useEffect(() => {

    async function fetchApi() {


      const apiCall = await axios.get(`https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`)
      setBigBanner(apiCall.data.results[Math.floor(Math.random() * apiCall.data.results.length)])
      console.log(bigBanner)
      // setBigBanner(bigBanner[Math.floor(Math.random()*apiCall.data.results.length-1)])
      // console.log(bigBanner)}
      // console.log(Math.random())
    }
    fetchApi()

  }, [])
  return (<div className='banner' style={{backgroundImage:`url(${image}${bigBanner.backdrop_path
  })`}}>
                <button>Playlist</button> 
                <p className='overview'>{bigBanner.overview}</p>
  </div>
    // <div className='banner'>{bigBanner}</div>
  )
}

export default Banner
