import React from 'react'
import {Form, Input, message} from "antd"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import { useState } from 'react'
import Spinner from '../components/Spinner'

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const submitHandler =async (values) => {
        try {
            setLoading(true)
            await axios.post("/users/register", values)
            message.success("Registred Succeesfully")
            setLoading(false)
            navigate("/login")
        } catch (error) {
            setLoading(false)
            message.error("Error in registration")
        }     
    }
  return (
    <>
        <div className='register-page'>
            {loading && <Spinner></Spinner>}
            <Form layout='vartical' onFinish={submitHandler}>
            <h1>Register Form</h1>
                <Form.Item label="Name" name="name">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type='email'></Input>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type='password'></Input>
                </Form.Item>
                <div className='d-flex justify-content-between'>
                    <Link to="/login">Already Registered ? Click here to Login</Link>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </Form>
        </div> 
    </>
  )
}

export default Register
