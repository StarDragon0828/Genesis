import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import View from '../components/UI/View';
import './style.scss'
import { faPen, faUsers } from '@fortawesome/free-solid-svg-icons';
import MyUsers from './users';
import { useState } from 'react';
import AdminContent from './content';
import { Collapse } from 'react-bootstrap';




export default function SideBar(props) {
    const [displayUsers, setDisplayUsers] = useState(false);
    const [displayContents, setDisplayContents] = useState(false);
    const [open, setOpen] = useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);
    const [displayHeaderContent, setDisplayHeaderContent] = useState(false);
    const [displayFooterContent, setDisplayFooterContent] = useState(false);
    const [headerCategory1, setHeaderCategory1] = useState(false);
    const [headerCategory2, setHeaderCategory2] = useState(false);
    const [headerCategory3, setHeaderCategory3] = useState(false);
    const [headerCategory4, setHeaderCategory4] = useState(false);
    const [headerCategory5, setHeaderCategory5] = useState(false);
    const [headerCategory6, setHeaderCategory6] = useState(false);

    const handleUserManagementClick = () => {
        setDisplayUsers(true);
        setDisplayContents(false);
    };

    const handleContentManagementClick = () => {
        setDisplayUsers(false);
        setDisplayContents(true);
        setDisplayFooterContent(false);
        setDisplayHeaderContent(false);
        setOpen(!open)
    }

    const handleHeaderContent = () => {
        setDisplayHeaderContent(true);
        setDisplayFooterContent(false);
        setHeaderOpen(!headerOpen);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
    }

    const handleFooterContent = () => {
        setDisplayFooterContent(true);
        setDisplayHeaderContent(false);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
    }

    const handleCategory1 = () => {
        setHeaderCategory1(true);
        setDisplayFooterContent(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
    }

    const handleCategory2 = () => {
        setHeaderCategory2(true);
        setHeaderCategory1(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
        
    }

    const handleCategory3 = () => {
        setHeaderCategory3(true);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
    }

    const handleCategory4 = () => {
        setHeaderCategory4(true);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory5(false);
        setHeaderCategory6(false);
    }

    const handleCategory5 = () => {
        setHeaderCategory5(true);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory6(false);
    }

    const handleCategory6 = () => {
        setHeaderCategory6(true);
        setHeaderCategory1(false);
        setHeaderCategory2(false);
        setHeaderCategory3(false);
        setHeaderCategory4(false);
        setHeaderCategory5(false);
    }

    return (
        <View className="admin-panel" >
            <View className="side-bar" >
                <h5 className='title'>Admin Panel</h5>
                <View className="user-management" onClick={handleUserManagementClick} >
                    <View className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faUsers} className='icon' />
                        <h5 className='user-title' >User Management</h5>
                    </View>
                </View>
                <View className="content-management" onClick={handleContentManagementClick} >
                    <View className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faPen} className='icon' />
                        <h5 className='user-title' >Content Management</h5>
                    </View>
                </View>
                <Collapse in={open}>
                    <View className="content-titles" >
                        <View onClick={handleHeaderContent}>
                            <h5 className='header-content' >-Header Content</h5>
                        </View>
                        <Collapse in={headerOpen}>
                            <View className="content-titles" >
                                <View onClick={handleCategory1}>
                                    <h5 className='header-content' >Product Categories</h5>
                                </View>
                                <View onClick={handleCategory2}>
                                    <h5 className='footer-content' >Travel & Outdoors</h5>
                                </View>
                                <View onClick={handleCategory3}>
                                    <h5 className='header-content' >Tickets & Reservations</h5>
                                </View>
                                <View onClick={handleCategory4}>
                                    <h5 className='footer-content' >Food & Beverage</h5>
                                </View>
                                <View onClick={handleCategory5}>
                                    <h5 className='header-content' >Servicies</h5>
                                </View>
                                <View onClick={handleCategory6}>
                                    <h5 className='footer-content' >Technology & Innovation</h5>
                                </View>
                            </View>
                        </Collapse>
                        <View onClick={handleFooterContent}>
                            <h5 className='footer-content' >-Footer Content</h5>
                        </View>
                    </View>
                </Collapse>
            </View>
            <View className="section" >
                {
                    displayUsers || displayContents ? '' : <h5 className='welcome-title' >Hi David Blanco!</h5>
                }
                
                {displayUsers && <MyUsers />}
                {displayContents && 
                    <AdminContent headerCategory1={headerCategory1} headerCategory2={headerCategory2} headerCategory3={headerCategory3} headerCategory4={headerCategory4} 
                    headerCategory5={headerCategory5} headerCategory6={headerCategory6} displayHeaderContent={displayHeaderContent} displayFooterContent={displayFooterContent}/>
                }
            </View>
        </View>
    );
}