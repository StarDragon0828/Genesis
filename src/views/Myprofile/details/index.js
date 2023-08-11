import View from "../../../components/UI/View";
import Profiledetail from "./profile";
import { historyItems, recommendItems } from "./data";
import './style.scss'
import ProfileSlider from "./profile-slider";

export default function Profile(props) {
    return(
        <View className="myprofile-page">
            <View className="myprofile-details">
                <View>
                    <h5 className="myprofile-title" >My Profile</h5>
                </View>
                <Profiledetail />
            </View>
            <View className="profile-slider-panel" >
                <ProfileSlider title="Customers who viewed items in your browsing history also viewed" pagenumber="Page 1 of 3" products={historyItems} />
                <ProfileSlider title="Recommended based on your shopping trends" pagenumber="Page 1 of 3" products={recommendItems} />
            </View>
        </View>
    );
}