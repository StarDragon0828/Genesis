import "./style.scss";
import Input from "../../../components/UI/Input/Input";
import Agree from "../../../components/layout/auth/agree";
import Button from "../../../components/UI/Button";
import AuthLayout from "../../../components/layout/auth/layout";
import View from "../../../components/UI/View";

const SetNewPassword = (props) => {
  return <AuthLayout agree={false}>
    <View className="set-new-password-page">
      <View>
        <Input type="password" placeholder="New Password"/>
        <Input type="password" placeholder="Confirm New Password"/>
        <Agree />
        <Button text="Reset Password" className="w-100 reset-button"/>
      </View>
    </View>
  </AuthLayout>
}

export default SetNewPassword;