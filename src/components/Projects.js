import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";
import project4 from "./assets/project-4.jpg";
import project5 from "./assets/project-5.webp";
import arrow from "./assets/arrow.png";

// 3D Tilt Card component
const TiltCard = ({ children, index, color, variants }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="details-container color-container glass-hover-card tilt-card"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        flex: "1 1 320px",
        maxWidth: "400px",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      whileHover={{
        borderColor: color.border,
        boxShadow: `0 0 40px ${color.glow}`,
      }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const projects = [
    {
      title: "Way2Experts Professional Consultation Platform",
      image: project1,
      description:
        "Developed a real-time communication platform enabling professionals to offer consultations across multiple domains. Built a scalable Node.js backend supporting 1000+ concurrent users with minimal latency. Integrated payment gateways, real-time chat via WebSocket, and Exotel API for seamless call management.",
    },
    {
      title: "Bhashni (AI-Powered Language Learning Platform)",
      image: project4,
      description:
        "Developed Bhashni, a real-time English-to-Telugu language learning platform, designing scalable backend architecture, LiveKit-based real-time infrastructure, and low-latency Sarvam TTS voice streaming with interactive audio controls.",
    },
    {
      title: "Way2Ads Management System",
      image: project2,
      description:
        "Developed an ad management system using React.js and Node.js, optimizing ad delivery and tracking. Designed efficient database queries in PostgreSQL and MongoDB, improving data retrieval by 40%. Implemented role-based access control with custom interfaces for five permission levels.",
    },
    {
      title: "Disha - Astrology App",
      image: project5,
      description:
        "Developed a mobile-first astrology app using React Native, enabling users to access daily horoscopes, personalized predictions, and interactive astrological charts. Integrated Firebase for real-time data synchronization and user authentication.",
    },
    {
      title: "YouTube Multi-channel Publishing Platform",
      image: project3,
      description:
        "Built a scalable publishing platform for YouTube, serving 300,000+ subscribers with optimized content distribution. Automated video creation using templates via a cron job, streamlining publishing across YouTube, Instagram, and Facebook.",
    },
  ];

  const cardColors = [
    { border: "rgba(108, 99, 255, 0.3)", glow: "rgba(108, 99, 255, 0.12)" },
    { border: "rgba(0, 212, 255, 0.3)", glow: "rgba(0, 212, 255, 0.12)" },
    { border: "rgba(255, 107, 157, 0.3)", glow: "rgba(255, 107, 157, 0.12)" },
    { border: "rgba(51, 153, 51, 0.3)", glow: "rgba(51, 153, 51, 0.12)" },
    { border: "rgba(255, 165, 0, 0.3)", glow: "rgba(255, 165, 0, 0.12)" },
  ];

  return (
    <section id="projects" ref={ref}>
      {/* Section divider */}
      <div className="section-divider" />

      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Browse My Recent
      </motion.p>
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Projects
      </motion.h1>

      <motion.div
        ref={sectionRef}
        className="experience-details-container"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        style={{ perspective: "1200px", y: bgY }}
      >
        <div
          className="about-containers"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              index={index}
              color={cardColors[index]}
              variants={item}
            >
              <div
                className="article-container project-image-wrapper"
                style={{
                  marginBottom: "1rem",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h2
                className="experience-sub-title project-title"
                style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}
              >
                {project.title}
              </h2>
              <p className="project-description">{project.description}</p>
            </TiltCard>
          ))}
        </div>
      </motion.div>

      <motion.img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        animate={{ y: [0, 8, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        onClick={() => {
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          });
        }}
        style={{ cursor: "none", display: "block", margin: "2rem auto 0" }}
      />
    </section>
  );
};

export default Projects;
