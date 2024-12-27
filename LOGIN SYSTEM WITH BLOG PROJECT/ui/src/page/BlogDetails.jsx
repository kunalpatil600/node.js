import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const {id}=useParams()
  const [data,setdata]=useState([])
 
  
useEffect(()=>{
  axios.get(`http://localhost:8080/blog/singlepage/${id}`,{withCredentials:true})
  .then((res)=>{setdata(res.data.blog)
    console.log(res.data.blog)
  })
},[])
  return (
    <div>
       <div className="container p-4 my-4 rounded shadow bg-white" style={{ borderLeft: "5px solid #007bff" }} >
   
    <h5 className="text-primary mb-3">Author: {data.Author}</h5>
    <h5 className="text-dark fw-bold mb-4">Title: {data.title}</h5>
    <h5 className="text-dark fw-bold mb-4">Content: {data.content}</h5>
    {/* Tags */}
    <div className="mb-4">
     {data.tags && data.tags.map((tag, index) => (
        <span key={index} className='badge bg-secondary text-light fs-6 me-2'>{tag}</span>
     )) }
    </div>
  
    {/* Published Date */}
    
  </div>
    </div>
  )
}

export default BlogDetails
