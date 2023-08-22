import { Accordion, Form, FormCheck, FormGroup, Image } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import Button from '../../../components/UI/Button';
import OrderModal from './modal';
import { useEffect, useState } from 'react';
import paypalImage from '../../../assets/images/chekout/paymentMethod/paypal.png';
import walletImage from '../../../assets/images/chekout/paymentMethod/wallet.png';
import bankImage from '../../../assets/images/chekout/paymentMethod/bank.png';
import giftcardImage from '../../../assets/images/chekout/paymentMethod/giftcard.png'
import {paymentOptionImage} from './data'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { CLIENT_ID } from '../../../Config/config';



export default function PaymentOption(props) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleClosModal = () => {
        setShowModal(false);
    };

    let content;

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);

    switch(props.currentPage){
            case 'page4':
            content = <View className="payment-option-details">
                        <View className="payment-header" >
                            <View className="payment-number" >4</View>
                            <View className="payment-title" >PAYMENT OPTIONS</View>
                        </View>
                        <View className="payment-details" >
                            <Accordion>
                                {/* <Accordion.Item eventKey='0' className='payment-upi'>
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
                                                    <Button text="Pay" tooltipText="Click this button to make payment." className="payment-btn" onClick={handleOpenModal} />
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
                                                    <Button text="Pay" tooltipText="Click this button to make payment." className="payment-btn" onClick={handleOpenModal} />
                                                </View>
                                            </Form>
                                        </Accordion.Body>
                                </Accordion.Item> */}
                                <Accordion.Item eventKey='2' className='payment-paypal'>
                                        <Accordion.Header>
                                            <View className="paypal" >
                                                <FormCheck type="radio" id="radio3" label="Paypal" name="myRadioGroup" />
                                            </View>
                                            <Image src={paypalImage} />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <PayPalScriptProvider option={{"client-id":CLIENT_ID}} >
                                                <Form  >
                                                    <PayPalButtons
                                                        style={{ layout: "vertical", marginRight: "20px" }}
                                                        createOrder={createOrder}
                                                        onApprove={onApprove}
                                                    />
                                                </Form>
                                            </PayPalScriptProvider>
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
                                                    <Button text="Pay" tooltipText="Click this button to make payment." className="pay-btn" onClick={handleOpenModal} />
                                                </View>
                                            </Form>
                                        </Accordion.Body>
                                </Accordion.Item>
                                {/* <Accordion.Item eventKey='4' className='payment-banking'>
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
                                                    <Button text="Pay" tooltipText="Click this button to make payment." className="payment-btn" onClick={handleOpenModal}/>
                                                </View>
                                            </Form>
                                        </Accordion.Body>
                                </Accordion.Item> */}
                                <Accordion.Item eventKey='5' className='payment-gift'>
                                        <Accordion.Header>
                                            <View className="gift-card" >
                                                <FormCheck type="radio" id="radio6" label="Do you have gift cards?  Would you like to pay with a gift card?" name="myRadioGroup" />
                                            </View>
                                            <Image src={giftcardImage} />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Form className='d-flex align-items-center' >
                                                <FormGroup className='gift-id' >
                                                    <Form.Control type="text" placeholder="Please Enter Number"/>
                                                </FormGroup>
                                                <View>
                                                    <Button text="Pay" tooltipText="Click this button to make payment." className="payment-btn" onClick={handleOpenModal}/>
                                                </View>
                                            </Form>
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </View>
                        <OrderModal showModal={showModal} onHide={handleClosModal} onClick={handleClosModal} />
                    </View>; 
      break;
      default:
      content = <View className="payment-option">
                    <View className="number" >4</View>
                    <h5 className='title' >PAYMENT OPTIONS</h5>
                </View>;
    }

    return <div>{content}</div>;
}