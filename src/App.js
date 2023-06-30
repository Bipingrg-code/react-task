import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Jobs from './pages/Jobs/Jobs'
import Recruitment from './pages/Recruitment/Recruitment'
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />  
                <Route path="/jobs" element={<Jobs />}/>
                <Route path="/recruitment" element={<Recruitment />}/>
            </Routes>
        </div>
    )
}

export default App