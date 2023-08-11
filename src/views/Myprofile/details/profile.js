import { Stack, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import View from "../../../components/UI/View";
import { useState } from "react";
import { profiledetails as _profiledetails } from './data'
import { Link } from "react-router-dom";

export default function Profiledetail(props) {
    const [profiledetails, setprofiledetails] = useState(_profiledetails)

    return <View className="prodetails-panel">
        {
            profiledetails.map((recentitem, idx) => {
                return (
                    <RecentItem key={`profiledetails-${idx}`} profiledetail={recentitem} />
                )
            })
        }
    </View>
}

export const RecentItem = (props) => {
    const { profiledetail } = props;
    const tooltip = <Tooltip className="custom-tooltip">This is the { profiledetail.title }.</Tooltip>;

    return <View className="prodetails-component" >
        <OverlayTrigger placement="auto" overlay={tooltip} delay={{ show: 200, hide: 300 }}>
            <Link to={profiledetail.link} className="prodetails-link">
                <Stack direction="horizontal">
                    <Image src={profiledetail.image} />
                    <View className="prodetails-details">
                        <h6 className="prodetails-details-title" >{ profiledetail.title }</h6>
                        <h6 className="prodetails-details-description" >{profiledetail.description}</h6>
                    </View>
                </Stack>
            </Link>      
        </OverlayTrigger>
    </View>
}