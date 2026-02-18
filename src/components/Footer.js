import React from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prakash-gari-shashi-kumar-96941915a",
      icon: linkedinIcon,
    },
    { name: "GitHub", url: "https://github.com/shashi2424", icon: githubIcon },
  ];

  const navLinks = [
    { name: "Home", to: "top", onClick: () => scroll.scrollToTop() },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.footer
      className="portfolio-footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="portfolio-footer-container">
        <motion.div className="portfolio-footer-logo" variants={linkVariants}>
          <h2 className="portfolio-logo">SK.</h2>
          <p className="portfolio-footer-tagline">Full Stack Developer</p>
        </motion.div>

        <motion.div className="portfolio-footer-nav" variants={listVariants}>
          <ul className="portfolio-footer-nav-links">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                whileHover={{ x: 3, color: "#6c63ff" }}
              >
                {link.name === "Home" ? (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    href="#"
                    className="portfolio-footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    smooth="easeInOutQuart"
                    duration={600}
                    offset={-70}
                    className="portfolio-footer-link"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="portfolio-footer-social" variants={listVariants}>
          <h3 className="portfolio-footer-heading">Connect</h3>
          <div className="portfolio-social-icons-container">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-icon-link"
                variants={linkVariants}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="portfolio-icon portfolio-social-icon"
                />
                <span className="portfolio-social-name">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="portfolio-footer-bottom" variants={linkVariants}>
        <p className="portfolio-copyright">
          &copy; {currentYear} Shashi Kumar. All Rights Reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
