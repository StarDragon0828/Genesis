import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import './style.scss';
import MyOrdersHeader from './header';
import MyOrdersPanel from './orders-panel';



export default function Orders(props) {
    return(
        <View>
            <h5 className='myorders-link' ><Link to="/myprofile" className='link-none'>My Profile</Link><span className='ms-2'>&gt;</span><span className='text-primary ms-2'>My Orders</span></h5>
            <View className="myorders-page">
                <View className="myorders-main-page" >
                    <MyOrdersHeader />
                    <MyOrdersPanel />
                </View>
            </View>
        </View>
    );
}