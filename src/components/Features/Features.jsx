import './features.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
const Features = () => {
  return (
    <div className='features'>
      <Container>
        <Row className="title d-flex justify-content-center align-item-end">
          <h3>Explore Diverse Job Opportunities in <span>Poland</span></h3>
        </Row>
        <Row className="gx-5">
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Production Helper</h5>
                  <p className="card-text">20 Jobs Available</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Factory Worker</h5>
                  <p className="card-text">10 Jobs Available.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Parker</h5>
                  <p className="card-text">5 Jbos Available</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Chef</h5>
                  <p className="card-text">20 Jobs Avaiable</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Waiter</h5>
                  <p className="card-text">20 Jobs Available</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <Button href="#" className="btn btn-primary">View Details</Button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Cook</h5>
                  <p className="card-text">10 Jobs Available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Button class="view-more btn btn-light">View More</Button>
      </Container>
    </div>
  )
}

export default Features