import './features.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
const Features = () => {
  return (
    <div className='features'>
      <Container>
        <Row className="title d-flex justify-content-center align-item-end">
          <h3>Explore Diverse Job Opportunities in <span>Poland</span></h3>
        </Row>
        <Row className="gx-4  xs={1} sm={2} md={3} lg={4} w-100">
          <Col className="col-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Production Helper</h5>
                  <p className="card-text">20 Jobs Available</p>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Factory Worker</h5>
                  <p className="card-text">10 Jobs Available.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Parker</h5>
                  <p className="card-text">5 Jbos Available</p>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Chef</h5>
                  <p className="card-text">20 Jobs Avaiable</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Waiter</h5>
                  <p className="card-text">20 Jobs Available</p>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="discription">
                  <h5 className="card-title">Cook</h5>
                  <p className="card-text">10 Jobs Available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Button className="view-more btn btn-light">View More</Button>
      </Container>
    </div>
  )
}

export default Features