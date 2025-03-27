import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import project1 from "./assets/project-1.png"
import project2 from "./assets/project-2.jpg"
import project3 from "./assets/project-3.jpg"
import arrow from "./assets/arrow.png"


const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const projects = [
        {
            title: "Way2Experts Professional Consultation Platform",
            image: `${project1}`,
            description: "Developed a real-time communication platform enabling professionals to offer consultations across multiple domains. Built a scalable Node.js backend supporting 1000+ concurrent users with minimal latency. Integrated payment gateways, real-time chat via WebSocket, and Exotel API for seamless call management."
        },
        {
            title: "Way2Ads Management System",
            image: `${project2}`,
            description: "Developed an ad management system using React.js and Node.js, optimizing ad delivery and tracking. Designed efficient database queries in PostgreSQL and MongoDB, improving data retrieval by 40%. Implemented role-based access control with custom interfaces for five permission levels."
        },
        {
            title: "YouTube Multi-channel Publishing Platform",
            image:  `${project3}`,
            description: "Built a scalable publishing platform for YouTube, serving 300,000+ subscribers with optimized content distribution. Automated video creation using templates via a cron job, streamlining publishing across YouTube, Instagram, and Facebook."
        }
    ];

    return (
        <section id="projects" ref={ref}>
            <motion.p
                className="section__text__p1"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                Browse My Recent
            </motion.p>
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Projects
            </motion.h1>
            <motion.div
                className="experience-details-container"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="about-containers">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="details-container color-container"
                            variants={item}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="article-container">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">{project.title}</h2>
                            <p className="project-description">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.img
                src={arrow}
                alt="Arrow icon"
                className="icon arrow"
                whileHover={{ scale: 1.2, y: 5 }}
                animate={{ y: [0, 5, 0] }}
                transition={{
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                    scale: { type: "spring", stiffness: 300 }
                }}
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            />

            <style>{`
                .project-description {
                    padding: 0 1rem;
                    text-align: center;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }

                .details-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 1rem;
                }

                .article-container {
                    margin-bottom: 1rem;
                }

                .project-img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default Projects;