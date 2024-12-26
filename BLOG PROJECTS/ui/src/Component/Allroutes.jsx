import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import BlogList from './BlogList'
import BlogFrom from './BlogFrom'
import BlogDetails from './BlogDetails'
import Update from './Update'

const Allroutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<BlogList/>} />
        <Route path='/create' element={<BlogFrom/>} />
        <Route path='/description/:id' element={<BlogDetails/>} />
        <Route path='/update/:id' element={<Update/>} />
       </Routes>
    </div>
  )
}

export default Allroutes
