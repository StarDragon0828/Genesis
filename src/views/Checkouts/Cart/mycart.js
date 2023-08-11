import { Image } from "react-bootstrap";
import View from "../../../components/UI/View";
import myImage from '../../../assets/images/cart/Rectangle 67.png'
import Button from "../../../components/UI/Button";
import CartHeader from "./header";
import ItemsPanel from "./items-panel";
import CartSlider from "./cart-slider";
import Recent from "./recent";
import RecommendSlider from "./cart-slider/recommend";
import './style.scss'
import { Link } from "react-router-dom";


export default function Mycart (props) {
    return (
        <View className="cart-page">
            <View className="cart">
                <View className="cart-panel" >
                    <View className="my-cart" >
                        <View className="my-cart-page" >
                            <Image src={myImage} className="img" />
                            <View className="mycart-title" >Your cart is empty!</View>
                            <View className="mycart-description" >Add items to it now.</View>
                            <Link to="/products" className="link-none">
                                <Button text="Shop Now" className="cart-button" />
                            </Link>
                        </View>
                    </View>
                    <View className="your-items" >
                        <CartHeader />
                        <ItemsPanel />
                    </View>
                </View>
                <View>
                    <Recent />
                </View>
            </View>
            <View className="checkout-slider">
                <CartSlider />
                <RecommendSlider />
            </View>
        </View>
    );
}