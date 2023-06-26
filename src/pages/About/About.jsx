import React from 'react'
import styled from 'styled-components';
import MyNavbar from '../../components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import Button from '@mui/material/Button';
import './about.css'


//styled components
const StyledNavbar = styled.div`
    background-color: white;
`
const About = () => {
    return (
        <div className='about-page'>
            <StyledNavbar>
                <MyNavbar />
            </StyledNavbar>
            <div className="about">
                <Container>
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
                </Container>
            </div>
        </div>
    )
}

export default About
