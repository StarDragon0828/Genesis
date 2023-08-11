import { Stack } from "react-bootstrap"
import "./style.scss"
import View from "../../../components/UI/View"
import { Link } from "react-router-dom"
import Product from "./product"

export default function ProductSlider(props) {
  return <Stack className={`product-slider card ${props.className}`}>
    <View className="d-flex align-items-center">
      <h3 className="slider-title mb-0"> { props.title } </h3>
      <Link to="/" className="text-primary all-details">See all details</Link>
    </View>
    <Stack direction="horizontal" className="products h-scrollbar">
      {
        props.products.map((product, idx) => <Product key={`${props.title}-${idx}`} product={product} discount={props.discount} />)
      }
    </Stack>
  </Stack>
}