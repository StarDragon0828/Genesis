import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./style.scss";
import Input from "../../../components/UI/Input/Input";
import Agree from "../../../components/layout/auth/agree";
import Button from "../../../components/UI/Button";
import AuthLayout from "../../../components/layout/auth/layout";
import View from "../../../components/UI/View";
import { useSnackbar  } from "notistack";
import MyNotification from "../notification";
import Axios from "axios";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState();
  const userName = localStorage.getItem("auth-name");
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (name.trim() === "") {
      errors.name = "Please enter your name";
    }
    if (email.trim() === "") {
      errors.email = "Please enter your email";
    }
    if (password.trim() === "") {
      errors.password = "Please enter a password";
    }
    if (confirmPassword.trim() === "") {
      errors.confirmPassword = "Please confirm your password";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    } else {
      setValidationErrors({});
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }

    try {
      const newUser = { name, email, password, passwordCheck:confirmPassword };
      await Axios.post("http://localhost:5000/users/register", newUser);
      enqueueSnackbar({'variant':'success','message':'Sign up Success!'});
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (validationErrors.name) {
      setValidationErrors({ ...validationErrors, name: "" });
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validationErrors.email) {
      setValidationErrors({ ...validationErrors, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (validationErrors.password) {
      setValidationErrors({ ...validationErrors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (validationErrors.confirmPassword) {
      setValidationErrors({ ...validationErrors, confirmPassword: "" });
    }
  };

  return (
    <AuthLayout>
      <View className="signup-page">
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleNameChange}
          />
          {validationErrors.name && (
            <p className="error">{validationErrors.name}</p>
          )}

          <Input
            type="email"
            placeholder="Enter Email Id"
            value={email}
            onChange={handleEmailChange}
          />
          {validationErrors.email && (
            <p className="error">{validationErrors.email}</p>
          )}

          <Input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {validationErrors.password && (
            <p className="error">{validationErrors.password}</p>
          )}

          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {validationErrors.confirmPassword && (
            <p className="error">{validationErrors.confirmPassword}</p>
          )}

          <Agree />
          <Button
            text="Sign Up"
            className="w-100"
            onClick={onSubmit}
            type="submit"
          />
        </Form>
        <Link to="/login" className="existing-user">
          Existing User? Login
        </Link>
        {showNotification && <MyNotification success={true} />}
      </View>
    </AuthLayout>
  );
};

export default Signup;