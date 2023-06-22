import './apply.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Work from '../../assets/Photo.png'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Apply = () => {
  return (
    <div className='apply'>
      <Container>
        <Row>
          <Col className='image'>
            <Image src={Work} alt="Image" fluid />
          </Col>
          <Col className='text ps-5'>
            <div className="discription">
              <div className="title">Gateway to Global Careers</div>
              <h3> Apply From Anywaywhere, Achieve Everywhere.!</h3>
              <p>Explore International job Opportunities and unluck your potential in Poland, a vibrent destionation for global success. We connect telented professionals from
                around the world to limitless Opportunities, making us the getway to your careers achievements.</p>
              <ul>
                <li><CheckOutlinedIcon />Easy Process</li>
                <li><CheckOutlinedIcon />Cultural Diversity</li>
                <li><CheckOutlinedIcon />Quality of Work Enviroment</li>
              </ul>
              <Button variant="primary">Button <span><ArrowForwardOutlinedIcon /></span></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Apply