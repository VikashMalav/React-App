import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Main() {
  return (
    <div>
<nav><ul>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to='/contact'>contact</NavLink></li>
<li><NavLink to='/services'>services</NavLink></li>
<li><NavLink to='/blog'>Blog</NavLink></li>




</ul>
</nav>
<Outlet/>

    </div>
  )
}

export default Main