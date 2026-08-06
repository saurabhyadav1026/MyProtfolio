import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer-area">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">&lt;Saurabh <span className="logo-accent">Yadav</span> /&gt;</span>
            <p className="footer-tagline">Building secure, scalable, and intelligent web applications.</p>
          </div>

          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScrollTo('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>Projects</a></li>
            <li><a href="#leetcode" onClick={(e) => { e.preventDefault(); handleScrollTo('leetcode'); }}>LeetCode</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; {currentYear} Saurabh Yadav. All rights reserved.</span>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/saurabhyadav704" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://leetcode.com/u/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LeetCode">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="https://www.geeksforgeeks.org/profile/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GeeksforGeeks">
              <i className="fa-solid fa-graduation-cap"></i>
            </a>
            <a href="mailto:saurabhyadav7041916@gmail.com" className="footer-social-btn" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <div className="footer-credit">
            <span>Handcrafted in Lucknow, India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
