import React from "react";
import { Form, Input,message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Password from "antd/es/input/Password";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const submitHandler = async (values) => {
    try {
      setLoading(true)
      const {data} = await axios.post("/users/login", values)
      setLoading(false)
      message.success("login success")
      localStorage.setItem("user", JSON.stringify({...data, password:""}))
      navigate("/")
    } catch (error) {
      setLoading(false)
      message.error("error in login")
    }
  };
  return (
    <>
      <div className="register-page">
        {loading && <Spinner></Spinner>}
        <Form layout="vartical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email"></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password"></Input>
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a User ? Click here to Register</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
