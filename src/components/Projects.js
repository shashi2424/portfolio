import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";
import project4 from "./assets/project-4.jpg";
import project5 from "./assets/project-5.webp";
import arrow from "./assets/arrow.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
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
        className="experience-details-container"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div
          className="about-containers"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="details-container color-container"
              variants={item}
              whileHover={{
                scale: 1.03,
                borderColor: cardColors[index].border,
                boxShadow: `0 0 40px ${cardColors[index].glow}`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "1 1 320px",
                maxWidth: "400px",
              }}
            >
              <div
                className="article-container"
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
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <h2
                className="experience-sub-title project-title"
                style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}
              >
                {project.title}
              </h2>
              <p className="project-description">{project.description}</p>
            </motion.div>
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
