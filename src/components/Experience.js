import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    // Animation variants
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Dummy experience data
    const experiences = [
        {
            id: 1,
            role: "Junior Software Engineer",
            company: "Way2news Private Limited",
            location: "Hyderabad",
            period: "June 2023 - Present",
            description: [
                "Architected a YouTube multi-channel video publishing platform serving 300,000+ subscribers, implementing strategic content distribution mechanisms",
                "Created Way2Experts, connecting 100+ experts with 10,000+ users across diverse domains",
                "Developed the Way2Ads Management System, enabling advertisers, sales, and ad operations teams to create, manage,and monitor campaigns seamlessly while accessing detailed performance reports.",
                "Integrated third-party APIs and optimized application performance, reducing load time by 60%"
            ],
            logo: "/assets/company-logo-1.png"
        },
        {
            id: 2,
            role: "Software Engineer Intern",
            company: "Way2news Private Limited",
            location: "Hyderabad",
            period: "October 2022 - May 2023",
            description: [
                "Strategically designed an advertisement management system using React.js and Node.js, resulting in revenue growth by 60%",
                "Implemented JWT-based authorization system enhancing security protocols for sensitive user data",
                "Implemented CRUD operations for database credential management, enhancing security and access control. Utilized Redux for efficient state management across components."
            ],
            logo: "/assets/company-logo-1.png"
        }
    ];

    return (
        <section id="experience" ref={ref}>
            <motion.p
                className="section__text__p1"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                My Professional
            </motion.p>
            <motion.h1
                className="title"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                            scale: 1.02,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <div className="experience-header">
                            <div className="company-logo-container">
                                <motion.img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="company-logo"
                                    whileHover={{ scale: 1.1 }}
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
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ 
                                            delay: 0.4 + (index * 0.2),
                                            duration: 0.5
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
                src="/assets/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                whileHover={{ scale: 1.2, y: 5 }}
                animate={{ y: [0, 5, 0] }}
                transition={{
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                    scale: { type: "spring", stiffness: 300 }
                }}
                onClick={() => {
                    document.getElementById('projects').scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            />

            <style>{`
                .experience-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }
                
                .experience-card {
                    background-color: #ffffff;
                    border-radius: 12px;
                    padding: 1.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .experience-header {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
                
                .company-logo-container {
                    width: 60px;
                    height: 60px;
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: #f5f5f5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .company-logo {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                
                .job-details {
                    flex: 1;
                }
                
                .job-title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin: 0 0 0.3rem 0;
                    color: #333;
                }
                
                .company-name {
                    font-size: 1.1rem;
                    font-weight: 500;
                    margin: 0 0 0.3rem 0;
                    color: #555;
                }
                
                .job-period, .job-location {
                    font-size: 0.9rem;
                    color: #777;
                    margin: 0.2rem 0;
                }
                
                .job-description ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-top: 0.5rem;
                }
                
                .description-bullet {
                    margin-bottom: 0.75rem;
                    line-height: 1.6;
                    color: #444;
                }
                
                @media (max-width: 768px) {
                    .experience-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    
                    .company-logo-container {
                        width: 50px;
                        height: 50px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;