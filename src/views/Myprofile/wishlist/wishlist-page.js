import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import './style.scss';
import WishListPanel from './wishlist-panel';


export default function WishListPage(props) {
   return (
    <View className="wishlist-page" >
        <h5 className='wishlist-link' ><Link to="/myprofile" className='link-none'>My Profile</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>My Wishlist</span></h5>
        <View className="wishlist-main-page" >
            <View>
                <h3 className='wishlist-title' >My Whislist({})</h3>
            </View>
            <WishListPanel />
        </View>
    </View>
   );
}