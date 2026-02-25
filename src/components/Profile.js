/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";

import profilePic from "./assets/profile-pic.jpeg";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import resumeImg from "./assets/resume.png";
import resumePdf from "./assets/resume-example.pdf";

const Profile = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const nameText = "Shashi Kumar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.6 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <motion.section
      id="profile"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ opacity, scale }}
    >
      <motion.div style={{ y }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", flexWrap: "wrap", width: "100%" }}>
          {/* Profile Picture with animated rings */}
          <motion.div
            className="profile-pic-wrapper"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {/* Animated orbit rings */}
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="orbit-ring orbit-ring-3" />

            {/* Orbit dots */}
            <div className="orbit-dot orbit-dot-1" />
            <div className="orbit-dot orbit-dot-2" />
            <div className="orbit-dot orbit-dot-3" />

            <div className="section__pic-container">
              <img src={profilePic} alt="Shashi Kumar profile picture" />
            </div>
          </motion.div>

          <div className="section__text">
            <motion.p className="section__text__p1" {...fadeUp(0.4)}>
              Hello, I'm
            </motion.p>

            {/* Staggered character reveal for name */}
            <motion.h1
              className="title hero-name"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: "600px" }}
            >
              {nameText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div className="section__text__p2" {...fadeUp(0.9)} style={{ minHeight: "2.5em" }}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Expert",
                  2000,
                  "React Native Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                style={{
                  fontSize: "1.5em",
                  background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  display: "inline-block",
                }}
                repeat={Infinity}
                speed={40}
                deletionSpeed={60}
              />
            </motion.div>

            <motion.div className="btn-container" {...fadeUp(1.0)}>
              <motion.button
                className="btn btn-color-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(108, 99, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`${resumePdf}`)}
              >
                Resume
                <img
                  style={{
                    width: "18px",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.8,
                  }}
                  src={resumeImg}
                  alt="resume logo"
                />
              </motion.button>
              <motion.button
                className="btn btn-color-1"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(108, 99, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Info
              </motion.button>
            </motion.div>

            <motion.div id="socials-container" {...fadeUp(1.1)}>
              <motion.img
                src={linkedinIcon}
                alt="My LinkedIn profile"
                className="icon"
                whileHover={{
                  scale: 1.3,
                  rotate: 5,
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 12px rgba(108, 99, 255, 0.7))",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/prakash-gari-shashi-kumar-96941915a/",
                  )
                }
              />
              <motion.img
                src={githubIcon}
                alt="My Github profile"
                className="icon"
                whileHover={{
                  scale: 1.3,
                  rotate: -5,
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 12px rgba(0, 212, 255, 0.7))",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() => window.open("https://github.com/shashi2424/")}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
