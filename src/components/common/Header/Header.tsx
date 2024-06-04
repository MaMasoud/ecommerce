import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';

import { HeaderBasket } from '../../eCommerce';

import styles from './styles.module.css';
const {headerContainer, headerLogo} = styles;



export default function Header() {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>our</span> <Badge bg='info'>Ecom</Badge>
                </h1>

                <HeaderBasket />
            </div>
            <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Categories</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Nav.Link href="#link">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
