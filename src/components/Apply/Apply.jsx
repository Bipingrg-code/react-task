import './apply.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Work from '../../assets/Photo.png'
const Apply = () => {
  return (
    <div className='apply'>
      <Container>
        <Row>
          <Col className='image'>
            <Image src={Work} alt="Image" fluid />
          </Col>
          <Col className='text'>
            <div className="discription">
              <h2>Title</h2>
              <p>Description</p>
              <Button variant="primary">Button</Button>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Apply