import { Container } from "react-bootstrap"
import Header from "../components/layout/header"
import View from "../components/UI/View"

const AdminLayout = (props) => {
  return <Container fluid className="h-100 flex-column d-flex">
    <Header />
    <View className="outlet">
      { props.view }
    </View>
  </Container>
}

export default AdminLayout