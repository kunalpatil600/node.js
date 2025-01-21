import React, { useState } from 'react'
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
const Signup = () => {
    const [data,setdata]=useState({
        username: "",
        email: "",
        dob: "",
        location: "",
        password: "",
        confirmPassword: "",
    })
    const [message,setmessage]=useState("")
    const handleChange=(e)=>{
        const {name,value}=e.target
     setdata({...data,[name]:value})
    }
   
    const handleSubmit=async(e)=>{
        e.preventDefault()
     try {
        const response =await axios.post("http://localhost:8080/user/signup",data)
        setmessage(response.data.message)
        console.log(response.data.message)
     } catch (error) {
        setmessage(error.response.data.message)
        console.log(error.response.data.message)
     }
    }
  return (
    <div>
      <Container>
      <h1 className="my-4">Sign Up</h1>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" name="dob" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  
    </div>
  )
}

export default Signup
