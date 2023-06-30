import Header from '../../components/Header/Header'
import Trusted from "../../components/Trusted/Trusted"
import Features from '../../components/Features/Features'
import CleaningService from '../../components/CleaningService/CleaningService';
import Apply from '../../components/Apply/Apply'
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
      <>
      <Header/>
      <Trusted />
      <Features />
      <CleaningService />
      <Apply />
      <Faq />
      <Footer />
      </>
    )
}

export default Home