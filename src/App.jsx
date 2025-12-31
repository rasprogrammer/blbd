
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import EligibilityCriteria from './components/Eligibilitycriteria';
import ApplicationProcess from './components/ApplicationProcess';
import ImportantDates from './components/ImportantDates';
import Scholarships from './components/Scholarships';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

 
function App() {
  return (
   <>

<Router>
      <Navbar tittle="Home" /> {/* Navbar stays at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Service />} />
        <Route path="/eligibilitycriteria" element={<EligibilityCriteria />} />
        <Route path="/applicationprocess" element={<ApplicationProcess />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/scholarships" element={<Scholarships />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

<Footer/>

   </>
  ); 
    
}

export default App;
