import View from "../../../components/UI/View";
import RecentPanel from "./recent-panel";
import './style.scss'

export default function Recent(props) {
    return (
        <View className="recent-history">
            <h3 className="recent-title" >Customers who bought items in your Recent History also bought</h3>
            <RecentPanel />
        </View>
    );
}