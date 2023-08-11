import { Image, Stack } from "react-bootstrap"
import View from "../../../components/UI/View"
import { Rating } from "react-simple-star-rating"
import Button from "../../../components/UI/Button"
import { useNavigate } from "react-router-dom"
import './style.scss'

export const ProfileProduct = (props) => {

    const { product } = props
    const navigate = useNavigate();
  
    const viewItem = () => {
      navigate("/product/1")
    }


return (
    <View className="profile-slider-component" onClick={viewItem}>
      <Stack direction="horizontal" className="justify-content-between align-items-center">
          <View className="best-seller bg-warning" >Best Seller</View>
           
      </Stack>

      <Image src={product.image} />
      <h6 className="description"> { product.description } </h6>
      <Stack direction="horizontal" className="rating">
          <View className="d-flex align-items-center">
              <Rating initialValue={4} size={13} /> <span>7089</span>
          </View>
            <Button className="bg-primary get-it-button" tooltipText="You can view details of this item." text="Get It" />
      </Stack>
      <h5 className="price text-primary">$ { product.price.toFixed(2) } <span className="text-secondary">$ {(product.price * .1).toFixed(2)}</span><span className="text-secondary">(40% off)</span></h5>
      <h6 className="get-it">Get it by <span className="today">{ product.releaseDate.toString().substr(0, 10) }</span></h6>
    </View>

  ); 
}

export default function ProfileSlider(props) {
  return <Stack className={`product-slider ${props.className}`}>
    <View className="d-flex align-items-center justify-content-between">
      <h3 className="slider-title mb-0"> { props.title } </h3>
      <h5 className="slider-pagenumber text-secondary">{props.pagenumber}</h5>
    </View>
    <Stack direction="horizontal" className="products h-scrollbar">
      {
        props.products.map((product, idx) => <ProfileProduct key={`${props.title}-${idx}`} product={product} discount={props.discount} />)
      }
    </Stack>
  </Stack>
}