import './faq.css'
import { Container, Row, Col } from 'react-bootstrap';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddIcon from '@mui/icons-material/Add';
const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <div className="title text-center">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="discription text-center">
            <p>Empowering jobs seekers in Poland with knowledge, insights, and export guidance, ensuring you navigate <br />
              the job market with confidance. Discover your go-to resource for finding your dream job, with <br />
              comprehansive support at every step of the way</p>
          </div>
        </Row>
        <Row>
          <Col>
            <div className='questions'>
              <p>How to Submit your Documents.?</p>
              <span><KeyboardArrowDownOutlinedIcon /></span>
            </div>
            <div className='questions '>
              <p>How to get Embassy Data.?</p>
              <span><KeyboardArrowDownOutlinedIcon /></span>
            </div>
            <div className='questions'>
              <p>How can DK Recruiments help.?</p>
              <span><KeyboardArrowDownOutlinedIcon /></span>
            </div>
          </Col>
          <Col>
          <div className='questions'>
          <p>Know Rules & Regulation.?</p>
          <span><AddIcon /></span>
        </div>
        <div className='questions'>
          <p>How to get Flight Tickets.?</p>
          <span><AddIcon /></span>
        </div>
        <div className='questions'>
          <p>What are the jobs avaiable.?</p>
          <span><AddIcon /></span>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq