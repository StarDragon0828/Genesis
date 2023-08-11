import View from '../../../components/UI/View';
import './style.scss';
import { deliveryAddress } from './data';
import { FormCheck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button';

export default function AddressNone(props) {


    let content;

        switch(props.currentPage){
            case 'page2':
                    content = <View className="delivery-address-detail" >
                    <View className="address-header" >
                        <View className="address-number" >2</View>
                        <View className="address-title" >DELIVERY ADDRESS</View>
                    </View>
                    <View>
                        {deliveryAddress.map((item) => (
                            <View className="address-details" >
                                <View className="address" >
                                    <View className="detail" >
                                        <FormCheck type="radio" id={item.name} className='radio' name="myRadioGroup"/>
                                        <h5 className='name' >{ item.name }</h5>
                                        <View className="location" >{ item.title }</View>
                                        <h5 className='number' >{ item.number }</h5>
                                    </View>
                                    <p className='email' >{ item.email }</p>
                                    <p className='address-delivery' >{ item.address }</p>
                                </View>
                                <View className="edit-detail" >
                                    <Link to="#" className='link-none' ><h5 className='edit text-primary' >EDIT</h5></Link>
                                </View>
                                <View>
                                    <Button text="Deliver Here" className="deliver-btn" onClick={props.handleClick}/>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>;
            break;
            default:
            content = <View className="delivery-address" >
                            <View className="number" >2</View>
                            <h5 className='title' >DELIVERY ADDRESS</h5>
                        </View>;;
    }
        
        
        return <div>{content}</div>;
 
}