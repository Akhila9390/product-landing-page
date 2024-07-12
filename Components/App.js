import "./App.css";
import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import Navbar from "./navbar";
import About from "./about";
 import Home from "./home.js";
 import Work from "./work";
 import Test from "./test";
 import Contact from "./contact";
 import Footer from "./footer";

function App() {
  return (
    <>
    <BrowserRouter>  
       <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
     </BrowserRouter>
  <div>
  <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="/about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="/test" smooth={true} duration={500}>Test</Link></li>
          <li><Link to="/contact" smooth={true} duration={500}>Contact Us</Link></li>
          <li><Link to="/work" smooth={true} duration={500}>Work</Link></li>
          <li><Link to="/footer" smooth={true} duration={500}>Footer</Link></li>
        </ul>
      </nav>
      </div>

      </>
  );
}
export default App;
