
import Button from '@mui/material/Button';
import './header.css'
import MyNavbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div className="header">
            <div className="container-fulid">
                <MyNavbar />
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