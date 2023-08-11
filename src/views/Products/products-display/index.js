import { Stack } from "react-bootstrap";
import "./style.scss";
import Header from "./header";
import ProductsPanel from "./products-panel";

export default function ProductsDisplay(props) {

  return <Stack className="products-display card">
    <Header />
    <ProductsPanel />
  </Stack>
}