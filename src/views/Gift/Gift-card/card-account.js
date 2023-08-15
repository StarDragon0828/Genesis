import { Accordion, Image } from 'react-bootstrap';
import View from '../../../components/UI/View';
import Button from '../../../components/UI/Button'
import './style.scss';
import { Link } from 'react-router-dom';
import {giftcard} from './data';
import GiftImage from '../../../assets/images/gift-card/gift.png';
import GiftCardImage from '../../../assets/images/gift-card/giftcard.png';
import AccountImage from '../../../assets/images/gift-card/account.png';
import { useState } from 'react';


export default function CardProfile(props) {

    const categories = ["Birthday", "Valentine's Day", "Women's Day", "Man's day", "Beautiful Day", "A holiday gift", "A gift for Christmas", "A gift for grandchildren", "A gift for mom", "A gift for dad", "A gift for my girlfriend", "A gift for my best friend"]
    const [category, setCategory] = useState("Birthday");

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
                    {
                        categories.map((_category, idx) => 
                        <View onClick={() => setCategory(_category)} key={`category-${idx}`} className={`category ${category===_category?"active text-primary":""}`}> { _category } </View>
                        )
                    }
                </View>
                <h5 className='title' >Our Service</h5> 
                <View className="details" >
                    <View className="service" >
                        <Accordion>
                            <Accordion.Item eventKey="0" className="policy">
                                <Accordion.Header>
                                    <h5 className="header-title">100% Money-Back Guarantee</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <View>
                                    <h5 className="body-description" >If you're not satisfied with your purchase, we offer a hassle-free money-back guarantee.</h5>
                                    </View>
                                    <View>
                                    <h6 className="body-description">-Timeframe</h6>
                                    <ul>
                                        Money-back guarantee within 10 days of delivery
                                    </ul>
                                    <h6 className="body-description">-Return shipping</h6>
                                    <ul>
                                        Business covers return shipping
                                    </ul>
                                    </View>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="policy">
                                <Accordion.Header>
                                    <h5 className="header-title">Secure purchases with encrypted protocols</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <View>
                                    <h5 className="body-description" >Genesis uses advanced security measures to protect your personal and financial information during the purchase process.</h5>
                                    </View>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="policy">
                                <Accordion.Header>
                                    <h5 className="header-title">FREE Shipping</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <View>
                                    <h5 className="body-description" >Free shipping on orders over $10. International shipping is available.</h5>
                                    </View>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="policy">
                                <Accordion.Header>
                                    <h5 className="header-title">FAST Shipping</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <View>
                                    <h5 className="body-description" >Next-day delivery, 2-day delivery</h5>
                                    </View>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className="policy">
                                <Accordion.Header>
                                    <h5 className="header-title">Return policy</h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <View>
                                    <h5 className="body-description" >Easy return policy within 10 days of delivery</h5>
                                    </View>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </View>
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
                                        <Button text="Buy" className='buy-btn' />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}