import { Accordion, Form, FormCheck, FormGroup, FormLabel, Image, Modal } from 'react-bootstrap';
import View from '../../../../components/UI/View';
import Button from '../../../../components/UI/Button'
import paypalImage from '../../../../assets/images/chekout/paymentMethod/paypal.png'
import walletImage from '../../../../assets/images/chekout/paymentMethod/wallet.png';
import bankImage from '../../../../assets/images/chekout/paymentMethod/bank.png';
import './style.scss';
import {paymentOptionImage} from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



export default function GiftCardModal(props) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState('');

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
    };

    const { showBuyModal,tip, showMailModal, showSendModal, selectedGiftCardImage, fileInputRef, onHide,type, onClick } = props;

    const hideModal = () => {
        clearImage()
        onHide()
    }

    const sendGift = () => {
        clearImage()
        onClick()
    }

    const clearImage = () => {
        if (fileInputRef && fileInputRef.current)
            fileInputRef.current.value = null
        setUploadedImage("")
    }

    return(
        <View>
            <Modal show={showBuyModal} onHide={hideModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title className='pay-title' >Gift Card Purchase Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pay-body'>
                    <Accordion>
                        <Accordion.Item eventKey='0' className='payment-upi'>
                            <Accordion.Header>
                            <View className="upi" >
                                <FormCheck type="radio" id="radio1" label="UPI" name="myRadioGroup" />
                            </View>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Form className='d-flex align-items-center' >
                                    <FormGroup className='upi-id' >
                                        <Form.Control type="text" placeholder="UPI ID"/>
                                    </FormGroup>
                                    <View>
                                        <Button text="Pay $999.00" className="payment-btn" onClick={onClick}/>
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1' className='payment-wallets'>
                            <Accordion.Header>
                                <View className="wallets" >
                                    <FormCheck type="radio" id="radio2" label="Wallets" name="myRadioGroup" />
                                </View>
                                <Image src={walletImage} />
                            </Accordion.Header>
                            <Accordion.Body>
                                <Form className='d-flex align-items-center' >
                                    <FormGroup className='wallet-id' >
                                        <Form.Control type="text" placeholder="Wallet Address"/>
                                    </FormGroup>
                                    <View>
                                        <Button text="Pay $999.00" className="payment-btn" onClick={onClick} />
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2' className='payment-paypal'>
                            <Accordion.Header>
                                <View className="paypal" >
                                    <FormCheck type="radio" id="radio3" label="Paypal" name="myRadioGroup" />
                                </View>
                                <Image src={paypalImage} />
                            </Accordion.Header>
                            <Accordion.Body>
                                <Form className='d-flex align-items-center' >
                                    <FormGroup className='paypal-id' >
                                        <Form.Control type="text" placeholder="PayPal Address"/>
                                    </FormGroup>
                                    <View>
                                        <Button text="Pay $999.00" className="payment-btn" onClick={onClick} />
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3' className='payment-card' >
                            <Accordion.Header>
                                <View className="card-payment" >
                                    <FormCheck type="radio" id="radio4" label="Credit / Debit / ATM Card" name="myRadioGroup" />
                                </View>
                                {paymentOptionImage.map((item) => (
                                    <Image src={item.image} />
                                ))}
                            </Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                                <Form className='form'>
                                    <FormGroup className='form-group' >
                                        <Form.Control type="text" placeholder="Enter Card Number" className='form-input-card-number' />
                                        <View className="card-valid" >
                                            <Form.Control type="text" placeholder="Valid till" className='card-valid-till' />
                                            <Form.Control type="text" placeholder="MM" className='card-valid-mm' />
                                            <Form.Control type="text" placeholder="YY" className='card-valid-mm' />
                                            <Form.Control type="text" placeholder="CVV" className='card-valid-cvv' />
                                        </View>
                                    </FormGroup>
                                    <View className="submit">
                                        <Button text="Pay $999.00" className="pay-btn" onClick={onClick} />
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='4' className='payment-banking'>
                            <Accordion.Header>
                                <View className="net-banking" >
                                    <FormCheck type="radio" id="radio5" label="Net Banking" name="myRadioGroup" />
                                </View>
                                <Image src={bankImage} />
                            </Accordion.Header>
                            <Accordion.Body>
                                <Form className='d-flex align-items-center' >
                                    <FormGroup className='banking-id' >
                                        <Form.Control type="text" placeholder="Address"/>
                                    </FormGroup>
                                    <View>
                                        <Button text="Pay $999.00" className="payment-btn" onClick={onClick}/>
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="Pay" className="pay-btn" onClick={onClick} ></Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showSendModal} onHide={hideModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='gift-title' >There he receives a gift</Modal.Title>
                </Modal.Header>
                <Modal.Body className='gift-body'>
                    <View className="d-flex align-items-center justify-content-around" >
                        <View className="image-container">
                            <Image src={selectedGiftCardImage} />
                            <h5 className='card-tip' >{tip}</h5>
                            <Image src={uploadedImage} className={`upload-image ${uploadedImage ? 'uploaded' : ''}`} />
                            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                            <View className="upload-icon" onClick={handleButtonClick}>
                                <FontAwesomeIcon icon={faUpload} className='icon' style={{color: "#c0c7d3",}} />
                            </View>
                        </View>
                        <View className="d-flex align-items-center justify-content-around w-100">
                            <View>
                                <h5 className='title'>Name</h5>
                                <input placeholder='Enter Name' />
                                <h5 className='title'>Email</h5>
                                <input placeholder='Enter Email' />
                                <h5>Phone Number</h5>
                                <input placeholder='Enter Phone number' />
                            </View>
                            <View>
                                <h5>City</h5>
                                <input placeholder='Enter City' />
                                <h5>Country</h5>
                                <input placeholder='Enter Country' />
                            </View>
                        </View>
                    </View>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="OK" className="gift-btn" onClick={sendGift} />
                </Modal.Footer>
            </Modal>
            <Modal show={showMailModal} onHide={hideModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='gift-title' >There he receives a Mail</Modal.Title>
                </Modal.Header>
                <Modal.Body className='gift-body'>
                    <View className="d-flex align-items-center justify-content-around" >
                        <View className="d-flex align-items-center justify-content-around w-100">
                            <View>
                                <h5 className='title'>Name</h5>
                                <input placeholder='Enter Name' />
                                <h5 className='title'>Email</h5>
                                <input placeholder='Enter Email' />
                            </View>
                            <View>
                                <FormGroup>
                                    <FormLabel>Message</FormLabel>
                                    <Form.Control as="textarea" rows="3" name="address" />
                                </FormGroup>
                            </View>
                        </View>
                    </View>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="OK" className="gift-btn" onClick={onClick} />
                </Modal.Footer>
            </Modal>
        </View>
    );
}