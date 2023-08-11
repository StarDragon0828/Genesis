import { Container } from 'react-bootstrap';
import './style.scss'
import Orders from './manage';


export default function MyOrders(props) {
    return (
        <Container fluid >
            <Orders />
        </Container>
    );
}