import View from '../components/UI/View';
import SideBar from './side-bar';
import SliderBar from './side-bar';
import './style.scss'



export default function AdminPanel(props) {
    return (
        <View className="admin-panel-page" >
            <SideBar />
        </View>
    );
}