import { Link } from 'react-router-dom';
import View from '../../../../components/UI/View';
import './style.scss';
import { Image, Modal } from 'react-bootstrap';
import { GiftCard } from './data';
import Button from '../../../../components/UI/Button'
import { useState } from 'react';



export default function ManageGiftCard(props) {

    const [showSendModal, setShowSendModal] = useState(false)
    const handleOpenModal = () => {
        setShowSendModal(true)
    }

    const handleCloseModal = () => {
        setShowSendModal(false)
    }

    return(
        <View>
            <h5 className='giftcard-link' ><Link to="/giftcard" className='link-none'>Gift Card Page</Link> <span className='ms-2'>&gt;</span><span className='text-primary ms-2'>My GiftCard</span></h5>
            <View className="manage-page" >
                <h5 className='title' >My GiftCard</h5>
                <View className="main-page" >
                    {GiftCard.myGiftCard.map((item) => (
                        <View className="giftcard-component" >
                            <Image src={item.image} />
                            <View className="details">
                                <View>
                                    <h5 className='card-title' >{ item.title }</h5>
                                    <h5 className='card-value text-primary' >{ item.value }</h5>
                                    <h5 className='card-description' >{ item.description }</h5>
                                </View>
                                <View>
                                    <Button text="Send" className="send-btn" onClick={handleOpenModal} />
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            <Modal show={showSendModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='gift-title' >There he receives a gift</Modal.Title>
                </Modal.Header>
                <Modal.Body className='gift-body'>
                    <View className="d-flex align-items-center justify-content-around">
                        <View>
                            <h5 className='title'>Email</h5>
                            <input placeholder='Enter Email' />
                            <h5>Phone Number</h5>
                            <input placeholder='Enter Phone number' />
                        </View>
                        <View>
                            <h5>Country</h5>
                            <input placeholder='Enter Country' />
                            <h5>City</h5>
                            <input placeholder='Enter City' />
                        </View>
                    </View>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="OK" className="gift-btn" onClick={handleCloseModal} />
                </Modal.Footer>
            </Modal>
        </View>
    );
}