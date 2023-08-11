import { Container } from 'react-bootstrap';
import './style.scss'
import Profile from './details';

export default function MyProfile(props) {
    return (
        <Container fluid >
            <Profile />
        </Container>
    );
}