import React from 'react'
import styled from 'styled-components';
import MyNavbar from '../../components/Navbar/Navbar'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'
import './about.css'
//styled components
const StyledNavbar = styled.div`
    background-color: #0085FB;
`
const About = () => {
    const teamMembers = [
        {
            image: 'https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg',
            name: 'Bipin',
            role: 'Director',
            description: 'I am Bipin Gurung from kathmandu, Lorem Ipsum is simply dummy text of took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            image: 'https://worldywcacouncil.org/wp-content/uploads/2014/10/speaker-2-v2.jpg',
            name: 'Olivia Manson',
            role: 'Projetc Manager',
            description: 'I am Bipin Gurung from kathmandu, Lorem Ipsum is simply dummy text of took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            image: 'https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png',
            name: 'Adrew Drue',
            role: 'Manager',
            description: 'I am Bipin Gurung from kathmandu, Lorem Ipsum is simply dummy text of took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            image: 'https://fan.ba/wp-content/uploads/2020/12/author-3.jpg',
            name: 'Morgan Jhon',
            role: 'Advisor',
            description: 'I am Bipin Gurung from kathmandu, Lorem Ipsum is simply dummy text of took a galley of type and scrambled it to make a type specimen book.'
        },

    ]
    return (
        <div className="about-page">
            <div className="about-header">
                <StyledNavbar>
                    <MyNavbar />
                </StyledNavbar>
                <Container>
                    <div className="hero-section d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-text">
                            <div className="title text-center">
                                <h4>DK RECRUITMENT</h4>
                                <h1>Unlucking Oppertunites,<br /> Empowering Careers.</h1>
                            </div>
                            <div className="description mt-4 mb-4 d-flex flex-column justify-content-center align-items-center">
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
            <div className="about-service">
                <div className="container overflow-hidden">
                    <div className="row gy-5 gy-md-6 gx-xl-6 my-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-1-circle-fill text-primary" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                                <h5 className="my-2">SEO Consulting</h5>
                                <p className="m-0 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-2-circle-fill text-primary" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                                <h5 className="my-2">Web Development</h5>
                                <p className="m-0 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-3-circle-fill text-primary" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                                <h5 className="my-2">Digital Strategy</h5>
                                <p className="m-0 text-secondary">Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere nisl, vel placerat magna mauris mollis maximus est.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-team">
                <Container>
                    <div className="teamTitle py-4">
                        <h3 className='text-center fw-bolder '>The Core Of Our Team</h3>
                        <p className='text-center fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <Row>
                        {teamMembers.map((member, index) => (
                            <Col key={index} md={6} lg={6} className="mb-4">
                                <Card>
                                    <Row noGutters>
                                        <Col md={4}>
                                            <Card.Img src={member.image} alt={member.name} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body className="p-0 my-2">
                                                <Card.Title>{member.name}</Card.Title>
                                                <Card.Subtitle className="text-primary mb-2">{member.role}</Card.Subtitle>
                                                <Card.Text>{member.description}</Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="view-more d-flex justify-content-center align-items-center py-4">
                        <button type="button" className="btn btn-dark">View More</button>
                    </div>
                </Container>
            </div>
            <div className="apply-contact">
                <Container className="d-flex justify-content-center align-items-center h-100">
                    <Row>
                        <h3 className="text-center text-light">Apply From AnyWhare, Achieve Everywhare !</h3>
                        <p className="text-center text-white-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, saepe?Lorem ipsum dolor sit amet.</p>
                        <div className="contact-btn d-flex justify-content-center align-items-center py-4">
                            <button type="button" className="btn btn-dark">Contact With Us</button>
                        </div>
                    </Row>
                </Container>
            </div>
            <Faq />
            <Footer />
        </div >
    )
}

export default About
