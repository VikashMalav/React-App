import React from 'react'
import requests from './NetflixList'
import MovieRow from './MovieRow'
import Banner from './Banner'
import './Netflix.css'
import Navbar from './Navbar'

function NetFlix() {

    return ( 
  <>
  <Navbar/>
  {/* <h1 className='logo'>NetFlix</h1> */}

  <div><Banner/></div>
  
  <div><MovieRow heading='Trending' request={requests.fetchTrending} /></div>
  <div><MovieRow heading='NetflixOriginals' request={requests.fetchNetflixOriginals} /></div>
  <div><MovieRow heading='TopRated' request={requests.fetchTopRated} /></div>
  <div><MovieRow heading='ActionMovies' request={requests.fetchActionMovies} /></div>
  <div><MovieRow heading='HorrorMovies' request={requests.fetchHorrorMovies} /></div>
  <div><MovieRow heading='ComedyMovies' request={requests.fetchComedyMovies} /></div>
  <div><MovieRow heading='RomanceMovies' request={requests.fetchRomanceMovies} /></div>
  <div><MovieRow heading='Documentaries' request={requests.fetchDocumentaries} /></div>
  
  


   </>
    )
}

export default NetFlix