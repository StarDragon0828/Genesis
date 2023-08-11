import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import { myordersDetailsItems } from "./data";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import Button from '../../../components/UI/Button';
import { Image } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Step, Stepper } from 'react-form-stepper';
import { useState } from 'react';


export default function ViewMyOrder(props) {

    const [activeStep, setActiveStep] = useState(2);
    const [item, setItem] = useState(0);

    const handleStepClick = (index) => {
        setActiveStep(index);
        setItem(index - 1)
    };

    const deliveredStatus = ["Your item has been confirmed", "Your item has been shipped", "Your item has been out for delivery", "Your item has been delivered" ];

    return(
        <View>
            <h5 className='myorders-link' ><Link to="/myprofile" className='link-none'>My Profile</Link><span className='ms-2'>&gt;</span><Link to="/myprofile/myorders" className='link-none' ><span className='ms-2'>My Orders</span></Link><span className='ms-2'>&gt;</span><span className='ms-2 text-primary'>View your item</span></h5>
            <View className="vieworder-page">
                <View className="vieworder-main-page" >
                    <View className="delivery-address" >
                        <h5 className='delivery-address-title' >Delivery Address</h5>
                        <h5 className='delivery-address-name' >Lika</h5>
                        <h5 className='delivery-address-description' >Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices  mattis tellus..</h5>
                    </View>
                    <View className="payment-method" >
                        <h5 className='payment-method-title' >Payment Method</h5>
                        <View className="payment-card" >
                            <FontAwesomeIcon icon={faCcVisa} className='card-icon' />
                            <h5 className='card-number' >****6538</h5>
                        </View>
                    </View>
                    <View className="more" >
                        <h5 className='more-title' >More Actions</h5>
                        <View className="more-download" >
                            <h5 className='invoice-title' >Download Invoice</h5>
                            <Button text="Download" className="invoice-btn" />
                        </View>
                    </View>
                </View>
                <View className="vieworder-details-page" >
                    {myordersDetailsItems.map((item) => (
                        <View className="order-details" >
                            <Image src={item.image} />
                            <View>
                                <p className='description' >{ item.description }</p>
                                <p className='seller' >Seller: MIFKRTCOM</p>
                                <p className='closed' >{ item.closed }</p>
                                <p className='price text-primary' >${item.price}</p>
                                <View className="details-review" >
                                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                                    <h5 className='review text-primary' >{ item.review }</h5>
                                </View>
                            </View>
                        </View>
                    ))}
                    <View className='stepper'>
                        <Stepper connectorStateColors='true' activeStep={activeStep}>
                            <Step label="Order Confirmed" onClick={() => handleStepClick(1)} />
                            <Step label="Shipped" onClick={() => handleStepClick(2)} />
                            <Step label="Out For Delivery" onClick={() => handleStepClick(3)} />
                            <Step label="Delivered" onClick={() => handleStepClick(4)} />
                        </Stepper>
                        <h5 className='delivered-status' >{deliveredStatus[item]}</h5>
                    </View>
                </View>
            </View>
        </View>
    );
}