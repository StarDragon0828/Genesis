import { useState } from 'react';
import View from '../components/UI/View';
import './style.scss'



export default function HeaderContent(props) {
    
    const {headerCategory} =props;

    const items = ['Home and Living', 'Health and Wellness', 'Food and Drink', 'Electronics and Appliances', 
    'Fashion and Personal Care', 'Sports and Outdoors', 'Entertainment and Leisure', 'Services', 'Industrial and Commercial', 'Travel and Transportation',]

    const [categoryType, setCategoryType] = useState(false);

    const handleCategoryType = () => {
        setCategoryType(true);
    }


    return (
        <View>
            {
                headerCategory === 'Product Categories' ? <View className="header-content" >
                    {items.map((item, index) => (
                        <View  key={index} onClick={() => handleCategoryType(item)}>
                            <h5 className='category1-title' >{item}</h5>
                        </View>
                    ))}
            </View> : ''
            }
            {
                headerCategory === 'Travel & Outdoors' ? <h5>2</h5> : ''
            }
            {
                headerCategory === 'Tickets & Reservations' ? <h5>3</h5> : ''
            }
            {
                headerCategory === 'Food & Beverage' ? <h5>4</h5> : ''
            }
            {
                headerCategory === 'Servicies' ? <h5>5</h5> :''
            }
            {
                headerCategory === 'Technology & Innovation' ? <h5>6</h5> : ''
            }
        </View>
    );
}