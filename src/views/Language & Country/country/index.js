import { Container } from 'react-bootstrap';
import './style.scss';
import CountryPage from './countrypage';
import CountryPanel from './country-panel';
import { boughtItems, recommendItems } from './data'
import CountrySlider from './country-panel';
import View from '../../../components/UI/View';
import MyNotification from '../../Auth/notification';

export default function CountrySetting(props) {
    return (
        <Container fluid className='country-setting-page' >
            <CountryPage />
            <CountryPanel />
            <View className="countrypanel-page">
                <CountrySlider title="Customers who bought items in your cart also bought" pagenumber="Page 1 of 3" products={boughtItems}  />
                <CountrySlider title="Recommended based on your shopping trends" pagenumber="Page 1 of 3" products={recommendItems}  />
            </View>
            <MyNotification />
        </Container>
    );
}