import View from '../../../components/UI/View';
import './style.scss'
import { orderSummeryItem } from './data';
import { FormCheck, Image } from 'react-bootstrap';
import Button from '../../../components/UI/Button';
import { useState } from 'react';



export default function OrderSummery(props) {

    const [counter, setCounter] = useState(0);

    const plusCounter = () => {
        setCounter(counter + 1);
    };

    const minusCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
          }
    };

    const removeCounter = () => {
        setCounter(0);
    }

    let content;

    switch(props.currentPage){
            case 'page3':
            content = <View className="order-summery-details" >
                        <View className="order-header" >
                            <View className="order-number" >3</View>
                            <View className="order-title" >ORDER SUMMERY</View>
                        </View>
                        <View className="summery-details" >
                            {orderSummeryItem.map((item) => (
                                <View className="order-details" >
                                    <Image src={item.image} />
                                    <View>
                                        <p className='title' >{ item.title }</p>
                                        <h5 className="price text-primary">$ { item.price.toFixed(2) } <span className="text-secondary underline">$ {(item.price * .1).toFixed(2)}</span><span className="text-primary">(17% off)</span></h5>
                                        <h5 className='property' >Color: <span>{ item.color }</span></h5>
                                        <h5 className='property' >Size: <span>{ item.size }</span></h5>
                                        <h5 className='property' >Pattern Name: <span>{ item.patternname }</span></h5>
                                    </View>
                                </View>
                            ))}
                            <View>
                                <h5 className='delivery-property' >Delivery in 2 days, Thu| <span className='text-primary' >Free</span></h5>
                                <Button text="Continue" className="btn"  onClick={props.handleClick} />
                            </View>
                        </View>
                        <View className="counter" >
                            <View className="d-flex" >
                                <Button text="-" className="counter-item1" onClick={minusCounter} />
                                <View type='number' className='counter-input' >{counter}</View>
                                <Button text="+" className="counter-item2" onClick={plusCounter} />
                            </View>
                            <View>
                                <Button text="REMOVE" className='remove' onClick={removeCounter} />
                            </View>
                            <FormCheck type="radio" id="radio1" label="Gift" name="myRadioGroup" checked />
                            <FormCheck type="radio" id="radio1" label="General" name="myRadioGroup" />
                        </View>
                    </View>
            break;
            default:
            content = <View className="order-summery" >
                        <View className="number" >3</View>
                        <h5 className='title' >ORDER SUMMERY</h5>
                    </View>;
    }
    
    return <div>{content}</div>;
}