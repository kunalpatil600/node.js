import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-around bg-dark text-light p-3'>
      <Link to={"/"} className='fs-5 text-white ' style={{textDecoration:"none"}}>Home </Link>
      <Link to={"/blogs"} className='fs-5 text-white ' style={{textDecoration:"none"}}>Blogs</Link>
     <Link to={"/create"} className='fs-5 text-white ' style={{textDecoration:"none"}}>Create-blog</Link>
    </div>
  )
}

export default Navbar
