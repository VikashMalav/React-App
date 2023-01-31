import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
    let[blogs,setBlogs]=useState([])

    useEffect(()=>{
async function apicall(){
    let res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(res.data )   
    setBlogs(res.data)
}

apicall()
    },[])
  return (
    <div>
<h3>blogs</h3>
{ blogs.map((blog)=>{
    return(
<div>
    <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
    <p>{blog.body}</p>
    
</div>

    )
})



}



    </div>
  )
}

export default Blog