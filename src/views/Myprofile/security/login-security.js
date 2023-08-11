import { Link } from 'react-router-dom';
import View from '../../../components/UI/View';
import Button from '../../../components/UI/Button';
import './style.scss';
import { useState } from 'react';
import SecurityModal from './modal';



export default function LoginSecurity(props) {

    const [showNameModal, setShowNameModal] = useState(false);
    const [showMobileModal, setShowMobileModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const handleOpenNameModal = () => {
        setShowNameModal(true);
    };

    const handleCloseNameModal = () => {
        setShowNameModal(false);
    };

    const handleOpenMobileModal = () => {
        setShowMobileModal(true);
    };

    const handleCloseMobileModal = () => {
        setShowMobileModal(false);
    };

    const handleOpenEmailModal = () => {
        setShowEmailModal(true);
    }

    const handleCloseEmailModal = () => {
        setShowEmailModal(false);
    }

    const handleOpenPasswordModal = () => {
        setShowPasswordModal(true);
    }

    const handleClosePasswordModal = () => {
        setShowPasswordModal(false);
    }

       
    return(
        <View >
            <h5 className='security-link' ><Link to="/myprofile" className='link-none'>My Profile</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Login & Security</span></h5>
            <View className="security-page">
                <h5 className='security-title' >Login & Security</h5>
                <View className="security-mainpage" >
                    <View className="name" >
                        <View>
                            <h5 className='name-title' >Name:</h5>
                            <h5 className='name-description' >Lika</h5>
                        </View>
                        <Button text="Edit" className="edit-button" tooltipText="You can edit it however you like." onClick={handleOpenNameModal} />
                    </View>
                    <View className="phone" >
                        <View>
                            <h5 className='phone-title' >Primary mobile number:</h5>
                            <h5 className='phone-number' >+19357748904</h5>
                            <h5 className="phone-description" >Quickly sign in, easily recover passwords, and receive security notifications with this mobile number.</h5>
                        </View>
                        <Button text="Edit" className="edit-button"  tooltipText="You can edit it however you like." onClick={handleOpenMobileModal} />
                    </View>
                    <View className="email">
                        <View>
                            <h5 className='email-title' >E-mail:</h5>
                            <h5 className="email-description" >For stronger account security, add your email. If there's an unusual sign-in, we can email you and verify that it's really you.</h5>
                        </View>
                        <Button text="Edit" className="edit-button" tooltipText="You can edit it however you like." onClick={handleOpenEmailModal} />
                    </View>
                    <View className="password" >
                        <View>
                            <h5 className='password-title' >Password:</h5>
                            <h5 className="password-description" >***********</h5>
                        </View>
                        <Button text="Edit" className="edit-button" tooltipText="You can edit it however you like." onClick={handleOpenPasswordModal} />
                    </View>
                    <View className="twostep" >
                        <View>
                            <h5 className='twostep-title' >2-step verification:</h5>
                            <h5 className="twostep-description" >Add a layer of security. Require a verification code in addition to your password.</h5>
                        </View>
                        <Button text="Turn On" className="edit-button" tooltipText="You can edit it however you like." />
                    </View>
                </View>
            </View>
            <SecurityModal showNameModal={showNameModal} onHide={handleCloseNameModal} onClick={handleCloseNameModal} />
            <SecurityModal showMobileModal={showMobileModal} onHide={handleCloseMobileModal} onClick={handleCloseMobileModal}/>
            <SecurityModal showEmailModal={showEmailModal} onHide={handleCloseEmailModal} onClick={handleCloseEmailModal}/>
            <SecurityModal showPasswordModal={showPasswordModal} onHide={handleClosePasswordModal} onClick={handleClosePasswordModal}/>
        </View>
    );
}