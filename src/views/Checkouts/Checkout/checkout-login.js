import { Form, FormGroup } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import { Link } from 'react-router-dom';
import Agree from '../../../components/layout/auth/agree';
import Button from '../../../components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';


export default function CheckoutLogin(props) {


let content;

    switch(props.currentPage){
            case 'page1':
            content = <View className="checkout-login" >
            <View className="login-header" >
                <View className="header-number" >1</View>
                <View className="header-title" >LOGIN OR SIGNUP</View>
            </View>
            <View className="login-body d-flex justify-content-between" >
                <View className="login-body-left" >
                    <Form>
                        <FormGroup className='mb-4' >
                            <Form.Control type="email" placeholder="Enter email" className="border-0 border-bottom" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Control type="email" placeholder="Enter Password" className="border-0 border-bottom" />
                        </FormGroup>
                        <View className="no-account" >
                            <Link to="/signup" >Don’t have an account?</Link>
                        </View>
                        <Agree className="agree" />
                        <Button text="Continue" className="continue-btn" onClick={props.handleClick} />
                    </Form>
                </View>
                <View className="login-body-right" >
                    <h5 className='title' >Advantages of our secure login</h5>
                    <View className="track d-flex align-items-center" >
                        <View className="w-10" >
                            <FontAwesomeIcon icon={faTruckFast} className='track-icon'/>
                        </View>
                        <h5 className='description' >Easily Track Orders, Hassle free Returns</h5>
                    </View>
                    <View className="relevant-alert d-flex align-items-center" >
                        <View className="w-10" >
                            <FontAwesomeIcon icon={faBell} className='alert-icon' />
                        </View>
                        <h5 className='description' >Get Relevant Alerts and Recommendation</h5>
                    </View>
                    <View className="more d-flex align-items-center" >
                        <View className="w-10" >
                            <FontAwesomeIcon icon={faStar} className='star-icon' />
                        </View>
                        <h5 className='description' >Wishlist, Ratings, Reviews and more</h5>
                    </View>
                </View>
            </View>
        </View>
      break;
      default:
      content = <View className="login-details" >
                    <View className="number" >1</View>
                    <h5 className='title' >LOGIN OR SIGNUP</h5>
                </View>;
    }
    
    return <div>{content}</div>;
}