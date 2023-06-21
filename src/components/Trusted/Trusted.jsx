import './trusted.css'
import Container from 'react-bootstrap/Container';
import Image from '../../assets/untitled.png'

const Trusted = () => {
    return (
        <div className='trusted'>
            <Container>
                <div className="title d-flex justify-content-center align-items-center">
                    <h3>Trusted By</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Image} alt='img'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} alt='img'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} alt='img'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} alt='img'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Image} alt='img'/>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Trusted