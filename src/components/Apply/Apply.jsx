import image from '../../assets/Photo.png'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Button from '@mui/material/Button';
import './apply.scss'
const Apply = () => {
  return (
    <div className='apply'>
      <div className='image'>
        <img src={image} alt='work' />
      </div>
      <div className='text'>
        <span>Gateway to Global Careers</span>
        <h3> Apply From Anywaywhere, Achieve Everywhere.!</h3>
        <p>Explore International job Opportunities and unluck your potential in Poland, a vibrent destionation for global success. We connect telented professionals from
          around the world to limitless Opportunities, making us the getway to your careers achievements.</p>
        <ul>
          <li><CheckOutlinedIcon />Easy Process</li>
          <li><CheckOutlinedIcon />Cultural Diversity</li>
          <li><CheckOutlinedIcon />Quality of Work Enviroment</li>
        </ul>
        <Button variant="contained" className="apply-btn">Apply Now <ArrowForwardOutlinedIcon /></Button>
      </div>
    </div>
  )
}

export default Apply