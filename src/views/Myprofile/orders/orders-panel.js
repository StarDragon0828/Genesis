import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { myordersItems as _myordersItems } from "./data";
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Items = (props) => {
  
    const { item } = props;
    const tooltip = <Tooltip className="custom-tooltip">You can view details of this order.</Tooltip>;
  
    return <View className="" >
        <View className="myorders-component">
            <View className="myorders-component-panel">
                <View className="d-flex align-items-center details" >
                    <Image src={item.image} />
                    <View>
                        <h6 className="description"> { item.description } </h6>
                        <OverlayTrigger placement="top" overlay={tooltip} delay={{ show: 200, hide: 300 }}>
                            <Link to="/myprofile/myorders/viewmyorder" className='link-none' ><h6 className='order-view text-primary ' >{ item.view }</h6></Link>
                        </OverlayTrigger>
                        <h5 className='order-placed' >Order Placed: <span>{ item.placed }</span></h5>
                        <h6 className='order-closed' >{ item.closed }</h6>
                    </View>
                </View>
                <View className="details-price" >
                    <h5 className="price">$ { item.price.toFixed(2) }</h5>
                </View>
                {
                        item.delivered === '' ? (<View className="d-flex" ><FontAwesomeIcon icon={faCircle} className='cancel-circle' /><h5 className='canceled' >{ item.canceled }</h5></View>) :
                        (<View>
                            <View className="d-flex" >
                                <FontAwesomeIcon icon={faCircle} className='circle-icon' />
                                <h5 className='order-delivered' >{ item.delivered }</h5>
                            </View>
                            <h5 className='order-delivered-content' >{ item.content }</h5>
                            <View className="d-flex" >
                                <FontAwesomeIcon icon={faStar} className='star-icon' />
                                <h5 className='order-review text-primary' >{ item.review }</h5>
                            </View>
                        </View>)
                }
            </View>
        </View>
    </View>
  }
    
export default function MyOrdersPanel(props) {

  const [items, setItems] = useState(_myordersItems)

  return <View className="wishlist-panel">
    {
      items.map((item, idx) => <Items key={`items-${idx}`} item={item} />)
    }
  </View>
}