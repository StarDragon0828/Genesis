import { Image, OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import View from "../../../components/UI/View";
import { useState } from "react";
import { wishlistItems as _wishlistItems } from "./data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";


export const Items = (props) => {
  
    const { item } = props;
    const tooltip = <Tooltip className="custom-tooltip">Move to trash.</Tooltip>;

  
    return <View className="wishlist-item-page" >
        <View className="wishlist-component">
            <View className="wishlist-component-panel">
                <Image src={item.image} />
                <View>
                    <h6 className="description"> { item.description } </h6>
                    <Stack direction="horizontal" className="rating">
                        <View className="d-flex align-items-center justify-content-between">
                            <View className="bg-primary rating-button">
                                <span className="rating-number">4.7</span>
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffffff"}} />
                            </View>
                            <span className="ranking">(7089)</span>
                        </View>            
                    </Stack>
                    <h5 className="price text-primary">$ { item.price.toFixed(2) } <span className="text-secondary">$ {(item.price * .1).toFixed(2)}</span><span className="text-secondary">(17% off)</span></h5>
                </View>
            </View>
            <View className="trash-icon">
                <OverlayTrigger placement="top" overlay={tooltip} delay={{ show: 200, hide: 300 }}>
                    <FontAwesomeIcon icon={faTrash} style={{color:'#A1A1A1'}} />
                </OverlayTrigger>
            </View>
        </View>
    </View>
  }
    
export default function WishListPanel(props) {

  const [items, setItems] = useState(_wishlistItems)

  return <View className="wishlist-panel">
    {
      items.map((item, idx) => <Items key={`items-${idx}`} item={item} />)
    }
  </View>
}