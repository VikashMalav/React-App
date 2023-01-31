import React from 'react'
import { useNavigate } from 'react-router-dom'


function Notfound() {

  let Navigate=useNavigate()
  setTimeout(()=>{
          Navigate('/')
  },3000)
  return (
    <div>Error404 Page Not found</div>
  )
}

export default Notfound