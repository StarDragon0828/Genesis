import { Form, FormGroup, FormLabel, Image, Modal } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import myImage from '../../../assets/images/product/main.png';
import Button from '../../../components/UI/Button';
import { useState } from 'react';
import { productData } from './data';




export default function GiftModal(props) {

    const {giftModal, onHide, onClick} = props;

    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        setCounter(counter + 1);
    };

    const minusCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
          }
    };

    const removeCounter = () => {
        setCounter(0);
    }

    return (
        <View>
            <Modal show={giftModal} onHide={onHide} centered>
                <Modal.Header closeButton >
                    <Modal.Title className='modal-title' >Send a gift for this product</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body' >
                    <View className="d-flex justify-content-between">
                        <View className="gift-image">
                            <Image src={myImage} />
                        </View>
                        <View className="gift-details">
                            <Form>
                                <h5 className='title' >Delivery Info</h5>
                                <View className="info">
                                    <FormGroup>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <Form.Control type='email' placeholder="Enter email" />
                                    </FormGroup>
                                </View>
                                <FormGroup>
                                    <FormLabel>Message</FormLabel>
                                    <Form.Control as="textarea" rows="3" name="address" />
                                </FormGroup>
                                <View className="my-info">
                                    <FormGroup>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Email</FormLabel>
                                        <Form.Control type='email' placeholder="Enter email" />
                                    </FormGroup>
                                </View>
                                <View className="add-remove" >
                                    <View className="counter" >
                                        <Button text="-" className="counter-item1" onClick={minusCounter} />
                                        <View type='number' className='counter-input' >{counter}</View>
                                        <Button text="+" className="counter-item2" onClick={plusCounter} />
                                    </View>
                                    <View>
                                        <Button text="Save" className='save-btn' onClick={onClick} />
                                    </View>
                                </View>
                                <View className="giftcard-image" >
                                    {productData.giftCard.map((item) => (
                                        <Image src={item.image}/>
                                    ))}
                                </View>
                            </Form>
                        </View>
                    </View>
                </Modal.Body>
            </Modal>
        </View>
    );
}