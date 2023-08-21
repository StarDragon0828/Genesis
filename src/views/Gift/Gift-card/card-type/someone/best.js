import { Image} from 'react-bootstrap';
import View from '../../../../../components/UI/View';
import './style.scss'
import {someone} from './data';
import { useRef, useState } from 'react';
import Button from '../../../../../components/UI/Button'
import GiftCardModal from '../modal';
import { Link } from 'react-router-dom';




export default function BestfriendCard(props) {

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
            <h5 className='giftcard-link' ><Link to="/giftcard" className='link-none'>Gift Card Page</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>BestFriend</span></h5>
            <View className="someone-card-main" >
                <View className="someone-header">
                    <h5 className='title' >To Special Someone</h5> 
                    <View className="someone-category" >
                        <Link to="/giftcard/specialsomeone">
                            <Button text="Grandchildren" className="grand-btn" tooltipText="You can buy gift cards for your grandchildren." />
                        </Link>
                        <Link to="/giftcard/specialsomeone/mom" >
                            <Button text="Mom" className="mom-btn" tooltipText="You can buy gift cards for your Mom." />
                        </Link>
                        <Link to="/giftcard/specialsomeone/dad">
                            <Button text="Dad" className="dad-btn" tooltipText="You can buy gift cards for your Dad." />
                        </Link>
                        <Link to="/giftcard/specialsomeone/girlfriend" >
                            <Button text="Girlfriend" className="girlfriend-btn" tooltipText="You can buy gift cards for your Girlfriend." />
                        </Link>
                        <Link to="/giftcard/specialsomeone/bestfriend" >
                            <Button text="Best Friend" className="bestfriend-btn" tooltipText="You can buy gift cards for your Best Friend." />
                        </Link>
                    </View>
                </View>
                <View className="details" >
                    <View className="card-details" >
                        {someone.bestfriend.map((item) => (
                            <View className="card-component">
                                <View className="d-flex align-items-center" >
                                    <View className="image-contain" >
                                        <Image src={item.image}/>
                                        <h5 className='card-tip' >{item.tip}</h5>
                                    </View>
                                    <View className="d-flex" >
                                        <View className="d-flex align-items-center">
                                            <h5 className='card-name' >{item.title}</h5>
                                            <h5 className='card-value' >{item.value}</h5>
                                            <View className="input-contain">
                                                <h5 className="card-value" >$</h5>
                                                <input type="number" className="value-input" />
                                            </View>
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