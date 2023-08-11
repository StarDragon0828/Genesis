import { Container } from 'react-bootstrap';
import './style.scss';
import ManageAddresses from './manage';

export default function MyAddresses(props) {
    return (
        <Container fluid>
            <ManageAddresses />
        </Container>
    );
}