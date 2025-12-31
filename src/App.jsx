
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
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
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

<Footer/>

   </>
  ); 
    
}

export default App;
