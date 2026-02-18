import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import companyLogo from "./assets/company-logo-1.png";
import arrowLogo from "./assets/arrow.png";

const Experience = () => {
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
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const experiences = [
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "Way2news Private Limited",
      location: "Hyderabad",
      period: "June 2023 - Present",
      description: [
        "Designed and deployed an AI-powered language learning platform integrating LiveKit SDK, WebSockets and Text-to-Speech APIs, enabling real-time low-latency communication for thousands of concurrent users.",
        "Led the end-to-end architecture and backend development of the Way2Experts consultation platform, integrating real-time chat, voice communication, and secure payment processing (Cashfree,Razorpay), managing 50,000+ consultation records in PostgreSQL.",
        "Architected an automated multi-platform content distribution system managing 40+ YouTube channels (300,000+ subscribers), centralizing publishing workflows across YouTube, Instagram, and Facebook with analytics tracking.",
        "Integrated third-party APIs and optimized application performance, reducing load time by 60%",
      ],
      logo: companyLogo,
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Way2news Private Limited",
      location: "Hyderabad",
      period: "October 2022 - May 2023",
      description: [
        "Developed the Way2Ads Management System, enabling advertisers, sales, and ad operations teams to create, manage, and monitor campaigns seamlessly while accessing detailed performance reports.",
        "Implemented JWT-based authorization system enhancing security protocols for sensitive user data",
        "Improved frontend performance through pagination, error handling, and dynamic data visualization (Chart.js), reducing page load time by 40%",
      ],
      logo: companyLogo,
    },
  ];

  return (
    <section id="experience" ref={ref}>
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        My Professional
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
        Experience
      </motion.h1>

      <motion.div
        className="experience-timeline"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            variants={item}
            whileHover={{
              scale: 1.01,
              borderColor: "rgba(108, 99, 255, 0.3)",
              boxShadow: "0 0 40px rgba(108, 99, 255, 0.12)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="experience-header">
              <div className="company-logo-container">
                <motion.img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onError={(e) => {
                    e.target.src = "";
                  }}
                />
              </div>
              <div className="job-details">
                <h3 className="job-title">{exp.role}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="job-period">{exp.period}</p>
                <p className="job-location">{exp.location}</p>
              </div>
            </div>

            <div className="job-description">
              <ul>
                {exp.description.map((bullet, index) => (
                  <motion.li
                    key={index}
                    className="description-bullet"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.15,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.img
        src={arrowLogo}
        alt="Arrow icon"
        className="icon arrow"
        animate={{ y: [0, 8, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        onClick={() => {
          document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
          });
        }}
        style={{ cursor: "none", display: "block", margin: "2rem auto 0" }}
      />
    </section>
  );
};

export default Experience;
