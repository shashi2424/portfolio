import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import mailLogo from "./assets/email.png";
import linkedLogo from "./assets/linkedin.png";

const InstagramIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, filter: "blur(10px)" },
    animate: isInView
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 50, filter: "blur(10px)" },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.12,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const contactMethods = [
    {
      icon: (
        <img
          src={mailLogo}
          alt="Email icon"
          className="icon contact-icon email-icon"
          style={{ width: "28px", height: "28px" }}
        />
      ),
      label: "Email",
      value: "shashi24kumar24@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=shashi24kumar24@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to%20connect...",
      hoverColor: "rgba(108, 99, 255, 0.08)",
      accentColor: "#6c63ff",
      borderGlow: "rgba(108, 99, 255, 0.3)",
    },
    {
      icon: (
        <img
          src={linkedLogo}
          alt="LinkedIn icon"
          className="icon contact-icon"
          style={{ width: "28px", height: "28px" }}
        />
      ),
      label: "LinkedIn",
      value: "Shashi Kumar",
      href: "https://www.linkedin.com/in/prakash-gari-shashi-kumar-96941915a",
      hoverColor: "rgba(0, 119, 181, 0.08)",
      accentColor: "#0077b5",
      borderGlow: "rgba(0, 119, 181, 0.3)",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      value: "@shashi_kumar",
      href: "https://www.instagram.com/shashikumar_2424",
      hoverColor: "rgba(225, 48, 108, 0.08)",
      accentColor: "#e1306c",
      borderGlow: "rgba(225, 48, 108, 0.3)",
    },
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      value: "Shashi Kumar",
      href: "https://www.facebook.com/shashi.kumar.psk.2025",
      hoverColor: "rgba(24, 119, 242, 0.08)",
      accentColor: "#1877f2",
      borderGlow: "rgba(24, 119, 242, 0.3)",
    },
  ];

  return (
    <section id="contact" ref={ref}>
      {/* Section divider */}
      <div className="section-divider" />

      <motion.p className="section__text__p1" {...fadeUp(0)}>
        Get in Touch
      </motion.p>
      <motion.h1 className="title" {...fadeUp(0.1)}>
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              borderColor: method.borderGlow,
              boxShadow: `0 0 30px ${method.borderGlow.replace("0.3", "0.15")}`,
              backgroundColor: method.hoverColor,
              y: -8,
            }}
            transition={{ duration: 0.25 }}
            className="contact-card glass-hover-card"
          >
            {/* Animated accent line */}
            <motion.div
              className="contact-card-accent"
              style={{ background: method.accentColor }}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <div
              className="contact-card-icon"
              style={{
                background: `${method.accentColor}15`,
                color: method.accentColor,
              }}
            >
              {method.icon}
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">{method.label}</span>
              <span className="contact-card-value">{method.value}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <style>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    max-width: 700px;
                    margin: 2rem auto 0;
                    padding: 0 1rem;
                }
                .contact-card {
                    display: flex;
                    align-items: center;
                    gap: 0.85rem;
                    padding: 1.15rem 1.25rem;
                    background: var(--bg-glass);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid var(--border-glass);
                    border-radius: var(--border-radius-md);
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                    transition: border-color 0.3s, box-shadow 0.3s, background-color 0.3s;
                    position: relative;
                    overflow: hidden;
                }
                .contact-card-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 2px;
                    border-radius: 2px;
                }
                .contact-card-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .contact-card-text {
                    min-width: 0;
                    overflow: hidden;
                }
                .contact-card-label {
                    display: block;
                    font-size: 0.7rem;
                    font-weight: 500;
                    color: var(--text-muted);
                    margin-bottom: 0.15rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }
                .contact-card-value {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @media (max-width: 600px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        max-width: 400px;
                    }
                    .contact-card {
                        padding: 1rem 1.15rem;
                    }
                    .contact-card-value {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
    </section>
  );
};

export default Contact;
