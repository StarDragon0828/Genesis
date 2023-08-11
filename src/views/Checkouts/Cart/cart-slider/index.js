import { useNavigate } from "react-router";
import View from "../../../../components/UI/View";
import { Image, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "react-simple-star-rating";
import Button from "../../../../components/UI/Button";
import { boughtItems as _boughtItems } from "./data";
import { useState } from "react";
import './style.scss'


export const CartProduct = (props) => {
  
    const { boughtItem } = props
    const navigate = useNavigate();
  
    const viewItem = () => {
      navigate("/product/1")
    }
  
    return <View className="checkout-slider-component">
        <Stack direction="horizontal" className="justify-content-between align-items-center">
            <View className="best-seller bg-warning" >Best Seller</View>
             
        </Stack>

        <Image src={boughtItem.image} />
        <h6 className="description"> { boughtItem.description } </h6>
        <Stack direction="horizontal" className="rating">
            <View className="d-flex align-items-center">
                <Rating initialValue={4} size={13} /> <span>7089</span>
            </View>
            <Button className="bg-primary get-it-button" text="Get It" tooltipText="You can view details of this item."  onClick={viewItem} />
        </Stack>
        <h5 className="price text-primary">$ { boughtItem.price.toFixed(2) } <span className="text-secondary">$ {(boughtItem.price * .1).toFixed(2)}</span><span className="text-secondary">(40% off)</span></h5>
        <h6 className="get-it">Get it by <span className="today">{ boughtItem.releaseDate.toString().substr(0, 10) }</span></h6>
    </View>
  }

  export default function CartSlider(props) {
  
    const [items, setItems] = useState(_boughtItems)
  
    return (
      <Stack>
        <View className="checkout-slider-title">
          <h5 className="title" >Customers who bought items in your cart also bought</h5>
          <h5 className="paginator text-secondary" >Page 1 of 3</h5>
        </View>
        <View className="slider-panel bought-items h-scrollbar">
          {
            items.map((item, idx) => <CartProduct key={`items-${idx}`} boughtItem={item} />)
          }
        </View>
      </Stack>
    );
  }