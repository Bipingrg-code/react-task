import './features.css'
import { Container, Row, Col } from 'react-bootstrap';
const Features = () => {
  return (
    <div className='features'>
      <Container>
        <div className="title d-flex justify-content-center align-item-end">
          <h3>Explore Diverse Job Opportunities in <span>Poland</span></h3>
        </div>
        <Row className="gx-5">
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="card w-100 mb-5">
              <div className="card-body d-flex flex-column justify-content-between align-item-center">
                <div className="veiw-detail d-flex justify-content-end align-item-end">
                  <button href="#" className="btn btn-primary">Button</button>
                </div>
                <div className="discription">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Features