import React, { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  { title: "C", percentage: 90 },
  { title: "C++", percentage: 85 },
  { title: "Python", percentage: 80 },
  { title: "Java", percentage: 75 },
  { title: "JavaScript", percentage: 70 },
  { title: "React.js", percentage: 85 },
  { title: "Node.js", percentage: 70 },
  { title: "Pandas", percentage: 80 },
  { title: "NumPy", percentage: 75 },
  { title: "Scikit-Learn", percentage: 70 },
  { title: "MySQL", percentage: 85 },
  { title: "MongoDB", percentage: 75 },
  { title: "AWS", percentage: 80 },
  { title: "Docker", percentage: 70 },
  { title: "Kubernetes", percentage: 65 },
];

const Skill = () => {
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
        My Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {skillsData.map((skill, index) => (
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
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "white" }}>
              {skill.title}
            </h2>

            {/* Progress Bar */}
            <div
              style={{
                width: "100%",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "0.5rem",
                height: "10px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                  borderRadius: "0.5rem",
                }}
              />
            </div>

            {/* Percentage Text */}
            <p style={{ marginTop: "0.5rem", fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)" }}>
              {skill.percentage}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
