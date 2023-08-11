import { Container } from 'react-bootstrap';
import './style.scss';
import LoginSecurity from './login-security';



export default function Security(props) {
    return (
        <Container fluid >
            <LoginSecurity />
        </Container>
    );
}