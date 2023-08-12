import { Col, Container, Row } from "react-bootstrap";
import "./layout.scss";
import Introduce from "./introduce";
import View from "../../UI/View";

const AuthLayout = (props) => {
  return <Container fluid className="auth-container">
    <View className="d-flex h-100 align-items-stretch auth-layout">
      <Col md={4} className="p-0">
        <Introduce />
      </Col>
      <Col className="input-container">
        <View className="inputs">
          { props.children }
        </View>
      </Col>
    </View>
  </Container>
}

export default AuthLayout;