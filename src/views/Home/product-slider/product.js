import { Badge, Image, Stack } from "react-bootstrap"
import View from "../../../components/UI/View"

export default function Product(props) {

  const { product } = props

  return <View className="product">
    <Image src={product.image} />
    <h5 className="name"> { product.name } </h5>
    {
      props.discount && <Stack direction="horizontal" className="discount">
        <Badge>Up to 76% off</Badge>
        <View>Delay Of Day</View>
      </Stack>
    }
    <View className="price text-primary">
      { product.price ? `From $${product.price.toFixed(2)}` : "Shop Now!" }
    </View>
  </View>
}