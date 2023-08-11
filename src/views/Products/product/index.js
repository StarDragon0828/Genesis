import { Container, Stack } from "react-bootstrap";
import "./style.scss";
import ProductPreview from "./preview";
import ProductDetail from "./detail";
import ProductSlider from "../../Home/product-slider"
import { bestOfElectronics } from "../../Home/data/data"
import SimilarProducts from "./similarproducts"

export default function Product(props) {
  return <Container fluid className="product-page">
    <Stack direction="horizontal" className="top-section">
      <ProductPreview />
      <ProductDetail />
    </Stack>
    <ProductSlider className="mt-44 box-shadow" title="You might be interested in this" products={bestOfElectronics} price />
    <SimilarProducts />
  </Container>
};