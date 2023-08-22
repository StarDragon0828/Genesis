import "./style.scss";
import Input from "../../../components/UI/Input/Input";
import Agree from "../../../components/layout/auth/agree";
import Button from "../../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/layout/auth/layout";
import View from "../../../components/UI/View";
import React, { useState } from 'react';
import Axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("auth-name", loginRes.data.user.name);
      navigate('/myprofile');
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <AuthLayout>
      <View className="login-page">
        <View>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email Id" />
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
          {error && <div className="error-message">{error}</div>}
          <View className="d-flex justify-content-end forgot-password">
            <Link to="/reset-password" className="text-primary">Forgot Password?</Link>
          </View>
          <Agree />
          <Button onClick={login} text="Login" className="w-100" />
        </View>
        <View className="create-account-link">
          <Link to="/signup" className="text-primary">New to Gnsiss? Create an account</Link>
        </View>
      </View>
    </AuthLayout>
  );
}

export default Login;