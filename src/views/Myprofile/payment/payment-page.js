import './style.scss';
import View from '../../../components/UI/View'
import { Link } from 'react-router-dom';
import { payments as _payments } from './data';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export const PaymentPage = (props) => {

    const { payment } = props;
    const tooltip = <Tooltip className="custom-tooltip">Move to trash.</Tooltip>;


    return (
        <View>
            <h5 className='payment-link' ><Link to="/myprofile" className='link-none'>My Profile</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Edit Payment</span></h5>
            <View className="payment-page" >
                <View className="payment-main-page" >
                    <h4 className='payment-main-title' >Your saved bank accounts</h4>
                    <View>
                        <View className="payment-main-component" >
                            <h3 className='payment-no' >1.</h3>
                            <View className="d-flex justify-content-between align-items-center" >
                                <View className="payment-details" >
                                    <h5 className='payment-title' >{payment.title}</h5>
                                    <h5 className='payment-account' >{ payment.account }</h5>
                                    <h5 className='payment-type' >{ payment.type }</h5>
                                    <Link className='link-none' to="/myprofile/payment/addpayment">
                                        <h5 className='payment-add text-primary' >Add a New Bank Account</h5>
                                    </Link>
                                </View>
                                <OverlayTrigger placement="top" overlay={tooltip} delay={{ show: 200, hide: 300 }}>
                                    <FontAwesomeIcon icon={faTrash} style={{color:'#A1A1A1'}} />
                                </OverlayTrigger>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default function PaymentPagePanel(props) {

    const [items, setItems] = useState(_payments)
  
    return <View className="products-panel">
      {
        items.map((item, idx) => <PaymentPage key={`items-${idx}`} payment={item} />)
      }
    </View>
  }