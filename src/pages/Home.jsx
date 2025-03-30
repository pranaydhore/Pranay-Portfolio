import React, { useEffect, useState } from 'react';
import { 
  Linkedin,
  Github,
  Instagram,
  Twitter 
} from 'lucide-react';
import pranayImage from '../assets/images/pranay.jpg'; 

// Custom animation hook
const useAnimate = (delay = 0) => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return animated;
};

// Floating animation component
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

const Home = () => {
  const profileAnimated = useAnimate(300);
  const titleAnimated = useAnimate(600);
  const subtitleAnimated = useAnimate(900);
  const socialAnimated = useAnimate(1200);
  const buttonAnimated = useAnimate(1500);
  
  // Background sparkles
  const [sparkles, setSparkles] = useState([]);
  
  useEffect(() => {
    // Create sparkles
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
    
    // Regenerate sparkles periodically
    const interval = setInterval(() => {
      createSparkles();
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/in/pranaydhore",
      color: "#0077B5",
      hoverColor: "#0069a0",
      label: "LinkedIn"
    },
    { 
      Icon: Github, 
      href: "https://github.com/pranaydhore",
      color: "#333",
      hoverColor: "#000",
      label: "GitHub"
    },
    { 
      Icon: Instagram, 
      href: "https://www.instagram.com/pranaydhore",
      color: "#E1306C",
      hoverColor: "#c13584",
      label: "Instagram"
    },
    { 
      Icon: Twitter, 
      href: "https://twitter.com/pranaydhore",
      color: "#1DA1F2",
      hoverColor: "#0c85d0",
      label: "Twitter"
    }
  ];

  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #111827, #1e3a8a 40%, #0f172a 80%)",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        padding: "1rem"
      }}
    >
      {/* Sparkle background */}
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
      
      {/* Animated gradient circle behind profile */}
      <div
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.1) 35%, rgba(29, 78, 216, 0) 70%)',
          borderRadius: '50%',
          animation: 'pulse 8s ease-in-out infinite',
          zIndex: 0
        }}
      />
      
      {/* Modified layout - Vertical stacked layout */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "2rem"
      }}>
        {/* Profile image - centered at the top */}
        <div 
          className={`rounded-full border-4 border-white/30 shadow-2xl overflow-hidden relative z-10`}
          style={{
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            borderWidth: "4px",
            borderColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.6s, border-color 0.3s",
            transform: profileAnimated ? "scale(1)" : "scale(0.8)",
            opacity: profileAnimated ? 1 : 0,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05) rotate(3deg)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
          }}
        >
          <FloatingElement duration={6} y={8}>
            <img 
              src={pranayImage}
              alt="Pranay Dhore" 
              className="w-full h-full object-cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.9) saturate(1.5)",
                transition: "filter 0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "brightness(1) saturate(1.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "brightness(0.9) saturate(1.5)";
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23718096"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23ffffff">Profile Image</text></svg>';
              }}
            />
          </FloatingElement>
          <div 
            className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"
            style={{
              position: "absolute",
              inset: "0",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              mixBlendMode: "overlay"
            }}
          />
        </div>
        {/* Name */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          margin: "1rem 0",
          backgroundImage: "linear-gradient(to right, white, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          opacity: titleAnimated ? 1 : 0,
          transform: titleAnimated ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 0.6s, transform 0.6s"
        }}
      >
        Pranay Dhore
      </h1>

        

        {/* Subtitle */}
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          color: "rgba(255, 255, 255, 0.8)",
          opacity: subtitleAnimated ? 1 : 0,
          transform: subtitleAnimated ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s, transform 0.6s"
        }}
      >
        <FloatingElement duration={4} delay={1} y={5}>
          <b>Data Analytics | MERN Stack Development | Power BI</b>
        </FloatingElement>
      </p>

        {/* Social icons - horizontal layout below name */}
        <div 
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            opacity: socialAnimated ? 1 : 0,
            transform: socialAnimated ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s, transform 0.6s"
          }}
        >
          {socialLinks.map(({ Icon, href, color, hoverColor, label }, index) => (
            <FloatingElement key={href} duration={3 + index * 0.5} delay={index * 0.2} y={7}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  padding: "0.75rem",
                  borderRadius: "9999px",
                  color: "white",
                  backgroundColor: color,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.2) rotate(5deg)";
                  e.currentTarget.style.backgroundColor = hoverColor;
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.4)";
                  e.currentTarget.querySelector('.tooltip').style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.backgroundColor = color;
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.querySelector('.tooltip').style.opacity = "0";
                }}
              >
                <Icon style={{ width: "1.75rem", height: "1.75rem" }} />
                <span 
                  className="tooltip"
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: "0",
                    transition: "opacity 0.3s",
                    fontSize: "0.75rem",
                    marginBottom: "0.5rem",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                  }}
                >
                  {label}
                </span>
              </a>
            </FloatingElement>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        style={{
          padding: "1rem 3rem",
          fontSize: "1.125rem",
          background: "linear-gradient(45deg, #3b82f6, #9333ea)",
          borderRadius: "9999px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          fontWeight: "600",
          letterSpacing: "0.05em",
          transition: "all 0.5s",
          position: "relative",
          overflow: "hidden",
          border: "none",
          cursor: "pointer",
          color: "white",
          opacity: buttonAnimated ? 1 : 0,
          transform: buttonAnimated ? "translateY(0)" : "translateY(30px)"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.4)";
          e.currentTarget.querySelector('.btn-highlight').style.transform = "translateX(250px) translateY(-60px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.3)";
          e.currentTarget.querySelector('.btn-highlight').style.transform = "translateX(-250px) translateY(60px)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.95)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
      >
        <FloatingElement duration={4} y={3}>
          Explore My Digital Ecosystem
          <div
            className="btn-highlight"
            style={{
              position: "absolute",
              width: "200px",
              height: "100px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              transform: "translateX(-250px) translateY(60px)",
              transition: "transform 0.6s",
              pointerEvents: "none"
            }}
          />
        </FloatingElement>
      </button>
      <div>
       {/* Download Resume Button */}
       <button
        style={{
          margin:"20px",
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          background: "linear-gradient(45deg, #3b82f6, #9333ea)",
          borderRadius: "9999px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          fontWeight: "600",
          transition: "all 0.5s",
          border: "none",
          cursor: "pointer",
          color: "white",
          opacity: buttonAnimated ? 1 : 0,
          transform: buttonAnimated ? "translateY(0)" : "translateY(30px)"
        }}
        onClick={() => {
          window.open("https://drive.google.com/file/d/1o0QGFEwro7VcKEa0jkYjbV-zot67tz8V/view?usp=sharing", "_blank");
        }}
      >
        Download Resume
      </button>
    </div>
      
      {/* Keyframe animations */}
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
      `}
      </style>
    </div>
  );
};

export default Home;