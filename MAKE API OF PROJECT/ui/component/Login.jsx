import React, { useContext, useState } from 'react';
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { usercontext } from './UserContext';

const Login = () => {
    const [data, setdata] = useState({ email: "", password: "" });
    const { loginuser } = useContext(usercontext); // Correct context function
    const [message, setmessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/user/signin",
                data,
                { withCredentials: true } // Include cookies
            );

            // Assuming userdata is included in the response
            const { userdata } = response.data || {};
            if (userdata) {
                loginuser(userdata); // Update user context
                setmessage("Logged in successfully!");
            } else {
                setmessage("User data missing in response!");
            }
        } catch (error) {
            setmessage(error.response?.data?.message || "An error occurred during login.");
        }
    };

    return (
        <div>
            <Container>
                <h1 className="my-4">Login</h1>
                {message && <Alert variant="danger">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Enter email"
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
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;
