import { Image} from 'react-bootstrap';
import View from '../../../../../components/UI/View';
import './style.scss'
import {specialDay} from './data';
import { useRef, useState } from 'react';
import Button from '../../../../../components/UI/Button'
import GiftCardModal from '../modal';
import { Link } from 'react-router-dom';




export default function ChristmasDay(props) {

    const [showBuyModal, setShowBuyModal] = useState(false);

    const handleCloseModal = () => {
        setShowBuyModal(false);
    }

    const handleOpenModal = () => {
        setShowBuyModal(true);
    }

    const [showSendModal, setShowSendModal] = useState(false);
    const [showMailModal, setShowMailModal] = useState(false);
    const [selectedGiftCardImage, setSelectedGiftCardImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const fileInputRef = useRef(null);
    const [selectedTip, setSelectedTip] = useState('');

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
        <View className="special-page" >
            <h5 className='giftcard-link' ><Link to="/giftcard" className='link-none'>Gift Card Page</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>Christmas's Day Gift Card</span></h5>
            <View className="special-card-main" >
                <View className="special-header">
                    <h5 className='title' >Special Day Gift Card</h5>
                    <View className="special-category" >
                        <Link to="/giftcard/specialdaycard">
                            <Button text="Valentine's Day" className="valentine-btn" tooltipText="You can buy a Valentine's Day gift card." />
                        </Link>
                        <Link to="/giftcard/specialdaycard/womenday" >
                            <Button text="Women's Day" className="women-btn" tooltipText="You can buy a Women's Day gift card." />
                        </Link>
                        <Link to="/giftcard/specialdaycard/manday">
                            <Button text="Man's day" className="man-btn" tooltipText="You can buy a Man's Day gift card." />
                        </Link>
                        <Link to="/giftcard/specialdaycard/beautifulday" >
                            <Button text="Beautiful Day" className="beautiful-btn" tooltipText="You can buy a Beautiful Day gift card." />
                        </Link>
                        <Link to="/giftcard/specialdaycard/christmasday" >
                            <Button text="A gift for Christmas" className="christmas-btn" tooltipText="You can buy a Christmas Day gift card." />
                        </Link>
                    </View>
                </View> 
                <View className="details" >
                    <View className="card-details" >
                        {specialDay.christmas.map((item) => (
                            <View className="card-component">
                                <View className="d-flex align-items-center" >
                                    <View className="image-contain" >
                                        <Image src={item.image}/>
                                        <h5 className='card-tip' >{ item.tip }</h5>
                                    </View>
                                    <View className="d-flex" >
                                        <View className="d-flex align-items-center">
                                            <h5 className='card-name' >{item.title}</h5>
                                            <h5 className='card-value' >{item.value}</h5>
                                            <View className="input-contain">
                                                <h5 className="card-value" >$</h5>
                                                <input type="number" className="value-input" title="Didn't find the amount of money you want? Please insert your own amount without limit." />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View className="d-flex align-items-center justify-content-between" >
                                    <View className="btn-group">
                                        <Button text="Send" className="send-btn" tooltipText="You can send this gift card to anyone you want." onClick={() => {
                                            setSelectedTip(item.tip);
                                            handleOpenSendModal(item.image);
                                        }} />
                                        <Button text="Mail" className="mail-btn" tooltipText="You can send mail to anyone you want." onClick={handleOpenMailModal} />
                                        <Button text="Buy" className='buy-btn' tooltipText="You can purchase this gift card." onClick={handleOpenModal}  />
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