import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {  
  const [data,setdata]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:8080/blog/blog/${id}`)
    .then((res)=>{setdata(res.data.blog)
      console.log(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
 
  return (
    <div
    className="container p-4 my-4 rounded shadow bg-white"
    style={{ borderLeft: "5px solid #007bff" }}
  >
   
    <h5 className="text-primary mb-3">{data.author}</h5>
    <h5 className="text-dark fw-bold mb-4">{data.title}</h5>
  
    {/* Tags */}
    <h5>{data.content}</h5>
    <div className="mb-4">
     {data.tags && data.tags.map((tag, index) => (
        <span key={index} className='badge bg-secondary text-light fs-6 me-2'>{tag}</span>
     )) }
    </div>
  
    {/* Published Date */}
    <div className="text-muted">
      <strong>Published on:</strong> {new Date(data.publishedDate).toLocaleDateString()}
    </div>
  </div>
  
  )
}

export default BlogDetails
