import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import aboutPic from "./assets/about-pic.jpeg";
import experienceIcon from "./assets/experience.png";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const skillsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const skillPill = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const frontendSkills = [
    { name: "HTML", level: "Experienced", color: "#e34f26" },
    { name: "CSS", level: "Experienced", color: "#264de4" },
    { name: "React JS", level: "Experienced", color: "#61dafb" },
    { name: "JavaScript", level: "Experienced", color: "#f7df1e" },
    { name: "React Native", level: "Intermediate", color: "#61dafb" },
    { name: "Bootstrap", level: "Intermediate", color: "#7952b3" },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Experienced", color: "#339933" },
    { name: "Express JS", level: "Experienced", color: "#68a063" },
    { name: "FastAPI", level: "Intermediate", color: "#ff6b9d" },
    { name: "Flask", level: "Experienced", color: "#00d4ff" },
  ];

  const SkillPillComponent = ({ skill, variants }) => (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.08,
        borderColor: `${skill.color}55`,
        boxShadow: `0 0 20px ${skill.color}20`,
        y: -3,
      }}
      transition={{ duration: 0.2 }}
      className="skill-pill"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.55rem 1rem",
        background: "var(--bg-glass)",
        border: "1px solid var(--border-glass)",
        borderRadius: "50px",
        cursor: "default",
      }}
    >
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: skill.color,
          flexShrink: 0,
          boxShadow: `0 0 8px ${skill.color}60`,
        }}
      />
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
      <span
        style={{
          fontSize: "0.65rem",
          fontWeight: 500,
          color: "var(--text-muted)",
          padding: "0.1rem 0.4rem",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "20px",
          whiteSpace: "nowrap",
        }}
      >
        {skill.level}
      </span>
    </motion.div>
  );

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
          </motion.div>

          <div className="section-container">
            <motion.div
              variants={itemVariants}
              className="section__pic-container about-image-container"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                margin: "0 auto",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "1/1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={aboutPic}
                alt="Portrait photograph"
                className="about-pic"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "20px",
                }}
              />
            </motion.div>

            <div className="about-details-container">
              <div className="about-containers">
                <motion.div
                  variants={itemVariants}
                  className="details-container"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(108, 99, 255, 0.4)",
                    boxShadow: "0 0 30px rgba(108, 99, 255, 0.15)",
                  }}
                >
                  <motion.img
                    src={experienceIcon}
                    alt="Experience icon"
                    className="icon"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  />
                  <h3>Experience</h3>
                  <p>
                    3+ years <br />
                    Full Stack Developer
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="details-container"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(0, 212, 255, 0.4)",
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.15)",
                  }}
                >
                  <motion.img
                    src={educationIcon}
                    alt="Education icon"
                    className="icon"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  />
                  <h3>Education</h3>
                  <p>
                    Bachelors Of Technology
                    <br />
                    Computer Science
                  </p>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="text-container">
                <p>
                  I am a Backend-focused Full Stack Engineer with 3+ years of
                  experience designing and deploying scalable, high-performance
                  web applications and AI-powered systems. My expertise lies in
                  Node.js, Python, PostgreSQL, and microservices architecture,
                  building secure and production-grade backend services that
                  handle real-time communication and large-scale user
                  interactions.
                </p>

                <p>
                  I have architected real-time platforms using WebSockets and
                  LiveKit, integrated AI APIs such as OpenAI and Claude, and
                  implemented secure payment systems with Cashfree and Razorpay.
                  I focus heavily on system design, performance optimization,
                  database indexing, and building low-latency distributed
                  applications.
                </p>

                <p>
                  Passionate about combining backend engineering with AI-driven
                  innovation, I strive to build scalable, intelligent, and
                  user-centric solutions that solve real-world problems and
                  drive measurable business impact.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <motion.div
            variants={itemVariants}
            className="skills-section"
            style={{ marginTop: "4rem" }}
          >
            <h1 className="title">My Skills</h1>

            <motion.div
              className="skills-grid"
              variants={skillsContainer}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {/* Frontend Card */}
              <motion.div
                className="skill-card"
                variants={skillPill}
                whileHover={{
                  borderColor: "rgba(108, 99, 255, 0.3)",
                  boxShadow: "0 0 30px rgba(108, 99, 255, 0.1)",
                }}
              >
                <h2 className="skill-card-title">Frontend Development</h2>
                <div className="skill-pills-wrap">
                  {frontendSkills.map((skill, i) => (
                    <SkillPillComponent
                      key={i}
                      skill={skill}
                      variants={skillPill}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Backend Card */}
              <motion.div
                className="skill-card"
                variants={skillPill}
                whileHover={{
                  borderColor: "rgba(0, 212, 255, 0.3)",
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.1)",
                }}
              >
                <h2 className="skill-card-title">Backend Development</h2>
                <div className="skill-pills-wrap">
                  {backendSkills.map((skill, i) => (
                    <SkillPillComponent
                      key={i}
                      skill={skill}
                      variants={skillPill}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Arrow */}
          <motion.div
            className="arrow-container"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <motion.img
              src={arrowIcon}
              alt="Arrow pointing to next section"
              className="icon arrow"
              animate={{ y: [0, 8, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              }}
              onClick={() => {
                document.getElementById("experience").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              style={{ cursor: "none" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .skill-card {
                    background: var(--bg-glass);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid var(--border-glass);
                    border-radius: var(--border-radius-md);
                    padding: 1.5rem;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .skill-card-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    text-align: center;
                    letter-spacing: 0.02em;
                }
                .skill-pills-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    justify-content: center;
                }
                @media (max-width: 600px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                    .skill-pills-wrap {
                        gap: 0.4rem;
                    }
                    .skill-pill {
                        padding: 0.45rem 0.75rem !important;
                        gap: 0.35rem !important;
                    }
                    .skill-pill span:first-child {
                        width: 6px !important;
                        height: 6px !important;
                    }
                    .skill-pill span:nth-child(2) {
                        font-size: 0.8rem !important;
                    }
                    .skill-pill span:nth-child(3) {
                        font-size: 0.6rem !important;
                        padding: 0.1rem 0.35rem !important;
                    }
                }
                @media (orientation: landscape) and (max-width: 1200px) {
                    .section-container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 2rem;
                    }
                    .about-image-container {
                        flex: 1;
                        max-width: 350px;
                    }
                    .about-details-container {
                        flex: 1.5;
                    }
                }
                @media (orientation: landscape) and (max-height: 600px) {
                    #about {
                        min-height: 120vh;
                        padding: 2rem 0;
                    }
                    .about-image-container {
                        max-width: 250px;
                    }
                }
            `}</style>
    </section>
  );
};

export default About;
