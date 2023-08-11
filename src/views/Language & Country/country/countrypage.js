import { Dropdown } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import Button from '../../../components/UI/Button'
import { Link } from 'react-router-dom';


export default function CountryPage(props) {
    return (
        <View className="country-page" >
            <h4 className='country-title' >Website (Country/Region)</h4>
            <View className="d-flex country-details">
                <View className="country-details-page" >
                    <h4 className="select-country-title">Select your preferred country/region website:</h4>
                    <Dropdown>
                            <Dropdown.Toggle variant="third" id="dropdown-basic">
                                Select Country
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">United States</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">France</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Ukraine</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                    <h4 className='select-country-note' >NOTE: <span>A new country/region website selection will open in a new tab.</span></h4>
                </View>
                <View className="country-details-page">
                    <h4 className='changing-title' >Changing country/region website</h4>
                    <h5 className='changing-description' >Changing the country/region you shop from may affect factors including price, shipping options and product availability.</h5>
                </View>
            </View>
            <View className="country-btn-group" >
                <Button text="Cancel" className="cancel-button" />
                <Link to="/">
                    <Button text="Go to website" className="go-button" />
                </Link>
            </View>
        </View>
    );
}