import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import './style.scss';
import { Dropdown, Form, FormGroup, Image } from 'react-bootstrap';
import Button from '../../../components/UI/Button';
import {paymentImage} from './data'

export default function AddPayment(props) {
    return (
        <View class="position-relative">
            <h5 className='add-payment-link' >
                    <Link to="/myprofile" className='link-none'>My Profile</Link> 
                    <span className='ms-2'>&gt;</span><span className='ms-2'>Edit Payment</span>
                    <span className='ms-2'>&gt;</span><span className='text-primary ms-2' >Add Payment</span>
            </h5>
            <View className="add-payment-page" >
                <View className="add-payment-main-page" >
                    <h4 className='add-payment-main-title' >Your saved bank accounts</h4>
                    <Form>
                        <FormGroup className='d-flex align-items-center justify-content-center' >
                            <Form.Label className='form-label' >Do you know IFSC:</Form.Label>
                            <View className='check-radio' >
                                <Form.Check type="radio" id="radio1" custom label="Yes" className='me-4' name="myRadioGroup" />
                                <Form.Check type="radio" id="radio2" custom label="No" name="myRadioGroup" />
                            </View>
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center' >
                            <Form.Label className='form-label' >Enter Bank Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Bank Name" className='form-input' />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Enter City Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter City Name" className='form-input'  />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Branch Name:</Form.Label>
                            <Dropdown style={{width:'40%'}}>
                                <Dropdown.Toggle variant="third" id="dropdown-basic">
                                    Houston
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >IFSC Code:</Form.Label>
                            <View className="IFSC-code" >BOA092883</View>
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Enter Account Holder's Name :</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account Holder's Name" className='form-input'  />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Enter Bank Account Number:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Bank Account Number" className='form-input'  />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Confirm Bank Account Number:</Form.Label>
                            <Form.Control type="text" placeholder="Confirm Bank Account Number" className='form-input'  />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center justify-content-center mt-4' >
                            <Form.Label className='form-label' >Account Type:</Form.Label>
                            <Dropdown style={{width:'40%'}}>
                                <Dropdown.Toggle variant="third" id="dropdown-basic">
                                    Select Account Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </FormGroup>
                        <View className="d-flex align-items-center justify-content-center mt-4" >
                            <Button text="Save & Add Bank" className="save-bank-btn" />
                        </View>
                    </Form>
                </View>
            </View>
            <View className="payment-image" >
                {paymentImage.map((item) => (
                    <Image src={item.image} />
                ))}
            </View>
        </View>
    );
}