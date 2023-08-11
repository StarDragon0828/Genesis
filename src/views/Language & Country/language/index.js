import { Container } from 'react-bootstrap';
import './style.scss';
import LanguagePage from './language-page';


export default function LanguageSetting(props) {
    return (
        <Container fluid className='language-setting' >
            <LanguagePage />
        </Container>
    );
}