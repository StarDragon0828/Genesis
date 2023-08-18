import { Image} from 'react-bootstrap';
import View from '../../../components/UI/View';
import Button from '../../../components/UI/Button'
import './style.scss';
import { Link } from 'react-router-dom';
import GiftImage from '../../../assets/images/gift-card/gift.png';
import GiftCardImage from '../../../assets/images/gift-card/giftcard.png';
import AccountImage from '../../../assets/images/gift-card/account.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MyImage from '../../../assets/images/gift-card/giftcard.png'
import { giftcardImageBar } from './data'


export default function CardProfile(props) {

    const userName = localStorage.getItem("auth-name");


    return (
        <View>
            <View className="gift-card-content">
                <h5>Dear Mr. {userName}.<br/>
                    This is the time on such a special day that you love a giftcard, special learning and want to give him the gift with your wish him only good things with Gnsiss, just please choose only the best for your loved one.
                </h5>
            </View>
            <View className="gift-card-scroll-bar">
                <View className="image-container">
                    {giftcardImageBar.map((item, index) => (
                        <Image key={index} src={item.image} />
                    ))}
                </View>
            </View>
            <View className="gift-card-page">
                <View >
                    <h5 className='title' >Gift Card</h5>
                </View>
                <View className="gift-card-details" >
                    <View className="gift-component" >
                        <Link to='/products' >
                            <Image src={GiftImage} />
                            <View>
                                <h5 className='gift-title' >Send Gift</h5>
                            </View>
                        </Link>
                    </View>
                    <View className="giftcard-component" >
                        <Link to='/giftcard/mygiftcard'>
                            <Image src={GiftCardImage} />
                            <View>
                                <h5 className='card-title' >Manage GiftCard</h5>
                            </View>
                        </Link>
                    </View>
                    <View className="account-component" >
                        <Link to='/myprofile'>
                            <Image src={AccountImage} />
                            <View>
                                <h5 className='card-title' >Account</h5>
                            </View>
                        </Link>
                    </View>
                </View>
            </View>
            <View className="gift-card-main" >
                <View className="card-category" >
                    <Link to="/giftcard/birthdaycard" >
                        <Button text="Birthday" className="birthday-btn" />
                    </Link>
                    <Link to="/giftcard/specialdaycard" >
                        <Button text="Special Day" className="special-btn" />
                    </Link>
                    <Link to="/giftcard/specialsomeone">
                        <Button text="To Someone Special" className="someone-btn" />
                    </Link>
                    <Link to="/giftcard/wedding" >
                        <Button text="Wedding" className="wedding-btn" />
                    </Link>
                    <Link to="/giftcard/newbaby" >
                        <Button text="New baby" className="baby-btn" />
                    </Link>
                </View>
                <h5 className='title' >Gift Card</h5> 
                <View className="details" >
                    <View className="do-details" >
                        <h5 className="title" >You can...</h5>
                        <View className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCheck} />
                            <h5 className="do-list">Add Your Photo</h5>
                        </View>
                        <View className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCheck} />
                            <h5 className="do-list">Send Text</h5>
                        </View>
                        <View className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCheck} />
                            <h5 className="do-list">Send a gift card to anyone you want</h5>
                        </View>
                    </View>
                    <View>
                        <Image src={MyImage} />
                    </View>
                </View>
            </View>
        </View>
    );
}