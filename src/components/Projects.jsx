import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'MERN & Full-Stack' },
    { id: 'frontend-games', label: 'Frontend Games' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Real-Time Chat Application with AI Assistance (Voice & Text)',
      description: 'A secure full-stack real-time messaging application. Supports instant peer chat, MongoDB cloud storage, and voice/text generative AI assistance inside conversational threads.',
      category: 'fullstack',
      tech: ['React (Vite)', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB Atlas'],
      liveLink: 'https://sbhapp.netlify.app',
      githubLink: 'https://github.com/saurabhyadav1026/ss_chat_web',
      duration: 'July 2025 – Present',
      highlights: [
        'Developed a highly interactive real-time chat application using MERN Stack',
        'Implemented real-time messaging using Socket.io for instant communication',
        'Integrated AI-based text and voice assistance features',
        'Used MongoDB Atlas for cloud database management'
      ],
      icon: 'fa-comments',
      accentColor: 'purple'
    },
    {
      id: 2,
      title: 'Abhyas AI – Online Testing & Practice Platform',
      description: 'A scalable AI-powered practice testing and evaluation platform. Engineered secure dashboards, custom question banks, and grading metrics.',
      category: 'fullstack',
      tech: ['React (Vite)', 'Node.js', 'Express.js', 'MongoDB Atlas'],
      liveLink: 'https://abhyasai.app',
      githubLink: '',
      duration: 'June 2026 – Present',
      role: 'Group Project - Backend Leader',
      highlights: [
        'Led backend development using Node.js, Express.js, and MongoDB',
        'Developed 25+ REST APIs reducing response time by 30%, authentication, and database integration',
        'Collaborated with the frontend team to deliver a scalable AI-powered testing platform'
      ],
      icon: 'fa-graduation-cap',
      accentColor: 'cyan'
    },
    {
      id: 3,
      title: 'ATM Management System',
      description: 'A robust desktop application simulating banking operations, ledger management, and secure account sessions.',
      category: 'fullstack',
      tech: ['Java', 'JavaBeans', 'Swing', 'JDBC', 'MySQL'],
      liveLink: '',
      githubLink: 'https://github.com/saurabhyadav1026/ATM',
      duration: 'Academic Project',
      highlights: [
        'Simulated transactions for deposits, withdrawals, and balance inquiry',
        'Constructed custom database schema for user balance tables in MySQL',
        'Maintained transactional logs in database records',
        'Implemented validation checks for card numbers and PIN verification'
      ],
      icon: 'fa-money-bill-transfer',
      accentColor: 'purple'
    },
    {
      id: 4,
      title: 'Sudoku Game',
      description: 'An interactive web-based Sudoku puzzle game featuring generation algorithms and instant user cell conflict validation loops.',
      category: 'frontend-games',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://sbhyd.w3spaces.com/sudoku.html',
      githubLink: 'https://github.com/saurabhyadav1026/sudoku',
      duration: 'Frontend Project',
      imgUrl: '/sudoku_preview.jpg',
      highlights: [
        'Backtracking recursive puzzle generator and board solver logic',
        'Instant row/column cell conflict validation indicators',
        'Clean, responsive web interface deployed on w3spaces'
      ],
      icon: 'fa-table-cells',
      accentColor: 'cyan'
    },
    {
      id: 5,
      title: 'Ludo Game',
      description: 'An interactive web replication of the classic Ludo board game featuring local multiplayer turn queues and dice roll physics.',
      category: 'frontend-games',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://sbhyd.w3spaces.com/ludo.html',
      githubLink: 'https://github.com/saurabhyadav1026/ludo',
      duration: 'Frontend Project',
      imgUrl: '/ludo_preview.jpg',
      highlights: [
        'Maintained player turn queues and custom board path coordinates',
        'Implemented virtual dice roll mechanics and token collision actions',
        'Developed simple, responsive browser gameplay layout loops'
      ],
      icon: 'fa-gamepad',
      accentColor: 'purple'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="glow-bg glow-cyan"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Showcase Portfolio</span>
          <h2>Featured Projects</h2>
          <div className="section-line"></div>
          <p className="projects-subtitle-text">
            A hand-picked selection of full-stack MERN builds, AI-integrated platforms, and web games illustrating my engineering growth.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filters">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`project-filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`glass-card project-card border-${project.accentColor}`}
            >
              {/* Card visual banner decor */}
              <div className={`project-banner-decor gradient-${project.accentColor}`}>
                {project.imgUrl ? (
                  <img src={project.imgUrl} className="project-banner-img" alt={project.title} />
                ) : (
                  <>
                    <i className={`fa-solid ${project.icon} decor-icon`}></i>
                    <div className="decor-particles"></div>
                  </>
                )}
              </div>

              <div className="project-body">
                <div className="project-meta-info">
                  <span className="project-duration">{project.duration}</span>
                  {project.role && <span className="project-role-badge">{project.role}</span>}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Highlights list */}
                <div className="project-highlights">
                  <h4 className="highlights-title">Key Engineering Accomplishments:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <i className={`fa-solid fa-circle-check text-${project.accentColor}`}></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="project-links">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`btn btn-glow-short accent-${project.accentColor}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Demo
                    </a>
                  )}
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-short"
                    >
                      <i className="fa-brands fa-github"></i> Code
                    </a>
                  ) : (
                    project.category === 'fullstack' && (
                      <span className="code-badge-disabled">
                        <i className="fa-solid fa-lock"></i> Private Code
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
