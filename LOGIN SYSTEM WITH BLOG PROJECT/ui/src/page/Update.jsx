import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
 const [data,setdata]=useState({tags:[],title:"",Author:"",content:""})

  const handleTagsChange = (e) => {
    const inputTags = e.target.value.split(',');
    setdata({ ...data, tags: inputTags.map((tag) => tag.trim()) });
  };
const {id}=useParams()
    const handlesubmit=(e)=>{
     e.preventDefault()
     axios.patch(`http://localhost:8080/blog/update/${id}`,data,{withCredentials:true})
     .then((res)=>console.log(res.data))
     .catch((err)=>console.log(err))
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setdata({ ...data, [name]: value });
    };
    useEffect(()=>{
      axios.get(`http://localhost:8080/blog/singlepage/${id}`,{withCredentials:true})
      .then((res)=>{
        setdata(res.data.blog)
        console.log(res.data.blog)
      })
      .catch((err)=>console.log(err))
    },[id])


    return (
      <div>
      <div className='col-6 m-auto mt-5'>
      <form  className="container mt-4 p-4 shadow-sm rounded" onSubmit={handlesubmit}>
        <div className="mb-3">      
          <input type="text" name="tags" value={data.tags.join(",")} placeholder="Tags (Add more with commas)" onChange={handleTagsChange} className="form-control" />
        </div>
        <div className="mb-3">
          <input type="text" name="title" value={data.title} placeholder="Title" onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3"> 
          <input type="text" name="author" value={data.Author} placeholder="Author" onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <input type="text" name="content" value={data.content} placeholder="Content" onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Update
