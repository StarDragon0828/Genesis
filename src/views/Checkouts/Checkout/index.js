import { Container } from 'react-bootstrap';
import './style.scss';
import CheckoutLogin from './checkout-login';
import AddressNone from './address';
import OrderSummery from './order-summery';
import PaymentOption from './payment-option';
import View from '../../../components/UI/View';
import PriceDetaii from './price-detail';
import { useState } from 'react';

export default function Checkout(props) {

  const [currentPage, setCurrentPage] = useState('page1');

  const handleClick = () => {
    setCurrentPage('page2');
  };
  const handleClick1 = () => {
    setCurrentPage('page3');
  };
  const handleClick2 = () => {
    setCurrentPage('page4');
  };
    return (
        <Container fluid className='checkout-page' >
            <View className="w-75" >
                <CheckoutLogin currentPage={currentPage} handleClick={handleClick} />
                <AddressNone currentPage={currentPage} handleClick={handleClick1} />
                <OrderSummery currentPage={currentPage} handleClick={handleClick2}/>
                <PaymentOption currentPage={currentPage} />
            </View>
            <PriceDetaii />
        </Container>
    );
}