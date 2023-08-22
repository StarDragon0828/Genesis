import View from '../../../components/UI/View';
import './style.scss'
import { orderSummeryItem } from './data';
import { FormCheck, Image, Modal } from 'react-bootstrap';
import Button from '../../../components/UI/Button';
import { useState } from 'react';



export default function OrderSummery(props) {

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

    let content;

    const [showGiftModal, setShowGiftModal] = useState(false);

    const handleOpenModal = () => {
        setShowGiftModal(true);
    }

    const handleCloseModal = () => {
        setShowGiftModal(false);
    }



    switch(props.currentPage){
            case 'page3':
            content = <View className="order-summery-details" >
                        <View className="order-header" >
                            <View className="order-number" >3</View>
                            <View className="order-title" >ORDER SUMMERY</View>
                        </View>
                        <View className="summery-details" >
                            {orderSummeryItem.map((item) => (
                                <View className="order-details" >
                                    <Image src={item.image} />
                                    <View>
                                        <p className='title' >{ item.title }</p>
                                        <h5 className="price text-primary">$ { item.price.toFixed(2) } <span className="text-secondary underline">$ {(item.price * .1).toFixed(2)}</span><span className="text-primary">(17% off)</span></h5>
                                        <h5 className='property' >Color: <span>{ item.color }</span></h5>
                                        <h5 className='property' >Size: <span>{ item.size }</span></h5>
                                        <h5 className='property' >Pattern Name: <span>{ item.patternname }</span></h5>
                                    </View>
                                </View>
                            ))}
                            <View>
                                <h5 className='delivery-property' >Delivery in 2 days, Thu| <span className='text-primary' >Free</span></h5>
                                <Button text="Continue" className="btn" tooltipText="Click this button to go to payment."  onClick={props.handleClick} />
                            </View>
                        </View>
                        <View className="counter" >
                            <View className="d-flex" >
                                <Button text="-" className="counter-item1" onClick={minusCounter} />
                                <View type='number' className='counter-input' >{counter}</View>
                                <Button text="+" className="counter-item2" onClick={plusCounter} />
                            </View>
                            <View>
                                <Button text="REMOVE" className='remove' onClick={removeCounter} />
                            </View>
                            <Button text="Gift" className="gift-btn" tooltipText="Click this button to send someone a gift." onClick={handleOpenModal} />
                        </View>
                        <Modal show={showGiftModal} onHide={handleCloseModal} centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='gift-title' >There he receives a gift</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='gift-body'>
                                <View className="d-flex align-items-center justify-content-around">
                                    <View>
                                        <h5>Name</h5>
                                        <input placeholder='Enter Name' />
                                        <h5 className='title'>Email</h5>
                                        <input placeholder='Enter Email' />
                                        <h5>Phone Number</h5>
                                        <input placeholder='Enter Phone number' />
                                        <h5>Street Address</h5>
                                        <input type="text" id="street-address" name="street-address" required  placeholder='Enter Street Address' />
                                        <h5>House Number</h5>
                                        <input type="text" id="house-number" name="house-number" required placeholder='Enter House Number' />
                                    </View>
                                    <View>
                                        <h5>Apartment Number</h5>
                                        <input type="text" id="apartment-number" name="apartment-number" required placeholder='Enter Apartment Number' />
                                        <h5>PO Box Number</h5>
                                        <input type="text" id="po-box" name="po-box" required placeholder='Enter PO Box Number' />
                                        <h5>ZIP Code</h5>
                                        <input type="text" id="zip-code" name="zip-code" required placeholder='Enter ZIP Code' />
                                        <h5>City</h5>
                                        <input placeholder='Enter City' />
                                        <h5>Country</h5>
                                        <input placeholder='Enter Country' />
                                    </View>
                                </View>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button text="OK" className="gift-btn" onClick={handleCloseModal} />
                            </Modal.Footer>
                        </Modal>
                    </View>
            break;
            default:
            content = <View className="order-summery" >
                        <View className="number" >3</View>
                        <h5 className='title' >ORDER SUMMERY</h5>
                    </View>;
    }
    
    return <div>{content}</div>;
}