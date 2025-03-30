import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/pranaydhore", color: "#ffffff" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/pranaydhore", color: "#60a5fa" },
  { icon: <FaTwitter />, url: "https://twitter.com/pranaydhore", color: "#38bdf8" },
  { icon: <FaInstagram />, url: "https://instagram.com/pranaydhore", color: "#f472b6" },
];

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #0f172a, #1e40af)", // Dark Blue + Purple Gradient
    color: "#e2e8f0",
    padding: "0.8rem 0", // 🔹 Smaller height
    textAlign: "center",
    fontSize: "0.9rem",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    margin: "0.5rem 0",
  };

  const socialLinkStyle = {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease",
  };

  const contactTextStyle = {
    fontSize: "0.85rem",
    margin: "0.2rem 0",
  };

  return (
    <footer style={footerStyle}>
      {/* <h2 style={{ fontSize: "1.2rem", marginBottom: "0.3rem", fontWeight: "600" }}>Pranay Dhore</h2>
      <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem", color: "#93c5fd" }}>
        Full-Stack Developer | Data Scientist
      </p> */}

      {/* Social Media Icons */}
      <div style={socialIconsStyle}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...socialLinkStyle, color: link.color }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <p style={contactTextStyle}><FaPhone /> 7498678112</p>
      <p style={contactTextStyle}><FaEnvelope /> pranaydhore03@gmail.com</p>
    

      {/* Copyright Text */}
      <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", opacity: "0.7" }}>
        © {new Date().getFullYear()} Pranay Dhore. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
