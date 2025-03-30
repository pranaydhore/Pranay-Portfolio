import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const FloatingElement = ({ children, duration = 4, delay = 0, y = 15 }) => {
  return (
    <div
      style={{
        animation: `floating ${duration}s ease-in-out infinite ${delay}s`,
        position: 'relative'
      }}
    >
      {children}
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-${y}px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

const About = () => {
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    const createSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5
        });
      }
      setSparkles(newSparkles);
    };
    
    createSparkles();
    const interval = setInterval(() => createSparkles(), 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      backgroundImage: "linear-gradient(135deg, #111827, #1e3a8a 40%, #0f172a 80%)",
      color: "white",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem"
    }}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: 'absolute',
            left: sparkle.left,
            top: sparkle.top,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0,
            animation: `sparkle ${sparkle.duration}s ease-in-out infinite ${sparkle.delay}s`
          }}
        />
      ))}
      
      <motion.div style={{
        maxWidth: "800px",
        zIndex: 10,
        position: "relative"
      }}>
        <FloatingElement duration={5} delay={0.2} y={8}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            backgroundImage: "linear-gradient(to right, white, #93c5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            About Me
          </h1>
        </FloatingElement>

        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.7" }}>
          I am Pranay Dhore, a passionate MERN developer and data Analytics. 
          With a keen eye for technology and innovation, I specialize in web development, 
          AI, and data analytics.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          {["Full-Stack Development", "Data Science & AI", "Problem Solving","Data Analytics","Power BI"].map((title, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "center",
                margin: "10px"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "white" }}>{title}</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {title === "Full-Stack Development" && "Building modern, scalable web applications."}
                {title === "Data Analytics" && "Analysis of past data to fing the useful insigth from the data."}
                {title === "Power BI" && "Solving complex challenges with innovative tech solutions and Visualization."}
                {title === "Data Science & AI" && "Creating data-driven solutions and AI models."}
                {title === "Problem Solving" && "Solving complex challenges with innovative tech solutions."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.7; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;