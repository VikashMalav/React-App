import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleBlog() {
    let[single,setSingle]=useState('')
    let {id}=useParams()
    useEffect(()=>{

        async function blog(){
            let res=await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            console.log(res)
            setSingle(res.data)
        }
        blog()
    },[])
    
  return (
    <div>
        <h3>{single.title}</h3>
        <p>{single.body}</p>



    </div>
  )
}

export default SingleBlog