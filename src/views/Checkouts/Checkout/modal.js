import { Image, Modal } from "react-bootstrap";
import View from "../../../components/UI/View";
import './style.scss'
import modalImage from '../../../assets/images/chekout/image 2.png';
import Button from '../../../components/UI/Button';


export default function OrderModal(props) {

    const { showModal, onHide, onClick } = props;
    return (
        <Modal className="ordermodal-page" show={showModal} onHide={onHide} centered>
            <Modal.Header closeButton />
            <Modal.Body>
                <View className="modal-image" >
                    <Image src={modalImage} />
                </View>
                <h5 className="modal-title" >Your order has been successfully placed</h5>
                <h5 className="description" >Sit and relax we will take care of your order and will delivery soon</h5>
                
            </Modal.Body>
            <Modal.Footer>
                <View className="d-flex align-items-center justify-content-center">
                    <Button text="Continue Shopping" tooltipText="Click this button to shop." className="success-btn" onClick={onClick} />
                </View>
            </Modal.Footer>
        </Modal>
    );
}