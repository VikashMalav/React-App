import React, { useEffect, useState } from 'react'
import requests from './NetflixList'
import axios from 'axios'
import BasePath from './BasePath'
// import Netflix from './netflix.css'

function Banner() {
    let [bigBanner,setBigBanner]=useState([])



// setBigBanner( Math.floor(Math.random()*.data.results.length))
console.log(bigBanner)

useEffect(()=>{

  async function fetchApi(){

    const apiCall=await axios.get(`${BasePath}${requests.fetchNetflixOriginals}`)

    setBigBanner(apiCall.data.results)
    console.log(apiCall)}

fetchApi()

},[])
  return (
    <div className='banner'>{bigBanner}</div>
  )
}

export default Banner
