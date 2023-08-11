import { Container } from 'react-bootstrap';
import './style.scss';
import PaymentPage from './payment-page';

export default function MyPayment(props) {
    return (
        <Container fluid className='payment-option-page' >
            <PaymentPage />
        </Container>
    );
}