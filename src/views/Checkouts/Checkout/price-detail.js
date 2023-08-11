import View from '../../../components/UI/View';
import './style.scss';



export default function PriceDetaii(props) {
    return (
        <View className="price-detail-page" >
            <View className="page-title" >
                <h5 className='title' >PRICE DETAILS</h5>
            </View>
            <View className="details" >
                <View className="d-flex align-items-center justify-content-between" >
                    <h5 className='price' >Price (1item)</h5>
                    <h5 className='price-detail' >$999.00</h5>
                </View>
                <View className="delivery-details" >
                    <h5 className='title' >Delivery Charges</h5>
                    <h5 className='charge text-primary' >FREE</h5>
                </View>
                <View className="total" >
                    <h5 className='title' >Total Payable</h5>
                    <h5 className='price' >$999.00</h5>
                </View>
                <View className="saving" >
                    <h5 className='description text-primary' >Your Total Savings on this order $349.00</h5>
                </View>
            </View>
        </View>
    );
}