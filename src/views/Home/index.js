import { Carousel, Container } from "react-bootstrap";
import NavImage1 from "../../assets/images/home/nav-image1.png"
import "./style.scss";
import { bestOfElectronics, categories, productsOfToday, reCommendedCategories } from "./data/data";
import ProductCategory from "./product-category";
import ProductSlider from "./product-slider";

export default function Home(props) {
  return <Container className="home-page">
    <Carousel controls={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NavImage1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NavImage1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NavImage1}
        />
      </Carousel.Item>
    </Carousel>

    <ProductCategory categories={categories} />

    <ProductSlider title="Today's Details" products={productsOfToday} discount />
    <ProductSlider className="mt-22" title="Best of Electronics" products={bestOfElectronics} price />

    <ProductCategory categories={reCommendedCategories} />

  </Container>
}