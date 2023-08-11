import { useState } from 'react';
import View from '../../../components/UI/View';
import './style.scss';
import { Dropdown, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/UI/Button';



export default function MyOrdersHeader(props) {

    const myorders = ["Orders", "Buy Again", "Cancelled Orders"];
    const [orders, setOrders] = useState("Orders");

    return(
        <Stack className='myorders-header' >
            <View className="d-flex align-items-center justify-content-between" >
                <h5 className='myorders-title' >My Orders</h5>
                <View className="search" >
                    <input placeholder='Search your orders here' className='myorders-search' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                    <Button text="Search Orders" className="search-btn" tooltipText="You can search your order." /> 
                </View>
            </View>
            <Stack direction='horizontal' className='myorders' >
                {
                    myorders.map((_orders, idx) => <View onClick={() => setOrders(_orders)} key={`orders-${idx}`} className={`orders ${orders===_orders?"active text-primary":""}`}> { _orders } </View>)
                }
                <View className="d-flex align-items-center header-items" >
                    <h5 className='orders-item' >5 orders <span>placed in</span></h5>
                    <Dropdown>
                        <Dropdown.Toggle variant="third" id="dropdown-basic">
                            Last 30 days
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">1</Dropdown.Item>
                            <Dropdown.Item href="">2</Dropdown.Item>
                            <Dropdown.Item href="">3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </View>
            </Stack>
        </Stack>
    );
}