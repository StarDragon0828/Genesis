import { Accordion, Dropdown, Form, FormCheck, FormGroup, Image, Modal } from 'react-bootstrap';
import View from '../../../components/UI/View';
import Button from '../../../components/UI/Button'
import './style.scss';
import { Link } from 'react-router-dom';
import {giftcard} from './data';
import GiftImage from '../../../assets/images/gift-card/gift.png';
import GiftCardImage from '../../../assets/images/gift-card/giftcard.png';
import AccountImage from '../../../assets/images/gift-card/account.png';
import { useState } from 'react';
import paypalImage from '../../../assets/images/chekout/paymentMethod/paypal.png';
import walletImage from '../../../assets/images/chekout/paymentMethod/wallet.png';
import bankImage from '../../../assets/images/chekout/paymentMethod/bank.png';
import {paymentOptionImage} from './data'


export default function CardProfile(props) {

    const [showBuyModal, setShowBuyModal] = useState(false);

    const handleCloseModal = () => {
        setShowBuyModal(false);
    }

    const handleOpenModal = () => {
        setShowBuyModal(true);
    }

    return (
        <View>
            <View className="gift-card-page">
                <View >
                    <h5 className='title' >Gift Card</h5>
                </View>
                <View className="gift-card-details" >
                    <View className="gift-component" >
                        <Link to='/products' >
                            <Image src={GiftImage} />
                            <View>
                                <h5 className='gift-title' >Send Gift</h5>
                            </View>
                        </Link>
                    </View>
                    <View className="giftcard-component" >
                        <Link to='/giftcard/mygiftcard'>
                            <Image src={GiftCardImage} />
                            <View>
                                <h5 className='card-title' >Manage GiftCard</h5>
                            </View>
                        </Link>
                    </View>
                    <View className="account-component" >
                        <Link to='/myprofile'>
                            <Image src={AccountImage} />
                            <View>
                                <h5 className='card-title' >Account</h5>
                            </View>
                        </Link>
                    </View>
                </View>
            </View>
            <View className="gift-card-main" >
                <View className="card-category" >
                    <Link to="/giftcard/birthdaycard" >
                        <Button text="Birthday" className="birthday-btn" />
                    </Link>
                    <Link to="/giftcard/specialdaycard" >
                        <Button text="Special Day" className="special-btn" />
                    </Link>
                    <Link to="/giftcard/specialsomeone">
                        <Button text="To Someone Special" className="someone-btn" />
                    </Link>
                    <Link to="/giftcard/wedding" >
                        <Button text="Wedding" className="wedding-btn" />
                    </Link>
                    <Link to="/giftcard/newbaby" >
                        <Button text="New baby" className="baby-btn" />
                    </Link>
                </View>
                <h5 className='title' >Gift Card</h5> 
                <View className="details" >
                    <View className="card-details" >
                        {giftcard.giftCard.map((item) => (
                            <View className="card-component">
                                <View className="d-flex align-items-center" >
                                    <Image src={item.image}/>
                                    <View className="d-flex" >
                                        <View className="d-flex align-items-center">
                                            <h5 className='card-name' >{item.title}</h5>
                                            <h5 className='card-value text-primary'>{item.value}</h5>
                                        </View>
                                    </View>
                                </View>
                                <View className="d-flex align-items-center justify-content-between" >
                                    <h5 className='description' >{item.description}</h5>
                                    <View>
                                        <Button text="Buy" className='buy-btn' onClick={handleOpenModal}  />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <Modal show={showBuyModal} onHide={handleCloseModal} centered >
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
                                        <Button text="Pay $999.00" className="payment-btn" onClick={handleCloseModal}/>
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
                                        <Button text="Pay $999.00" className="payment-btn" onClick={handleCloseModal} />
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
                                        <Button text="Pay $999.00" className="payment-btn" onClick={handleCloseModal} />
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
                                        <Button text="Pay $999.00" className="pay-btn" onClick={handleCloseModal} />
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
                                        <Button text="Pay $999.00" className="payment-btn" onClick={handleCloseModal}/>
                                    </View>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="Pay" className="pay-btn" onClick={handleCloseModal} ></Button>
                </Modal.Footer>
            </Modal>
        </View>
    );
}