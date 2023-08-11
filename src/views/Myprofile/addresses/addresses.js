import View from '../../../components/UI/View';
import './style.scss';
import { addresses as _addresses } from './data';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

  export const Addresses = (props) => {
  
    const { address } = props;
  
    return <View className="manage-addresses-component">
        <View className="d-flex align-items-center justify-content-between" >
            <View className="manage-addresses-component-title" >{ address.title }</View>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </View>
        <View className="manage-addresses-component-details" >
            <h5 className='details-name' >{ address.name }</h5>
            <h5 className='details-number' >{ address.number }</h5>
        </View>
        <h6 className="description"> { address.address } </h6>
    </View>
  }
    
export default function AddressesPanel(props) {

  const [items, setItems] = useState(_addresses)

  return <View className="products-panel">
    {
      items.map((item, idx) => <Addresses key={`items-${idx}`} address={item} />)
    }
  </View>
}