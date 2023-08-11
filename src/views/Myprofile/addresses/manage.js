import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import './style.scss';
import AddressesPanel from './addresses';


export default function ManageAddresses(props) {
    return (
        <View>
            <h5 className='manage-addresses-link' ><Link to="/myprofile" className='link-none'>My Profile</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Manage Addresses</span></h5>
            <View className="manage-addresses" >
                <View className="manage-main-page" >
                    <View>
                        <h3 className='manage-addresses-title' >Manage Addresses</h3>
                    </View>
                    <View>
                        <View className="manage-addresses-add" >
                            <Link to="/myprofile/myaddresses/addaddress" className='link-none' >
                                <h2 className='add-title text-primary' >+ Add a new address</h2>
                            </Link>
                        </View>
                        <AddressesPanel />
                    </View>
                </View>
            </View>
        </View>
    );
}