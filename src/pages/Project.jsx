import React from "react";
import { motion } from "framer-motion";


// Project Data with Image URLs
const projects = [
  {
    title: "AI Disease Prediction System",
    image: "/images/Ai diseaase.png",
    github: "https://github.com/pranaydhore/AI.git",
    live: "https://9egsxbzxy56rathhmg3cyb.streamlit.app/",
  },
  {
    title: "Object Detection By Yolo Model",
    image: "/images/Oject Detection.png",
    github: "https://github.com/pranaydhore/Object-Detection-.git",
    live: "https://ecommerce-app.com",
  },
  {
    title: "Potato Leaf Disease Detection",
    image: "/images/Potato.jpg",
    github: "https://github.com/pranaydhore/Potato-Leafs-Disease-Prediction.git",
    live: "https://web1py-l6tnedf78mzswvmzsrbmx9.streamlit.app/",
  },
  {
    title: "Games & Calculator",
    image: "/images/react.png",
    github: "https://github.com/pranaydhore/React-Practice.git",
    live: "https://react-practice-ochre.vercel.app/",
  },
  {
    title: "Spotify Clone (HTML+CSS)",
    image: "/images/Spotify clone.jpg",
    github: "https://github.com/pranaydhore/Spotify-Clone.git",
    live: "https://relaxed-banoffee-c0168f.netlify.app/",
  },
  {
    title: "Face Attendence System",
    image: "/images/Attendence System.jpg",
    github: "https://github.com/pranaydhore/Face-Attendences-System.git",
    live: "https://chat-app.com",
  },
  {
    title: "Netflix Data Analysis",
    image: "/images/Netflix.jpg",
    github: "https://github.com/pranaydhore/Netflix-Analysis-By-Power-BI.git",
    live: "https://chat-app.com",
  },
  {
    title: "Amazon Sales Analysis",
    image: "/images/Amazon Sales .jpg",
    github: "https://github.com/pranaydhore/Amazon-Sales-Data-Analytics-Using-Power-BI.git",
    live: "https://chat-app.com",
  },
  {
    title: "Spotify Data Analysis",
    image: "/images/Spotify.jpg",
    github: "https://github.com/pranaydhore/Spoitify-Data-Analysis-By-Power-BI.git",
    live: "https://chat-app.com",
  },
  {
    title: "Megastore Data Analysis",
    image: "/images/Megastore.jpg",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app.com",
  },
  {
    title: "Blinkit Outlets Data Analysis",
    image: "/images/blinkit.png",
    github: "https://github.com/pranaydhore/Blinkit-Outlet-Sales-Analysis.git",
    live: "https://chat-app.com",
  },
  {
    title: "Swiggy Rating & Performance Analysis",
    image: "/images/swiggy.png",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app.com",
  },
  {
    title: "Retail Store Data Analysis",
    image: "/images/image.png",
    github: "https://github.com/pranaydhore/Retail-Store-Inventory-Level-Analysis.git",
    live: "https://chat-app.com",
  },
  {
    title: "Meta Stock Data Analysis",
    image: "/images/Megastore by python.png",
    github: "https://github.com/pranaydhore/Meta-Stock-Data-Analysis-By-Open-AI.git",
    live: "https://chat-app.com",
  },
  {
    title: "TODO List App",
    image: "/images/Screenshot 2025-03-02 101724.png",
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app.com",
  },
  
];

const Project = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #111827, #1e3a8a 40%, #0f172a 80%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          backgroundImage: "linear-gradient(to right, white, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        My Projects
      </h1>

      {/* Project Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              borderRadius: "1rem",
              padding: "0.8rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />

            {/* Project Title */}
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#93c5fd" }}>
              {project.title}
            </h2>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  background: "#2563eb",
                  color: "white",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  background: "#10b981",
                  color: "white",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
