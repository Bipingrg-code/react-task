import './cleanservice.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Girl from '../../assets/girl.jpg'
import People from '../../assets/people-cleaner.jpg'
import Cleaner from '../../assets/cleaner.jpg'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const CleaningService = () => {
  return (
    <div className='clean-service'>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-start gap-5">

            <div className="title">
              <h3>DK Cleaning & Pest Control Services</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged</p>
            </div>
            <div className="services-icons d-flex flex-column gap-4">
              <div className="left-btn d-flex gap-4">
                <Button type="button" className="btn btn-light  bg-white shadow rounded-pill"><span><PlayArrowRoundedIcon /></span> Home Service</Button>
                <Button type="button" className="btn btn-light  bg-white shadow  rounded-pill"><span><PlayArrowRoundedIcon /></span> Office Service</Button>
              </div>
              <div className="right-btn d-flex gap-4">
                <Button type="button" className="btn btn-light  bg-white shadow-lg rounded-pill"><span><PlayArrowRoundedIcon /></span> Residental Service</Button>
                <Button type="button" className="btn btn-light  bg-white shadow-lg rounded-pill"><span><PlayArrowRoundedIcon /></span> Golden Park Service</Button>
              </div>
            </div>
            <div className="contact-button">
              <Button variant="primary">Button <span><ArrowForwardOutlinedIcon /></span></Button>
            </div>

          </Col>

          <Col className="d-flex gap-1">
            <Row>
              <div className="col-6 py-4">
                <Image
                  src={Girl}
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="protait"
                  fluid
                />

                <Image
                  src={People}
                  className="w-100 shadow-1-strong rounded"
                  alt="people"
                  fluid
                />
              </div>

              <div className="col-6 py-4">
                <Image
                  src={Cleaner}
                  className="w-100 h-100 object-fit-cover shadow-1-strong rounded"
                  alt="cleaner"
                  fluid
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CleaningService
