import { Dropdown, FormCheck } from 'react-bootstrap';
import View from '../../../components/UI/View';
import './style.scss';
import Button from '../../../components/UI/Button';

export default function LanguagePage(props) {
    return (
        <View className="language-page" >
            <View className="d-flex justify-content-between select" >
                <View className="language-details">
                    <View className="details-border" >
                        <h5 className='title' >Language Settings</h5>
                        <h5 className='description' >Select the language you prefer for browsing, shopping, and communications.</h5>
                        <FormCheck type="radio" id="radio1" custom label="English - EN" className='radio' name="myRadioGroup"/>
                    </View>
                    <View className="select-language" >
                        <FormCheck type="radio" id="radio2" custom label="French" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio3" custom label="Polish" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio4" custom label="Turkish" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio5" custom label="German" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio6" custom label="Italian" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio7" custom label="Portuguese" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio8" custom label="Arabic" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio9" custom label="Dutch" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio10" custom label="Chinese" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio11" custom label="Spanish" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio12" custom label="Japanese" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio13" custom label="Hungarian" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio14" custom label="Romanian" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio15" custom label="Swedish" className='radio' name="myRadioGroup"/>
                        <FormCheck type="radio" id="radio16" custom label="Russian" className='radio' name="myRadioGroup"/>

                    </View>
                </View>
                <View className="currency-details" >
                    <h5 className='title' >Currency Settings</h5>
                    <h5 className='description' >Select the currency you want to shop with.</h5>
                    <Dropdown>
                            <Dropdown.Toggle variant="third" id="dropdown-basic">
                                $ - USD - US Dollar (Default)
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </View>
            </View>
            <View className="language-btn-group" >
                <Button text="Cancel" className="cancel-btn" />
                <Button text="Save Changes" className="save-btn" />
            </View>
        </View>
    );
}