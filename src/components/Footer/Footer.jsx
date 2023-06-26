import './footer.css'
import { Container, Row, Col, Image} from 'react-bootstrap';
import Logo from '../../assets/logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const TikTokIcon = ({ color = "#ffffff" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="28px"
      height="28px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};
const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <Image src={Logo} alt="logo" />
            </div>
          </Col>
          <Col>
            <ul className="list-unstyled gap-4 d-flex justify-content-center align-items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Recuriments</li>
            </ul>
          </Col>
          <Col >
            <ul className="list-unstyled d-flex gap-2 justify-content-end">
              <li><FacebookOutlinedIcon /></li>
              <li><GoogleIcon /></li>
              <li><TikTokIcon /></li>
              <li><InstagramIcon /></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>&#9400; 2033 DK Recrutment | All Right Reserved</p>
          </Col>
          <Col className='d-flex justify-content-end gap-4'>
            <p>
              Terms &amp; Conditions
            </p>
            <p>
              Privacy Policy
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
 // <Navbar expand="lg d-flex justify-content-center align-items-center">
            //   <Nav className="ml-auto">
            //     <Nav.Link href="#home">Home</Nav.Link>
            //     <Nav.Link href="#about">About</Nav.Link>
            //     <Nav.Link href="#services">Jobs</Nav.Link>
            //     <Nav.Link href="#contact">Recuirment</Nav.Link>
            //   </Nav>
            // </Navbar>