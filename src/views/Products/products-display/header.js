import { useState } from "react"
import { Stack } from "react-bootstrap"
import View from "../../../components/UI/View"

export default function Header(props) {

  const categories = ["Popularity", "The Best Seller", "Newest First", "Price - Low To High", "Price - High To Low", ]
  const [category, setCategory] = useState("Popularity")

  return <Stack className="products-header">
    <h5 className="page-link-text text-secondary">Home <span>&gt;</span> Product Categories</h5>
    <h3 className="categories-text">Product Categories <span className="showing-products text-secondary">(Showing 1- 40 products of 98,900 products)</span></h3>
    <Stack direction="horizontal" className="categories">
      <View className="sort-by">Sort By</View>
      {
        categories.map((_category, idx) => <View onClick={() => setCategory(_category)} key={`category-${idx}`} className={`category ${category===_category?"active text-primary":""}`}> { _category } </View>)
      }
    </Stack>
  </Stack>
}