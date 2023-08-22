import View from '../components/UI/View';
import FooterContent from './footer-content';
import HeaderContent from './header-content';
import './style.scss'




export default function AdminContent(props) {

    const {headerCategory, displayFooterContent, displayHeaderContent} = props;

    return (
        <View className="content-page" >
            {
                displayHeaderContent || displayFooterContent ? '' :<h5 className='title' >You can change the category content.</h5>
            }
            {
                displayHeaderContent && <HeaderContent displayHeaderContent={displayHeaderContent} headerCategory={headerCategory} />
            }
            {
                displayFooterContent && <FooterContent />
            }
        </View>
    );
}