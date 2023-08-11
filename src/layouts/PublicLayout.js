import { Container } from "react-bootstrap"
import Header from "../components/layout/header"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import View from "../components/UI/View"

const PublicLayout = (props) => {
  return <Container fluid className="h-100 flex-column d-flex">
    <Header />
    <Navbar />
    <View className="outlet">
      { props.view }
    </View>
    <Footer />
  </Container>
}

export default PublicLayout