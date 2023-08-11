import { Image } from "react-bootstrap";
import "./style.scss";
import MobileView from "../../../../assets/images/auth/auth-image.png"
import View from "../../../UI/View";

const Introduce = (props) => {
  return <View className="introduce">
    <View className="text-container">
      <h3 className="new-here">Looks like you're new here!</h3>
      <h5 className="signup-with">Sign up with your email to get started</h5>
    </View>
    <View className="image">
      <Image src={MobileView} />
    </View>
  </View>
}

export default Introduce