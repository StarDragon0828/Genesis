import View from '../components/UI/View';
import FooterContent from './footer-content';
import HeaderContent from './header-content';
import './style.scss'




export default function AdminContent(props) {

    const {headerCategory1, headerCategory2, headerCategory3, headerCategory4, headerCategory5, headerCategory6, displayFooterContent, displayHeaderContent} = props;

    return (
        <View className="content-page" >
            {
                displayHeaderContent || displayFooterContent ? '' :<h5 className='title' >You can change the category content.</h5>
            }
            {
                displayHeaderContent && <HeaderContent displayHeaderContent={displayHeaderContent} headerCategory1={headerCategory1} headerCategory2={headerCategory2} headerCategory3={headerCategory3}
                 headerCategory4={headerCategory4} headerCategory5={headerCategory5} headerCategory6={headerCategory6} />
            }
            {
                displayFooterContent && <FooterContent />
            }
        </View>
    );
}