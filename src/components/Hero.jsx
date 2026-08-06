import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const roles = [
    'Full Stack MERN Developer',
    'Backend systems engineer',
    'AI & ML Specialist Student',
    'ASP.NET / C# Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="glow-bg glow-purple"></div>
      <div className="glow-bg glow-cyan"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-glow"></span>
            <span className="badge-text">
              <i className="fa-solid fa-bolt text-secondary"></i> Available for Opportunities
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I am <span className="highlight-name">Saurabh Yadav</span>
          </h1>

          <div className="hero-subtitle">
            <span className="static-text">I am a </span>
            <span className="dynamic-text">
              {displayText}
              <span className="cursor"></span>
            </span>
          </div>

          <p className="hero-description">
            Computer Science undergraduate specializing in AI & ML with strong knowledge of Java, Python, C++, .NET, SQL, MySQL, DBMS, and MERN Stack development. Experienced in building full-stack web applications, designing RESTful APIs, and solving real-world problems.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-glow"
              onClick={() => handleScrollTo('projects')}
            >
              <i className="fa-solid fa-eye"></i> View Projects
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => handleScrollTo('contact')}
            >
              <i className="fa-solid fa-envelope"></i> Contact Me
            </button>
            <a 
              href="#resume" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download is active. Please link your actual resume.pdf inside the /public directory!");
              }}
            >
              <i className="fa-solid fa-file-arrow-down"></i> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/saurabhyadav704" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://leetcode.com/u/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LeetCode">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="https://www.geeksforgeeks.org/profile/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GeeksforGeeks">
              <i className="fa-solid fa-graduation-cap"></i>
            </a>
            <a href="mailto:saurabhyadav7041916@gmail.com" className="social-icon-btn" aria-label="Email">
              <i className="fa-solid fa-envelope-open"></i>
            </a>
          </div>
        </div>

        {/* Hero Visual Element - AI Core with Profile Image */}
        <div className="hero-visual">
          <div className="ai-core-container float-anim">
            <div className="orbital-ring ring-1"></div>
            <div className="orbital-ring ring-2"></div>
            <div className="orbital-ring ring-3"></div>
            
            <div className="core-glass">
              <img 
                src="https://i.ibb.co/ymVVT7L6/IMG-20250504-WA0008.jpg" 
                className="profile-img" 
                alt="Saurabh Yadav Profile" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
            </div>

            <div className="tech-dot dot-1"><i className="fa-brands fa-react"></i></div>
            <div className="tech-dot dot-2"><i className="fa-brands fa-node-js"></i></div>
            <div className="tech-dot dot-3"><i className="fa-brands fa-python"></i></div>
            <div className="tech-dot dot-4"><i className="fa-brands fa-java"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
