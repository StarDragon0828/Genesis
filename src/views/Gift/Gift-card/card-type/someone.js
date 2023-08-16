import { Image} from 'react-bootstrap';
import View from '../../../../components/UI/View';
import './style.scss'
import {someone} from './data';
import { useRef, useState } from 'react';
import Button from '../../../../components/UI/Button'
import GiftCardModal from './modal';
import { Link } from 'react-router-dom';




export default function SpecialSomeone(props) {

    const [showBuyModal, setShowBuyModal] = useState(false);
    const [showSendModal, setShowSendModal] = useState(false);
    const [showMailModal, setShowMailModal] = useState(false);
    const [selectedGiftCardImage, setSelectedGiftCardImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const fileInputRef = useRef(null);
    const [selectedTip, setSelectedTip] = useState('');

    const handleCloseModal = () => {
        setShowBuyModal(false);
    }

    const handleOpenModal = () => {
        setShowBuyModal(true);
    }

    const handleOpenSendModal = (image) => {
        setShowSendModal(true);
        setSelectedGiftCardImage(image);
    }

    const handleCloseSendModal = () => {
        setShowSendModal(false);
        setSelectedGiftCardImage('');
        setUploadedImage('');
    }

    const handleOpenMailModal = (image) => {
        setShowMailModal(true);
    }

    const handleCloseMailModal = () => {
        setShowMailModal(false);

    }

    return(
        <View className="someone-page" >
            <h5 className='giftcard-link' ><Link to="/giftcard" className='link-none'>Gift Card Page</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Special Someone Gift Card</span></h5>
            <View className="someone-card-main" >
                <h5 className='title' >To Special Someone<span>(Grandchildren, Mom, Dad, Girlfriend, Best Friend)</span></h5> 
                <View className="details" >
                    <View className="card-details" >
                        {someone.giftCard.map((item) => (
                            <View className="card-component">
                                <View className="d-flex align-items-center" >
                                    <View className="image-contain" >
                                        <Image src={item.image}/>
                                        <h5 className='card-tip' >{item.tip}</h5>
                                    </View>
                                    <View className="d-flex" >
                                        <View className="d-flex align-items-center">
                                            <h5 className='card-name' >{item.title}</h5>
                                            <h5 className='card-value text-primary'>{item.value}</h5>
                                        </View>
                                    </View>
                                </View>
                                <View className="d-flex align-items-center justify-content-between" >
                                    <h5 className='description' >{item.description}</h5>
                                    <View className="btn-group">
                                        <Button text="Send" className="send-btn" onClick={() => {
                                            setSelectedTip(item.tip);
                                            handleOpenSendModal(item.image);
                                        }} />
                                        <Button text="Mail" className="mail-btn" onClick={handleOpenMailModal} />
                                        <Button text="Buy" className='buy-btn' onClick={handleOpenModal}  />
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <GiftCardModal showBuyModal={showBuyModal}  onHide={handleCloseModal} onClick={handleCloseModal}/>
            <GiftCardModal showSendModal={showSendModal} onHide={handleCloseSendModal} onClick={handleCloseSendModal} tip={selectedTip} selectedGiftCardImage={selectedGiftCardImage} fileInputRef={fileInputRef}/>
            <GiftCardModal showMailModal={showMailModal} onHide={handleCloseMailModal} onClick={handleCloseMailModal} setUploadedImage={setUploadedImage} />
        </View>
    );
}