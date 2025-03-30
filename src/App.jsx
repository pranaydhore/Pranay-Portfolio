import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./cmponents/Navbar";
import Footer from "./cmponents/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import "./App.css";
import Internships from "./pages/Internship";
import Education from "./pages/Education";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/internships" element={<Internships/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;