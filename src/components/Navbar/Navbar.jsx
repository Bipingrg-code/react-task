import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './navbar.css'

const MyNavbar = () => {
    return (
        <div className="myNavBar">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link to="/"><Image src={Logo} alt="logo" className="img-fluid" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link to="/" style={{ textDecoration: "none" }}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about" style={{ textDecoration: "none" }}>About</Link></Nav.Link>
                            <Nav.Link><Link to="/jobs" style={{ textDecoration: "none" }}>Jobs</Link></Nav.Link>
                            <Nav.Link><Link to="/recruitment" style={{ textDecoration: "none" }}>Recruitment</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button className="hamburger" variant="contained" href="#contained-buttons"><MenuIcon /></Button>
                </Navbar>
            </div>
        </div>
    );
};

export default MyNavbar;
