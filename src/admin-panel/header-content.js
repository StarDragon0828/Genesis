import { useState } from 'react';
import View from '../components/UI/View';
import './style.scss'



export default function HeaderContent(props) {
    
    const {headerCategory1, headerCategory2, headerCategory3, headerCategory4, headerCategory5, headerCategory6} =props;

    const [categoryType1, setCategoryType1] = useState(false);
    const [categoryType2, setCategoryType2] = useState(false);
    const [categoryType3, setCategoryType3] = useState(false);
    const [categoryType4, setCategoryType4] = useState(false);
    const [categoryType5, setCategoryType5] = useState(false);
    const [categoryType6, setCategoryType6] = useState(false);
    const [categoryType7, setCategoryType7] = useState(false);
    const [categoryType8, setCategoryType8] = useState(false);
    const [categoryType9, setCategoryType9] = useState(false);
    const [categoryType10, setCategoryType10] = useState(false);

    const handleCategoryType1 = () => {
        setCategoryType1(true);
    }
    const handleCategoryType2 = () => {
        setCategoryType2(true);
    }
    const handleCategoryType3 = () => {
        setCategoryType3(true);
    }
    const handleCategoryType4 = () => {
        setCategoryType4(true);
    }
    const handleCategoryType5 = () => {
        setCategoryType5(true);
    }
    const handleCategoryType6 = () => {
        setCategoryType6(true);
    }
    const handleCategoryType7 = () => {
        setCategoryType7(true);
    }
    const handleCategoryType8 = () => {
        setCategoryType8(true);
    }
    const handleCategoryType9 = () => {
        setCategoryType9(true);
    }
    const handleCategoryType10 = () => {
        setCategoryType10(true);
    }


    return (
        <View>
            {
                headerCategory1 ? <View className="header-content" >
                <View onClick={handleCategoryType1} >
                    <h5 className='category1-title' >Home and Living</h5>
                </View>
                <View onClick={handleCategoryType2} >
                    <h5 className='category1-title' >Health and Wellness</h5>
                </View>
                <View onClick={handleCategoryType3} >
                    <h5 className='category1-title'>Food and Drink</h5>
                </View>
                <View onClick={handleCategoryType4} >
                    <h5 className='category1-title'>Electronics and Appliances</h5>
                </View>
                <View onClick={handleCategoryType5} >
                    <h5 className='category1-title'>Fashion and Personal Care</h5>
                </View>
                <View onClick={handleCategoryType6} >
                    <h5 className='category1-title'>Sports and Outdoors</h5>
                </View>
                <View onClick={handleCategoryType7} >
                    <h5 className='category1-title'>Entertainment and Leisure</h5>
                </View>
                <View onClick={handleCategoryType8} >
                    <h5 className='category1-title'>Services</h5>
                </View>
                <View onClick={handleCategoryType9} >
                    <h5 className='category1-title'>Industrial and Commercial</h5>
                </View>
                <View onClick={handleCategoryType10} >
                    <h5 className='category1-title'>Travel and Transportation</h5>
                </View>
            </View> : ''
            }
            {
                headerCategory2 ? <h5>2</h5> : ''
            }
            {
                headerCategory3 ? <h5>3</h5> : ''
            }
            {
                headerCategory4 ? <h5>4</h5> : ''
            }
            {
                headerCategory5 ? <h5>5</h5> :''
            }
            {
                headerCategory6 ? <h5>6</h5> : ''
            }
        </View>
    );
}