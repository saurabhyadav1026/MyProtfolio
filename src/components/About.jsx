import React from 'react';
import './About.css';

const About = () => {
  const focusAreas = [
    { title: 'Full Stack Development', icon: 'fa-layer-group', desc: 'MERN stack & .NET/C# backends' },
    { title: 'Backend Engineering', icon: 'fa-server', desc: 'Designing secure, scalable RESTful APIs' },
    { title: 'Real-Time Apps', icon: 'fa-comments', desc: 'Websockets, real-time sync with Socket.io' },
    { title: 'AI Integration', icon: 'fa-brain', desc: 'GenAI text & voice workflows in web applications' },
    { title: 'Database Design', icon: 'fa-database', desc: 'Optimizing SQL, MySQL & MongoDB schemas' },
    { title: 'Problem Solving', icon: 'fa-laptop-code', desc: 'Actively solving DSA problems' }
  ];

  const learningList = [
    'Django REST Framework',
    'Microsoft Azure Cloud',
    'AI Engineering Workflows',
    'DevOps CI/CD basics',
    'Advanced System Design',
    'Enterprise C#/.NET structures'
  ];

  const certificationsList = [
    {
      title: 'Advanced MERN Stack Training',
      issuer: 'Edrealm',
      honor: 'Best Performer',
      icon: 'fa-solid fa-award text-purple'
    },
    {
      title: 'Data Structures & Algorithms (Intermediate)',
      issuer: 'TrainX',
      honor: '',
      icon: 'fa-solid fa-award text-cyan'
    }
  ];

  const achievementsList = [
    {
      desc: 'Solved **200+ Data Structures & Algorithms** and programming problems across **LeetCode, GeeksforGeeks, and HackerRank**.',
      icon: 'fa-solid fa-circle-nodes text-cyan'
    },
    {
      desc: 'Awarded **Best Performer** in Advanced MERN Stack Training conducted by **Edrealm**.',
      icon: 'fa-solid fa-trophy text-purple'
    },
    {
      desc: 'Led backend development as **Backend Leader** for Abhyas AI, designing **25+ REST APIs** and optimizing database structures.',
      icon: 'fa-solid fa-bolt text-cyan'
    }
  ];

  const renderDescription = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="about" className="section about-section">
      <div className="glow-bg glow-accent"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2>About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          {/* Column 1: Profile DP Card */}
          <div className="about-profile-wrapper">
            <div className="glass-card about-profile-card">
              <div className="profile-dp-container">
                <img 
                  src="https://i.ibb.co/ymVVT7L6/IMG-20250504-WA0008.jpg" 
                  alt="Saurabh Yadav Profile" 
                  className="about-profile-dp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/250';
                  }}
                />
                <div className="dp-glow-glow"></div>
              </div>
              <div className="profile-meta">
                <h4>Saurabh Yadav</h4>
                <span className="profile-role">Full Stack MERN Developer</span>
                <span className="profile-location">
                  <i className="fa-solid fa-location-dot text-cyan"></i> Lucknow, India
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Story & Learning */}
          <div className="about-story">
            <h3 className="story-title">My Journey</h3>
            <p className="story-text">
              I am Saurabh Yadav, a Computer Science Engineering student specializing in **Artificial Intelligence and Machine Learning** at R.R Group of Modern Technology, Lucknow (AKTU).
            </p>
            <p className="story-text">
              I am passionate about full-stack web development, backend engineering, real-time applications, and building secure, scalable products. I enjoy solving problems, learning new technologies, and creating practical software that feels fast, clean, and useful.
            </p>

            <h3 className="story-title sub-title">Currently Learning & Improving</h3>
            <div className="learning-grid">
              {learningList.map((item, idx) => (
                <div key={idx} className="learning-item">
                  <i className="fa-solid fa-circle-arrow-up text-secondary"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Focus Areas */}
          <div className="about-focus">
            <h3 className="story-title">Core Focus</h3>
            <div className="focus-cards-grid">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="glass-card focus-card">
                  <div className="focus-icon-wrapper">
                    <i className={`fa-solid ${area.icon}`}></i>
                  </div>
                  <div className="focus-card-info">
                    <h4>{area.title}</h4>
                    <p>{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline Area */}
        <div className="education-container">
          <div className="section-header sub-header">
            <h3>Academic Background</h3>
            <p>My formal education milestones and school credentials</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <span className="timeline-date">2023 - Present (till 6th sem)</span>
                <h4 className="timeline-title">Bachelor of Technology (Computer Science & Engineering)</h4>
                <span className="timeline-institution">
                  Specialization in Artificial Intelligence & Machine Learning
                </span>
                <span className="timeline-university">
                  R.R Group of Modern Technology, Lucknow (AKTU University)
                </span>
                <p className="timeline-desc">
                  Studying algorithms, machine learning workflows, database systems, networks, and system designs.
                </p>
                <div className="timeline-badge-wrapper">
                  <span className="timeline-badge">CGPA: 8.2 (82.06%)</span>
                  <span className="timeline-badge secondary-badge">Active Student</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <span className="timeline-date">2021 - 2022</span>
                <h4 className="timeline-title">Intermediate (Maths)</h4>
                <span className="timeline-institution">
                  Higher Secondary Education
                </span>
                <span className="timeline-university">
                  NSS Inter College, Lucknow (UP BOARD)
                </span>
                <p className="timeline-desc">
                  Focused on Mathematics, Physics, Chemistry, and fundamentals of logical analysis.
                </p>
                <div className="timeline-badge-wrapper">
                  <span className="timeline-badge secondary-badge">Percentage: 80.6%</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <span className="timeline-date">2019 - 2020</span>
                <h4 className="timeline-title">High School</h4>
                <span className="timeline-institution">
                  Secondary School Education
                </span>
                <span className="timeline-university">
                  NSS Inter College, Lucknow (UP BOARD)
                </span>
                <p className="timeline-desc">
                  Acquired basic foundational sciences, mathematics, and analytical reasoning courses.
                </p>
                <div className="timeline-badge-wrapper">
                  <span className="timeline-badge secondary-badge">Percentage: 85.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Block */}
        <div className="certifications-container">
          <div className="section-header sub-header">
            <h3>Professional Certifications</h3>
            <p>Industry-recognized achievements and technical training completions</p>
          </div>

          <div className="certifications-grid">
            {certificationsList.map((cert, idx) => (
              <div key={idx} className="glass-card certification-card">
                <div className="cert-icon-box">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-body">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">Issuer: {cert.issuer}</span>
                  {cert.honor && (
                    <span className="cert-honor">
                      <i className="fa-solid fa-star text-yellow-500"></i> {cert.honor}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements Block */}
        <div className="achievements-container">
          <div className="section-header sub-header">
            <h3>Key Achievements</h3>
            <p>Milestones and highlights of my developer journey</p>
          </div>

          <div className="achievements-grid">
            {achievementsList.map((ach, idx) => (
              <div key={idx} className="glass-card achievement-card">
                <div className="ach-icon-box">
                  <i className={ach.icon}></i>
                </div>
                <p className="ach-desc">{renderDescription(ach.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
