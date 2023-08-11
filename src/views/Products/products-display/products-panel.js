import { useState } from "react";
import View from "../../../components/UI/View";
import { products as _products } from "./data";
import { Image, Stack } from "react-bootstrap";
import Button from "../../../components/UI/Button";
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from "react-router-dom";

export const Product = (props) => {

  const { product } = props
  const navigate = useNavigate()

  const viewProduct = () => {
    navigate("/product/1")
  }

  return <View className="product-component">
    <Stack direction="horizontal" className="align-items-center">
      <View className="best-seller bg-warning"> Best Seller </View>
    </Stack>

    <Image src={product.image} />
    <h6 className="description"> { product.description } </h6>
    <Stack direction="horizontal" className="rating">
      <View className="d-flex align-items-center">
        <Rating initialValue={4} size={13} /> <span>7089</span>
      </View>
      <Button className="bg-primary get-it-button" text="Get It" tooltipText="You can view details of this item."  onClick={viewProduct} />
    </Stack>
    <h5 className="price text-primary">$ { product.price.toFixed(2) } <span className="text-secondary">$ {(product.price * .4).toFixed(2)}</span><span className="text-secondary">(40% off)</span></h5>
    <h6 className="get-it">Get it by <span className="today">{ product.releaseDate.toString().substr(0, 10) }</span></h6>
  </View>
}

export default function ProductsPanel(props) {

  const [products, setProducts] = useState(_products)

  return <View className="products-panel">
    {
      products.map((product, idx) => <Product key={`product-${idx}`} product={product} />)
    }
  </View>
}