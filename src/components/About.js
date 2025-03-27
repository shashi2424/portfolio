import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    // Reference for scroll animation
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        threshold: 0.2,
        margin: "0px 0px -100px 0px"
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Skills animation variants
    const skillsContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const skillItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

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
                        {/* Image Container with Fixed Aspect Ratio */}
                        <motion.div
                            variants={itemVariants}
                            className="section__pic-container about-image-container"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '400px',
                                margin: '0 auto',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                aspectRatio: '1/1', // Force 1:1 aspect ratio
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src="/assets/about-pic.jpeg"
                                alt="Portrait photograph"
                                className="about-pic"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Ensures image covers the container
                                    objectPosition: 'center', // Centers the image
                                    borderRadius: '20px'
                                }}
                            />
                        </motion.div>

                        {/* About Details */}
                        <div className="about-details-container">
                            <div className="about-containers">
                                {/* Experience Box */}
                                <motion.div
                                    variants={itemVariants}
                                    className="details-container"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <motion.img
                                        src="/assets/experience.png"
                                        alt="Experience icon"
                                        className="icon"
                                        whileHover={{ rotate: 5 }}
                                    />
                                    <h3>Experience</h3>
                                    <p>2+ years <br />Full Stack Developer</p>
                                </motion.div>

                                {/* Education Box */}
                                <motion.div
                                    variants={itemVariants}
                                    className="details-container"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <motion.img
                                        src="/assets/education.png"
                                        alt="Education icon"
                                        className="icon"
                                        whileHover={{ rotate: -5 }}
                                    />
                                    <h3>Education</h3>
                                    <p>Bachelors Of Technology<br />Computer Science</p>
                                </motion.div>
                            </div>

                            {/* About Text */}
                            <motion.div
                                variants={itemVariants}
                                className="text-container"
                            >
                                <p>
                                    As a Full Stack Developer with over 2 years of experience, I specialize in the MERN stack, building scalable and high-performance web applications. I have a strong foundation in front-end and back-end development, ensuring seamless user experiences and efficient data handling.
                                </p>
                                <p>
                                    My expertise extends to real-time functionalities, integrating WebSocket for live interactions and optimizing databases for speed and scalability. I have worked on deploying secure, production-grade applications while implementing best practices for authentication, authorization, and data protection.
                                </p>
                                <p>
                                    Additionally, I have experience integrating AI/ML solutions into web applications, enhancing automation and decision-making capabilities. Passionate about leveraging cutting-edge technologies, I strive to create innovative, user-centric solutions that drive business growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Skills Section (merged from Experience.js) */}
                    <motion.div
                        variants={itemVariants}
                        className="skills-section"
                        style={{ marginTop: '3rem' }}
                    >
                        <h1 className="title">My Skills</h1>
                        <motion.div
                            className="experience-details-container"
                            variants={skillsContainer}
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                        >
                            <div className="about-containers">
                                <motion.div
                                    className="details-container"
                                    variants={skillItem}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <h2 className="experience-sub-title">Frontend Development</h2>
                                    <div className="article-container">
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>HTML</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>CSS</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>React JS</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>JavaScript</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>React Native</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Bootstrap</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </motion.article>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="details-container"
                                    variants={skillItem}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <h2 className="experience-sub-title">Backend Development</h2>
                                    <div className="article-container">
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Node JS</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Express JS</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>Flask</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </motion.article>
                                        <motion.article variants={skillItem}>
                                            <img
                                                src="/assets/checkmark.png"
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>WebSocket</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </motion.article>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Navigation Arrow */}
                    <motion.div className="arrow-container">
                        <motion.img
                            src="/assets/arrow.png"
                            alt="Arrow pointing to next section"
                            className="icon arrow"
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, y: 5 }}
                            animate={{ y: [0, 5, 0] }}
                            transition={{
                                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                                scale: { type: "spring", stiffness: 300 }
                            }}
                            onClick={() => {
                                document.getElementById('experience').scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Add these styles to your CSS or create a style tag */}
            <style>{`
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
            min-height: 120vh; /* Ensure enough space in short landscape modes */
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