/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profilePic from "./assets/profile-pic.jpeg";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import resumeImg from "./assets/resume.png";
import resumePdf from "./assets/resume-example.pdf";

const Profile = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <motion.section
      id="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="section__pic-container"
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <img src={profilePic} alt="Shashi Kumar profile picture" />
      </motion.div>

      <div className="section__text">
        <motion.p className="section__text__p1" {...fadeUp(0.4)}>
          Hello, I'm
        </motion.p>

        <motion.h1 className="title" {...fadeUp(0.5)}>
          Shashi Kumar
        </motion.h1>

        <motion.div className="section__text__p2" {...fadeUp(0.6)}>
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
            }}
            repeat={Infinity}
            speed={40}
            deletionSpeed={60}
          />
        </motion.div>

        <motion.div className="btn-container" {...fadeUp(0.7)}>
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

        <motion.div id="socials-container" {...fadeUp(0.8)}>
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
    </motion.section>
  );
};

export default Profile;
