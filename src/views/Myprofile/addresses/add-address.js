import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import AddressesPanel from './addresses';
import './style.scss';
import { Dropdown, Form, FormGroup } from 'react-bootstrap';
import Button from '../../../components/UI/Button';



export default function AddAddress(props) {
    return (
        <View>
            <h5 className='add-addresses-link' ><Link to="/myprofile" className='link-none'>My Profile</Link> <span className='ms-2'>&gt;</span><Link to="/myprofile/myaddresses" className='link-none' ><span className='ms-2'>Manage Addresses</span></Link><span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Add Addresses</span></h5>
            <View className="add-addresses" >
                <View className="add-main-page" >
                    <View>
                        <h3 className='add-addresses-title' >Manage Addresses</h3>
                    </View>
                    <View>
                        <View className="add-addresses-add" >
                            <h5 className='add-title text-primary' >Add a new Address</h5>
                            <Form>
                                <FormGroup className='d-flex align-items-center justify-content-around mb-3' >
                                    <Dropdown className='dropdown' >
                                        <Dropdown.Toggle variant="third" id="dropdown-basic" className='drodown-btn' >
                                            Country/Region
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu >
                                            <Dropdown.Item href="">1</Dropdown.Item>
                                            <Dropdown.Item href="">2</Dropdown.Item>
                                            <Dropdown.Item href="">3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button text="Use my current location" className="location-btn" />
                                    {/* <FontAwesomeIcon icon={faLocationCrosshairs} /> */}
                                </FormGroup>
                                <FormGroup className='d-flex align-items-center justify-content-around mb-3' >
                                    <Form.Control type="text" placeholder="Name" className='form-input' />
                                    <Form.Control type="text" placeholder="10-digit mobile number" className='form-input' />
                                </FormGroup>
                                <FormGroup className='d-flex align-items-center justify-content-around mb-3' >
                                    <Form.Control type="text" placeholder="Pincode" className='form-input' />
                                    <Form.Control type="text" placeholder="Locality" className='form-input' />
                                </FormGroup>
                                <FormGroup className='d-flex align-items-center justify-content-center mb-3' >
                                    <Form.Control as="textarea" rows={3} placeholder="Address (Area and Street)" className='form-input-address' />
                                </FormGroup>
                                <FormGroup className='d-flex align-items-center justify-content-around mb-3' >
                                    <Form.Control type="text" placeholder="City/District/Town" className='form-input' />
                                    <Dropdown className='dropdown' >
                                        <Dropdown.Toggle variant="third" id="dropdown-basic" className='drodown-btn' >
                                            Select State
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="">1</Dropdown.Item>
                                            <Dropdown.Item href="">2</Dropdown.Item>
                                            <Dropdown.Item href="">3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </FormGroup>
                                <FormGroup className='d-flex align-items-center justify-content-around mb-3' >
                                    <Form.Control type="text" placeholder="Landmark (Optional)" className='form-input' />
                                    <Form.Control type="text" placeholder="Alternative Phone (Optional)" className='form-input' />
                                </FormGroup>
                                <View className="d-flex align-items-center justify-content-center mt-4" >
                                    <Button text="Save Address" className="save-btn" />
                                </View>
                            </Form>
                        </View>
                        <AddressesPanel />
                    </View>
                </View>
            </View>
        </View>
    );
}