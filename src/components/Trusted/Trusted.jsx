import './trusted.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Company from '../../assets/untitled.png'
import Evr from '../../assets/evr.gif'
const Trusted = () => {
    return (
        <div className='trusted'>
            <Container>
                <div className="title d-flex justify-content-center align-items-center">
                    <h3>Trusted By</h3>
                </div>
                <Row>
                    <div className="card">
                        <Image src={Company}  alt='Image' />
                    </div>

                    <div className="card">
                        <Image src={Evr}  alt='Image' />
                    </div>

                    <div className="card">
                        <Image src={Company}  alt='Image' />
                    </div>

                    <div className="card">
                        <Image src={Company}  alt='Image' />
                    </div>

                    <div className="card">
                        <Image src={Company}  alt='Image' />
                    </div>


                </Row>
            </Container>
        </div>
    )
}

export default Trusted