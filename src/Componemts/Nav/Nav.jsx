import React, { useContext } from 'react';
import { Container, NavDropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { UserInfo } from '../UserContext/UserContext';
import { Link } from 'react-router-dom';

const MainNav = () => {

    let {user, logout} = useContext(UserInfo);

    let handelLogout =()=>{
        logout()
    }
    

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto m-auto ">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link>{user && user.email}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark" ><Link to={'/login'}>Login</Link></Button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark" onClick={handelLogout}>LogOut</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default MainNav;