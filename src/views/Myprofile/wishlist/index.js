import { Container } from 'react-bootstrap';
import './style.scss';
import WishListPage from './wishlist-page';



export default function WishList(props) {
    return (
        <Container fluid>
            <WishListPage />
        </Container>
    );
}