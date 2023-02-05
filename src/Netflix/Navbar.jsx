import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
        <img src='netflix.png'></img>
        <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">My List</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact Us</li>
        </ul>
        <img src='profile.png'></img>
    </div>
  )
}

export default Navbar