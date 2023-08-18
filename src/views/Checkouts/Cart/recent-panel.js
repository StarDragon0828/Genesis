import { Stack, Image } from "react-bootstrap";
import View from "../../../components/UI/View";
import { Rating } from "react-simple-star-rating";
import Button from "../../../components/UI/Button";
import { useState } from "react";
import { recentItems as _recentItems } from './data'
import './style.scss'


export default function RecentPanel(props) {
    const [recentitems, setRecentitems] = useState(_recentItems)

    return <View className="recent-panel">
        {
            recentitems.map((recentitem, idx) => {
                return (
                    <RecentItem key={`recentitems-${idx}`} recentItem={recentitem} />
                )
            })
        }
    </View>
}

export const RecentItem = (props) => {
    const { recentItem } = props;
    console.log(recentItem);

    return <View className="recent-component" >
        <Stack direction="horizontal" className="justify-content-center align-items-center">
            <Image src={recentItem.image} />
            <View className="recent-details">
                <h6 className="recent-details-title" >{recentItem.description}</h6>
                <Stack direction="horizontal" className="rating">
                    <Rating initialValue={4} size={13} />
                </Stack>
                <h5 className="details-price text-primary" >${recentItem.price.toFixed(2)}</h5>
                <Button className="add-to-cart" tooltipText="You can add this item to your cart." text="Add to Cart" />
            </View>
        </Stack>
    </View>
}