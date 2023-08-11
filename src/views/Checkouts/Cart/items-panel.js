import { useNavigate } from "react-router"
import View from "../../../components/UI/View"
import { Image, Stack } from "react-bootstrap"
import { Rating } from "react-simple-star-rating"
import Button from "../../../components/UI/Button"
import { items as _item } from "./data"
import { useState } from "react"
import './style.scss'



export const Items = (props) => {
  
    const { item } = props
    const navigate = useNavigate();
  
    const viewItem = () => {
      navigate("/product/1")
    }
  
    return <View className="item-component">
        <Stack direction="horizontal" className="justify-content-between align-items-center">
            <View className="best-seller bg-warning" >Best Seller</View>
        </Stack>

        <Image src={item.image} />
        <h6 className="description"> { item.description } </h6>
        <Stack direction="horizontal" className="rating">
            <View className="d-flex align-items-center">
                <Rating initialValue={4} size={13} /> <span>7089</span>
            </View>
            <Button className="bg-primary get-it-button" text="Get It" tooltipText="You can view details of this item." onClick={viewItem} />
        </Stack>
        <h5 className="price text-primary">$ { item.price.toFixed(2) } <span className="text-secondary">$ {(item.price * .1).toFixed(2)}</span><span className="text-secondary">(40% off)</span></h5>
        <h6 className="get-it">Get it by <span className="today">{ item.releaseDate.toString().substr(0, 10) }</span></h6>
    </View>
  }
    
export default function ItemsPanel(props) {

  const [items, setItems] = useState(_item)

  return <View className="products-panel">
    {
      items.map((item, idx) => <Items key={`items-${idx}`} item={item} />)
    }
  </View>
}