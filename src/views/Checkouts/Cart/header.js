import { Stack } from "react-bootstrap";
import View from "../../../components/UI/View";
import { useState } from "react";
import './style.scss'


export default function CartHeader (props) {

    const itemscategories = ["Saved for later (5 items)", "Buy it again"]
    const [itemcategory, setItemCategory] = useState("Saved for later (5 items)")


    return (
        <Stack className="your-items-header">
    <h3 className="items-text">Your Items</h3>
    <Stack direction="horizontal" className="youritems">
      {
        itemscategories.map((_itemcategory, idx) => <View onClick={() => setItemCategory(_itemcategory)} key={`youritem-${idx}`} className={`youritem ${itemcategory===_itemcategory?"active text-primary":""}`}> { _itemcategory } </View>)
      }
    </Stack>
  </Stack>
    );
}