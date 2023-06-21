import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo.png'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="container-fulid">
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Jobs</Nav.Link>
                                <Nav.Link href="#link">Recruiment</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                        <Button variant="contained" href="#contained-buttons"><MenuIcon /></Button>
                    </Container>
                </Navbar>
                <div className="hero-section d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-text">
                        <div className="title text-center">
                            <h1>Unlucking Oppertunites,<br />
                                Empowering Careers.</h1>
                        </div>
                        <div className="discription mt-4 mb-4 d-flex flex-column justify-content-center align-items-center">
                            <p className='text-center'>Your trused Partner in connecting skilled professionals with rewarding<br />
                                career opportunities across <span>Poland</span></p>
                        </div>
                    </div>
                    <div className="hero-btn d-flex gap-4 ">
                        <Button variant="contained" size="large">Search Jobs</Button>
                        <Button variant="outlined" size="large" className='contact-us'>Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header