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
    const [headerCategory, setHeaderCategory] = useState(false);

    const items = ['Product Categories', 'Travel & Outdoors', 'Tickets & Reservations', 'Food & Beverage', 'Servicies', 'Technology & Innovation'];

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
    }

    const handleFooterContent = () => {
        setDisplayFooterContent(true);
        setDisplayHeaderContent(false);
    }

    const handleCategory = (item) => {
        setHeaderCategory(item);
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
                                {items.map((item, index) => (
                                    <View  key={index} onClick={() => handleCategory(item)}>
                                        <h5 className='header-content' >{item}</h5>
                                    </View>
                                ))}
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
                    <AdminContent headerCategory={headerCategory} displayHeaderContent={displayHeaderContent} displayFooterContent={displayFooterContent}/>
                }
            </View>
        </View>
    );
}