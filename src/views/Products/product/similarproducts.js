import { Stack } from "react-bootstrap"
import "./style.scss"
import { products } from "../products-display/data"
import { Product } from "../products-display/products-panel"

export default function SimilarProducts(props) {
  return <Stack className={`similar-products ${props.className}`}>
    <h3 className="title"> Similar Products </h3>
    <Stack direction="horizontal" className="products h-scrollbar">
      {
        products.map(product => <Product product={product} />)
      }
    </Stack>
  </Stack>
}