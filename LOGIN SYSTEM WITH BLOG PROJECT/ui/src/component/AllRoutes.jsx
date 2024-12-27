import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogList from '../page/BlogList'
import BlogForm from '../page/BlogForm'
import Signin from '../Auth/Signin'
import Home from '../page/Home'
import Signup from '../Auth/Signup'
import BlogDetails from '../page/BlogDetails'
import Update from '../page/Update'
import Privetpage from './Privetpage'
import Admindet from '../page/Adminget'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={
          <Privetpage>
          <BlogList/>
          </Privetpage>
          } />
        <Route path='/create' element={
          <Privetpage>
        <BlogForm/>
        </Privetpage>
          } />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/description/:id' element={<BlogDetails/>} />
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/admin' element={<Admindet/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
