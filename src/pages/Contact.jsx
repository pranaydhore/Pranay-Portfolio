import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rk4wlfo", // Replace with actual Service ID
        "template_g6afilq", // Replace with actual EmailJS Template ID
        e.target,
        "Fac5gGWn53vFW2U35" // Public Key
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatusMessage("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)", // 🔵 Dark Blue & Black Mix
        color: "#e2e8f0",
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
          backgroundImage: "linear-gradient(to right, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Get in Touch
      </h1>

      <form
        onSubmit={sendEmail}
        style={{
          background: "#1e293b", // 🔹 Deep Navy Blue
          borderRadius: "10px",
          padding: "2rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          width: "90%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#334155", // 🟦 Muted Dark Blue Input
            color: "#e2e8f0",
            fontSize: "1rem",
            transition: "0.3s ease-in-out",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#334155",
            color: "#e2e8f0",
            fontSize: "1rem",
            transition: "0.3s ease-in-out",
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#334155",
            color: "#e2e8f0",
            fontSize: "1rem",
            minHeight: "100px",
            resize: "none",
            transition: "0.3s ease-in-out",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#2563eb", // 🔵 Bright Blue Button
            color: "white",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#60a5fa")}
          onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
        >
          Send Message
        </button>

        {statusMessage && (
          <p style={{ marginTop: "0.5rem", fontSize: "1rem", color: "#e2e8f0" }}>
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
