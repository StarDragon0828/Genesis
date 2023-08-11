import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Badge, Image, OverlayTrigger, ProgressBar, Stack, Tooltip } from "react-bootstrap";
import View from "../../../components/UI/View";
import Button from "../../../components/UI/Button"
import { productData } from "./data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import myImage from '../../../assets/images/product/4.png'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetail(props) {

  const { offers } = productData
  
  const [targetDiv, setTargetDiv] = useState(null);
  const [ratingModal, setRatingModal] = useState(false);

  const RatingModalMouseEnter = () => {
    setRatingModal(true);
  };

  const RatingModalMouseLeave = () => {
    setRatingModal(false);
  };

  const handleTargetDivRef = (element) => {
    setTargetDiv(element);
  };

  const reviewValue = 4.7;

  const star = {
    five: 74,
    four: 10,
    three: 8,
    two: 5,
    one: 3
  };

  const starRatingValue = {
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1
  };

  const [totalValue, setTotalValue] = useState(0);
  const [progressValue, setProgressValue] = useState({});

  useEffect(() => {
    let calculatedTotalValue = 0;
    const calculatedProgressValues = {};
  
    for (const key in star) {
      if (star.hasOwnProperty(key)) {
        calculatedTotalValue += star[key];
      }
    }

    setTotalValue(calculatedTotalValue);

    for (const key in star) {
      calculatedProgressValues[key] = calculatedTotalValue !== 0 ? (star[key] / calculatedTotalValue) * 100 : 0;
    }
    
    setProgressValue(calculatedProgressValues);
  
  }, []);

  const tooltip = (
    <Tooltip className="member-tooltip">
      <h5 className="title">Dear Customer</h5>
      <h5 className="tooltip-text">Would you like to become a member of the Good Life Club?</h5>
    </Tooltip>
  );


  return ( 
  <Stack className="d-flex w-100" >
    <View className="product-detail">
      <View className="product-details">
        <h5 className="product-name">APPLE iPhone 13 (Blue, 128 GB)</h5>
        <View className="d-flex align-items-center total-reviews">
          <View className="position-relative">
            <Badge onMouseEnter={RatingModalMouseEnter} onMouseLeave={RatingModalMouseLeave}>
              4.7 <FontAwesomeIcon icon="star" className="ms-1" />
            </Badge>
            <View className={ ratingModal ? 'rating-modal-hovered' : 'rating-modal' } ref={handleTargetDivRef} onMouseEnter={RatingModalMouseEnter} onMouseLeave={RatingModalMouseLeave} >
              <View>
                <h5 className="modal-title text-primary">Cutomer Reviews</h5>
              </View>

              <View className="d-flex align-items-center gap-10">
                <View className="w-40">
                  <h5 className="review-value">{reviewValue}</h5>
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <h5 className="global-rating text-primary" >Based on {totalValue} Reviews</h5>
                </View>
                <View className="w-60">
                  {Object.entries(star).map(([key, value]) => (
                  <View className="five-star-rating" key={key}>
                    <View className="w-21">
                      <h5 className="star" >{starRatingValue[key]} star</h5>
                    </View>
                    <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-${key}`}>Show only {starRatingValue[key]} stars Reviews</Tooltip>} delay={{ show: 200, hide: 300 }}>
                      <ProgressBar now={progressValue[key]} className="progressbar" />
                    </OverlayTrigger>
                    <View className="w-17">
                      <h5 className="value">{`${progressValue[key]}%`}</h5>
                    </View>
                  </View>
                ))}
                </View>
              </View>
              
            </View>
          </View>      
          <h6>2,33,946 Ratings & 11,923 Reviews</h6>
        </View>
        <View className="price-container">
          <h6 className="extra text-primary">Extra $349 off</h6>
          <h3 className="price">
            $999.00
            <span className="number">$1349.00</span>
            <span className="text-primary off">17% off</span>
            <FontAwesomeIcon icon="circle-info" fontSize={16} />
          </h3>
        </View>
        <View >
          <h6>Estimated delivery date-delivery by January 17 2023</h6>
        </View>
        <View className="buy-action">
          <Link to="/cart" >
            <Button text="Add to Cart" tooltipText="You can add this item to your cart." className="bg-primary text-white cart-btn"/>
          </Link>
          <Link to="/checkout" >
            <Button text="Buy Now" tooltipText="You can buy it now." className="buy-btn" />
          </Link>
        </View>
        <View className="offers-container">
          <h6 className="offers-header">Offers</h6>
          <View className="offers">
            {
              offers.map((offer, idx) => <View key={`offer-${idx}`} className="offer box-shadow">
                  <h6 className="name"> { offer.name } </h6>
                  <h6 className="description"> { offer.description } </h6>
                  <h6 className="description text-primary mt-auto"> { offer.count } offers</h6>
                </View>)
            }
          </View>
        </View>
        <Stack direction="horizontal" className="delivery">
          <View className="introduce-category">Delivery</View>
        </Stack>
        <Stack direction="horizontal" className="color">
          <View className="introduce-category">Color</View>
        </Stack>
        <Stack direction="horizontal" className="storage">
          <View className="introduce-category">Storage</View>
        </Stack>
        <Stack direction="horizontal" className="seller">
          <View className="introduce-category">Seller</View>
          <View className="seller-info">
            <Link className="seller-name"><span>SuperComNet</span> <Badge> 4.7 <FontAwesomeIcon icon="star" className="ms-1" /></Badge></Link>
          </View>
        </Stack>
        <Stack direction="horizontal" className="description">
          <View className="introduce-category">Description</View>
          <p>iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR
              display facilitate boosting your user experience.</p>
        </Stack>
      </View>
      <View className="detail-property" >
        <View className="member-link" >
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Link to="/memberlogin">
              <Image src={myImage}/>
              <h5 className="member-title" >Member of the <span>Good Life Club</span></h5>
            </Link>
          </OverlayTrigger>
        </View>
        <View className="parameters" >
          <Accordion defaultActiveKey="5">
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
            <Accordion.Item eventKey="5" className="policy-end">
              <Accordion.Header>
                <h5 className="header-title">Delivery Estimated Destination</h5>
              </Accordion.Header>
              <Accordion.Body>
                <View>
                  <h5 className="body-description" >Estimated delivery date-delivery by August 17 2023</h5>
                </View>   
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </View>
      </View>
    </View>
  </Stack>
  );
}