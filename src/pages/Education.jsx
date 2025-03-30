import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in CSE (Data Science)",
    institution: "Tulsiramji Gaikwad Patil College Of Engineering and Technology Nagpur",
    year: "2022 - 2026",
  },
  {
    degree: "Class 12 (Science)",
    institution: "Jeevan Vikas Mahavidhyalay Devgram (Thugao Dev)",
    year: "2020-2022",
  },
  {
    degree: "Class 10",
    institution: "Madhyamik Vidhyalay Chandni Bardi",
    year: "2019-2020",
  },
];

const Education = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen px-6"
      style={{
        backgroundImage: "linear-gradient(135deg, #111827, #1e3a8a 40%, #0f172a 80%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <h1
        className="text-4xl font-bold mb-10 text-center"
        style={{
          backgroundImage: "linear-gradient(to right, white, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Education
      </h1>

      {/* Cards Container */}
      <div className="flex flex-col items-center">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-xl shadow-lg relative flex flex-col justify-center text-center"
            style={{
              width: "500px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.1)", // Transparent card
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(15px)", // Glass effect
              marginBottom: "30px",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.border = "2px solid rgba(255, 255, 255, 0.5)";
              e.currentTarget.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = "2px solid rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Neon Glow Effect */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.3) 20%, transparent 60%)",
                transform: "rotate(20deg)",
                zIndex: 0,
              }}
            />

            {/* Card Content */}
            <h2 className="text-xl font-semibold z-10">{item.degree}</h2>
            <h3 className="text-lg text-gray-300 z-10">{item.institution}</h3>
            <span className="text-md text-gray-400 z-10">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
