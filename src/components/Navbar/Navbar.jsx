
import Logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import './navbar.css'

const MyNavbar = () => {
    return (
        <div className="myNavBar">
            <div className="container-fluid">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image src={Logo} alt="logo" className="img-fluid" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Jobs</Nav.Link>
                                <Nav.Link href="#link">Recruiment</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button className="hamburger" variant="contained" href="#contained-buttons"><MenuIcon /></Button>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default MyNavbar;
