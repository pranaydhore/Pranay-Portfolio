import React from "react";
import { motion } from "framer-motion";

const internships = [
  {
    company: "Cognifyz Technology",
    role: "Intern – C, C++, Power BI",
    duration: "2 Months",
    link: "https://cognifyz.com",
  },
  {
    company: "MSIT Services CMS",
    role: "Intern – AI & Python",
    duration: "1 Months",
    link: "https://msitservices.com",
  },
  {
    company: "Edunet Foundation",
    role: "Intern – AI & Python",
    duration: "1 Months",
    link: "https://edunetfoundation.com",
  },
];

const Internships = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)", // 🌌 Dark Blue & Black Mix
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      {/* Title on Top */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "2rem",
          backgroundImage: "linear-gradient(to right, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Internships
      </h1>

      {/* Internship Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {internships.map((internship, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))",
              borderRadius: "1rem",
              padding: "1.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s ease-in-out",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "white" }}>
              {internship.company}
            </h2>
            <p style={{ fontSize: "1rem", marginBottom: "0.3rem", color: "#e2e8f0" }}>
              {internship.role}
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "0.8rem", color: "#93c5fd" }}>
              {internship.duration}
            </p>
            <a
              href={internship.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#2563eb",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#60a5fa")}
              onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
            >
              View Details
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
