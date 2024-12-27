import axios from 'axios'
import React, { useState } from 'react'


const Adminget = () => {
  const [data, setdata] = useState([])
  axios.get("http://localhost:8080/blog/admin", { withCredentials: true })
    .then((res) => setdata(res.data.totalBlog))
    .catch((err) => console.log(err))
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap  ">
          {data.map((el) => (
            <div key={el._id} className="card col-3 mt-4 ms-5  p-4 shadow-sm">
              <h4 className="text-primary mb-2">{el.Author}</h4>
              <p className="text-dark">{el.title}</p>
              <h5>{el.content}</h5>
              <div className="mb-4">
                {el.tags && el.tags.map((tag, index) => (
                  <span key={index} className='badge bg-secondary mt-3 text-light fs-6 me-2'>{tag}</span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Adminget
