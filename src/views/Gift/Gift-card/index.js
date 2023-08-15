import View from '../../../components/UI/View';
import CardProfile from './card-account';
import './style.scss';

export default function GiftCard(props) {
    return (
        <View className="giftcard-mainpage" >
            <CardProfile />
        </View>
    );
}