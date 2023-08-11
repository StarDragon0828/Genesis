import { Stack } from "react-bootstrap";
import CategoryCard from "../../../components/common/CategoryCard";

import "./style.scss"

export default function ProductCategory(props) {

  const { categories } = props

  return <Stack className="product-categories" direction="horizontal">
    {
      categories.map(category => <CategoryCard category={category.category} goods={category.goods} />)
    }
  </Stack>
}