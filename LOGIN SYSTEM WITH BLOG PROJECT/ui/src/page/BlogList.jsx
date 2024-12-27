import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogList = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"))
  const [data, setdata] = useState([])

  const getdata = () => {
    axios.get(`http://localhost:8080/blog/get/${userdata._id}`, { withCredentials: true })
      .then((res) => setdata(res.data.blog))
      .catch((err) => console.log(err))
  }
  const handledelete = (_id) => {
    axios.delete(`http://localhost:8080/blog/delete/${_id}`, { withCredentials: true })
      .then((res) => {
       console.log(res.data)
        getdata()
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap  ">
          {data.map((el) => (
            <div key={el._id} className="card col-3 mt-4 ms-5  p-4 shadow-sm">
              <h4 className="text-primary mb-2">{el.Author}</h4>
              <p className="text-dark">{el.title}</p>
              <Link to={`/description/${el._id}`}>
              <button className="btn btn-primary col-12">Read Article</button>
              </Link>
              <div className="d-flex justify-content-between">
                <Link to={`/update/${el._id}`} >
                <button className="btn btn-dark mt-3" style={{ padding: "7px 28px " }}> Edit </button>
                </Link>
                <button className="btn btn-danger  mt-3" onClick={() => handledelete(el._id)}>Delete</button>
              </div>
            </div>
          ))}

        </div>
      </div>  </div>
  )
}

export default BlogList
