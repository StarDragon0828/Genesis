import { Link } from 'react-router-dom';
import View from '../../../../components/UI/View';
import './style.scss';
import { FormGroup, FormLabel, Form, Image, Modal } from 'react-bootstrap';
import { GiftCard } from './data';
import Button from '../../../../components/UI/Button'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';



export default function ManageGiftCard(props) {

    const [showSendModal, setShowSendModal] = useState(false);
    const [showMailModal, setShowMailModal] = useState(false);
    const [selectedGiftCardImage, setSelectedGiftCardImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleOpenModal = (image) => {
        setShowSendModal(true);
        setSelectedGiftCardImage(image);
    }

    const handleCloseModal = () => {
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

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
    };

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
                                <View className="button-group" >
                                    <Button text="Mail" className="mail-btn" onClick={handleOpenMailModal} />
                                    <Button text="Send" className="send-btn" onClick={() => handleOpenModal(item.image)} />
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
                    <View className="d-flex align-items-center justify-content-around" >
                        <View className="image-container">
                            <Image src={selectedGiftCardImage} />
                            <Image src={uploadedImage} className={`upload-image ${uploadedImage ? 'uploaded' : ''}`} />
                            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                            <View className="upload-icon" onClick={handleButtonClick}>
                                <FontAwesomeIcon icon={faUpload} className='icon' style={{color: "#c0c7d3",}} />
                            </View>
                        </View>
                        <View className="d-flex align-items-center justify-content-around w-100">
                            <View>
                                <h5 className='title'>Name</h5>
                                <input placeholder='Enter Name' />
                                <h5 className='title'>Email</h5>
                                <input placeholder='Enter Email' />
                                <h5>Phone Number</h5>
                                <input placeholder='Enter Phone number' />
                            </View>
                            <View>
                                <h5>City</h5>
                                <input placeholder='Enter City' />
                                <h5>Country</h5>
                                <input placeholder='Enter Country' />
                            </View>
                        </View>
                    </View>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="OK" className="gift-btn" onClick={handleCloseModal} />
                </Modal.Footer>
            </Modal>
            <Modal show={showMailModal} onHide={handleCloseMailModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='gift-title' >There he receives a Mail</Modal.Title>
                </Modal.Header>
                <Modal.Body className='gift-body'>
                    <View className="d-flex align-items-center justify-content-around" >
                        <View className="d-flex align-items-center justify-content-around w-100">
                            <View>
                                <h5 className='title'>Name</h5>
                                <input placeholder='Enter Name' />
                                <h5 className='title'>Email</h5>
                                <input placeholder='Enter Email' />
                            </View>
                            <View>
                                <FormGroup>
                                    <FormLabel>Message</FormLabel>
                                    <Form.Control as="textarea" rows="3" name="address" />
                                </FormGroup>
                            </View>
                        </View>
                    </View>
                </Modal.Body>
                <Modal.Footer>
                    <Button text="OK" className="gift-btn" onClick={handleCloseMailModal} />
                </Modal.Footer>
            </Modal>
        </View>
    );
}