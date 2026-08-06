import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'web-frontend', label: 'Frontend' },
    { id: 'web-backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'tools-cloud', label: 'Tools & Cloud' }
  ];

  const skillsData = [
    // Languages
    { name: 'Java', category: 'languages', icon: 'devicon-java-plain colored' },
    { name: 'Python', category: 'languages', icon: 'devicon-python-plain colored' },
    { name: 'C++', category: 'languages', icon: 'devicon-cplusplus-plain colored' },
    { name: 'C Language', category: 'languages', icon: 'devicon-c-plain colored' },
    { name: 'JavaScript', category: 'languages', icon: 'devicon-javascript-plain colored' },
    { name: 'C#', category: 'languages', icon: 'devicon-csharp-plain colored' },
    { name: 'HTML5', category: 'languages', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', category: 'languages', icon: 'devicon-css3-plain colored' },

    // Web Frontend
    { name: 'React.js', category: 'web-frontend', icon: 'devicon-react-original colored' },
    { name: 'Vite', category: 'web-frontend', icon: 'devicon-vitejs-plain colored' },
    { name: 'Responsive UI Design', category: 'web-frontend', icon: 'fa-solid fa-mobile-screen-button text-cyan' },
    { name: 'Component Development', category: 'web-frontend', icon: 'fa-solid fa-cubes text-purple' },

    // Web Backend & APIs
    { name: 'Node.js', category: 'web-backend', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express.js', category: 'web-backend', icon: 'devicon-express-original-wordmark' },
    { name: 'ASP.NET (.NET)', category: 'web-backend', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'REST API Development', category: 'web-backend', icon: 'fa-solid fa-gears text-cyan' },
    { name: 'Socket.IO', category: 'web-backend', icon: 'devicon-socketio-original' },
    { name: 'MERN Stack Development', category: 'web-backend', icon: 'fa-solid fa-server text-purple' },

    // Database & SQL
    { name: 'MongoDB', category: 'database', icon: 'devicon-mongodb-plain colored' },
    { name: 'SQL', category: 'database', icon: 'fa-solid fa-table text-cyan' },
    { name: 'MySQL', category: 'database', icon: 'devicon-mysql-original-wordmark colored' },
    { name: 'DBMS Concepts', category: 'database', icon: 'fa-solid fa-database text-purple' },

    // Tools & Cloud
    { name: 'Git', category: 'tools-cloud', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', category: 'tools-cloud', icon: 'devicon-github-original' },
    { name: 'MongoDB Atlas', category: 'tools-cloud', icon: 'fa-solid fa-cloud-arrow-up text-cyan' },
    { name: 'Microsoft Azure', category: 'tools-cloud', icon: 'devicon-azure-plain colored' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="glow-bg glow-purple"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Strengths</span>
          <h2>My Skills Stack</h2>
          <div className="section-line"></div>
          <p className="skills-subtitle">
            A comprehensive overview of programming languages, tools, frameworks, and APIs I utilize to engineer applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="glass-card skill-card animate-skill">
              <div className="skill-header">
                <div className="skill-icon-box">
                  {skill.icon.startsWith('fa-') ? (
                    <i className={`${skill.icon} skill-fa-icon`}></i>
                  ) : (
                    <i className={`${skill.icon} skill-dev-icon`}></i>
                  )}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Academic focus indicators */}
        <div className="academic-focus-box glass-card">
          <div className="academic-header">
            <i className="fa-solid fa-graduation-cap academic-icon"></i>
            <div>
              <h3>Core Computer Science Concepts</h3>
              <p>Key academic engineering constructs studied in class and implemented in lab systems</p>
            </div>
          </div>
          <div className="academic-skills-grid">
            <div className="academic-badge">Object-Oriented Programming (OOPs)</div>
            <div className="academic-badge">Data Structures & Algorithms (DSA)</div>
            <div className="academic-badge">Software Development Life Cycle (SDLC)</div>
            <div className="academic-badge">Problem Solving</div>
            <div className="academic-badge">Database Management Systems (DBMS)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
