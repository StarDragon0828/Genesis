import { Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import View from "../../UI/View";

import "./style.scss";
import Button from "../../UI/Button";

const LaptopsCategory = (props) => {
  return <Stack className="justify-content-between laptops-category">
    <Stack className="signin-container">
      <h3 className="category-title"> Sign  in for best experience </h3>
      <Button text="Sign in securely" tooltipText="You can sign in securely" />
    </Stack>
    <Image src={require("../../../assets/images/home/products/laptops/image 24.png")} />
  </Stack>
}

export default function CategoryCard(props) {
  
  return props.goods.length ? <Stack className="category-card card">
    <h3 className="category-title"> { props.category } </h3>
    <View className="goods">
      {
        props.goods.map((good, idx) => (
          <View className={`good good-${props.goods.length}`} key={`good-${idx}`}>
            <Image src={good.image} />
            <h6 className="name"> { good.name } </h6>
          </View>))
      }
    </View>
    <Link to="/products" className="see-more text-primary">See more</Link>
  </Stack> : <LaptopsCategory />
}