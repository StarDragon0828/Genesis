import View from '../../../components/UI/View';
import './style.scss';
import Button from '../../../components/UI/Button';
import { Dropdown, Modal } from 'react-bootstrap';


export default function SecurityModal(props) {
    const { showNameModal, showMobileModal, showEmailModal, showPasswordModal, onHide, onClick } = props;
    return(
        <View>
            <View>
                <Modal show={showNameModal} onHide={onHide} centered >
                    <Modal.Header closeButton>
                    <Modal.Title className='name-title' >Change Your Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='name-body'>
                        <p>If you want to change the name associated with your Genesis customer account, you may do so below. Be sure to click the Save Changes button when you are done.</p>
                        <h5>New Name</h5>
                        <input placeholder='Enter New Name' />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button text="Save Changes" variant="primary" className="name-btn" onClick={onClick} />
                    </Modal.Footer>
                </Modal>
            </View>
            <View>
                <Modal show={showMobileModal} onHide={onHide} centered >
                    <Modal.Header closeButton>
                    <Modal.Title className='mobile-title' >Change Mobile Number</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mobile-body'>
                        <p className='body-title' >Old mobile number:</p>
                        <p>US +1 3463897485</p>
                        <h5>Mobile number:</h5>
                        <View className="d-flex mb-3" >
                            <Dropdown>
                                <Dropdown.Toggle variant="third" id="dropdown-basic">
                                    US +1
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="">1</Dropdown.Item>
                                    <Dropdown.Item href="">2</Dropdown.Item>
                                    <Dropdown.Item href="">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <input placeholder='Enter New Number' className='ms-2' />
                        </View>
                        <p>By enrolling a mobile phone number, you consent to receive automated security notifications via text message from Genesis. Remove your number in Login & Security to cancel. For more information reply HELP. Message and data rates may apply. Message frequency varies.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button text="Continue" variant="primary" className="mobile-btn" onClick={onClick} />
                    </Modal.Footer>
                </Modal>
            </View>
            <View>
                <Modal show={showEmailModal} onHide={onHide} centered >
                        <Modal.Header closeButton>
                            <Modal.Title className='email-title' >Add an email address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='email-body'>
                            <p>Enter the new email address you would like to associate with your account below. We will send a One Time Password (OTP) to that address.</p>
                            <h5>New email address</h5>
                            <input placeholder='Enter New Email' />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button text="Continue" variant="primary" className="email-btn" onClick={onClick} />
                        </Modal.Footer>
                </Modal>
            </View>
            <View>
                <Modal show={showPasswordModal} onHide={onHide} centered >
                    <Modal.Header closeButton>
                        <Modal.Title className='password-title' >Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='password-body'>
                        <p>Use the form below to change the password for your Genesis account</p>
                        <h5>Current password:</h5>
                        <input placeholder='Enter Current Password' />
                        <h5>New password:</h5>
                        <input placeholder='Enter New Password' />
                        <h5>Re-enter New Password:</h5>
                        <input placeholder='Re-enter New Password' />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button text="Continue" variant="primary" className="password-btn" onClick={onClick} />
                    </Modal.Footer>
                </Modal>
            </View>
        </View>
    );
}