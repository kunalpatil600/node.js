import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Signup = () => {
    const [email,setemail]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const handleSubmit=(e)=>{   
      e.preventDefault()
      const userdata={email,username,password}
      axios.post("http://localhost:8080/user/singup",userdata)
      .then((res)=>console.log(res.data))
      .catch((err)=>console.log(err))
    }
  return (
    <section style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="card text-black" style={{ borderRadius: "20px" }}>
              <div className="card-body p-4">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <h2 className="text-center fw-bold mb-3">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>

                      <div className="text-center mt-3">
                        <p>
                          Already have an account?{" "}
                          <Link to="/signin">Login</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
