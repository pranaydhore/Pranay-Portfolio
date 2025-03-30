import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Pranay Dhore</Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" className="nav-item" onClick={() => setIsOpen(false)}><b>Home</b></Link></li>
          <li><Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}><b>About</b></Link></li>
          <li><Link to="/education" className="nav-item" onClick={() => setIsOpen(false)}><b>Education</b></Link></li>
          <li><Link to="/projects" className="nav-item" onClick={() => setIsOpen(false)}><b>Projects</b></Link></li>
          <li><Link to="/skill" className="nav-item" onClick={() => setIsOpen(false)}><b>Skills</b></Link></li>
          <li><Link to="/internships" className="nav-item" onClick={()=>setIsOpen(false)}><b>Internship</b></Link></li>
          <li><Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}><b>Contact</b></Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;