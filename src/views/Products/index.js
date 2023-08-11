import { Container } from "react-bootstrap";
import "./style.scss";
import SidebarFilter from "./sidebar-filter";
import ProductsDisplay from "./products-display";

export default function Products(props) {
  return <Container fluid className="products-page">
    <SidebarFilter />
    <ProductsDisplay />
  </Container>
}