import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitting: false, success: false, error: 'Please fill out all fields.' });
      return;
    }

    setFormStatus({ submitting: true, success: false, error: null });

    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="glow-bg glow-cyan"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Reach Out</span>
          <h2>Contact Me</h2>
          <div className="section-line"></div>
          <p className="contact-intro">
            Have a project in mind, want to discuss software engineering opportunities, or talk AI/ML? Drop a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information Cards */}
          <div className="contact-info">
            <h3 className="contact-title">Let's Connect</h3>
            <p className="contact-text">
              I am open to full-time engineering placements, collaborative open-source opportunities, or general backend/MERN contract development.
            </p>

            <div className="info-cards-list">
              {/* Email Card */}
              <div className="glass-card info-item-card">
                <div className="info-item-icon color-purple">
                  <i className="fa-solid fa-envelope-open"></i>
                </div>
                <div className="info-item-body">
                  <h5>Email Address</h5>
                  <a href="mailto:saurabhyadav7041916@gmail.com" className="info-item-link">
                    saurabhyadav7041916@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card info-item-card">
                <div className="info-item-icon color-cyan">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-item-body">
                  <h5>Phone Number</h5>
                  <a href="tel:+918303114126" className="info-item-link">
                    +91 8303114126
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card info-item-card">
                <div className="info-item-icon color-purple">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="info-item-body">
                  <h5>Current Location</h5>
                  <span className="info-item-val">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              {/* University Card */}
              <div className="glass-card info-item-card">
                <div className="info-item-icon color-cyan">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="info-item-body">
                  <h5>Education Status</h5>
                  <span className="info-item-val">B.Tech CSE (AI & ML) - 3rd Year</span>
                </div>
              </div>
            </div>

            {/* Social channels block */}
            <h4 className="social-block-title">Follow My Activity</h4>
            <div className="contact-social-icons">
              <a href="https://github.com/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/saurabhyadav704" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LeetCode">
                <i className="fa-solid fa-code"></i>
                <span>LeetCode</span>
              </a>
              <a href="https://www.geeksforgeeks.org/profile/saurabhyadav1026" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GeeksforGeeks">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>GFG Profile</span>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 className="contact-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              {formStatus.error && (
                <div className="form-alert alert-danger">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.success && (
                <div className="form-alert alert-success">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-user input-icon"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-envelope input-icon"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <div className="input-wrapper textarea-wrapper">
                  <i className="fa-solid fa-comment-dots input-icon textarea-icon"></i>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-glow submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
