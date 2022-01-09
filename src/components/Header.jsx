import {Navbar,Container,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const Header = ()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect >
            <Container>
                {/* <LinkContainer to='/'> */}
                <Navbar.Brand >React Assignment</Navbar.Brand>
                {/* </LinkContainer> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/question1/todo'>
                        <Nav.Link >Q1 (To Do App)</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/question2/users">
                        <Nav.Link >Q2 (Fetch Users)</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;