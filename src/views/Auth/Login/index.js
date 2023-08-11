import "./style.scss";
import Input from "../../../components/UI/Input/Input";
import Agree from "../../../components/layout/auth/agree";
import Button from "../../../components/UI/Button";
import { Link } from "react-router-dom";
import AuthLayout from "../../../components/layout/auth/layout";
import View from "../../../components/UI/View";

const Login = (props) => {
  return <AuthLayout>
    <View className="login-page">
      <View>
        <Input type="email" placeholder="Enter Email Id"/>
        <Input type="password" placeholder="Enter Password"/>
        <View className="d-flex justify-content-end forgot-password">
          <Link to="/reset-password" className="text-primary">Forgot Password?</Link>
        </View>
        <Agree />
        <Link to="/myprofile">
          <Button text="Login" className="w-100"/>
        </Link>
      </View>
      <View className="create-account-link">
        <Link to="/signup" className="text-primary">New to Genesis? Create an account</Link>
      </View>
    </View>
  </AuthLayout>
}

export default Login;