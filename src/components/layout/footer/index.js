import { Col, Row, Stack } from "react-bootstrap"
import "./style.scss"
import View from "../../UI/View"

const Footer = () => {
  return <footer className="footer">
    <Row className="m-0">
      <Col lg={6} className="footer-section-1">
        <Stack direction="horizontal" className="align-items-start justify-content-between">
          <View className="footer-items">
            <View className="footer-title">About</View>
            <View className="footer-item">Contact US</View>
            <View className="footer-item">About US</View>
            <View className="footer-item">Press Releases</View>
            <View className="footer-item mb-0">Carrers</View>
          </View>

          <View className="footer-items">
            <View className="footer-title">Help</View>
            <View className="footer-item">Payments</View>
            <View className="footer-item">Shipping</View>
            <View className="footer-item">Cancellation & Returns</View>
            <View className="footer-item mb-0">FAQ</View>
            <View className="footer-item mb-0">Report Infringement</View>
          </View>

          <View className="footer-items">
            <View className="footer-title">Consumer Policy</View>
            <View className="footer-item">Return Policy</View>
            <View className="footer-item">Terms of Use</View>
            <View className="footer-item">Security</View>
            <View className="footer-item mb-0">Privacy</View>
          </View>

          <View className="footer-items">
            <View className="footer-title">Social</View>
            <View className="footer-item">Facebook</View>
            <View className="footer-item">Twitter</View>
            <View className="footer-item">Instagram</View>
          </View>
        </Stack>
      </Col>
      <Col lg={6} className="footer-section-2">
        <Stack direction="horizontal" className="align-items-start justify-content-between w-100">
          <View className="footer-items">
            <View className="footer-title">Mail Us:</View>
            <View className="footer-item">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
            </View>
          </View>

          <View className="footer-items">
            <View className="footer-title">Registered Office Address:</View>
            <View className="footer-item">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
            </View>
          </View>
        </Stack>
      </Col>
    </Row>
    <View className="footer-text">© 2023 Gnsiss. All Rights Reserved.</View>
  </footer>
}

export default Footer