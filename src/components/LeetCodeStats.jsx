import React, { useState, useEffect } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = () => {
  // Actual profile statistics as initial default values
  const defaultStats = {
    leetcode: {
      solved: 156,
      ranking: '1,077,824',
      easy: 74,
      medium: 72,
      hard: 10,
      acceptance: '56.1%',
      synced: false
    },
    github: {
      repos: 12,
      avatarUrl: 'https://i.ibb.co/ymVVT7L6/IMG-20250504-WA0008.jpg',
      synced: false,
      languages: [
        { name: 'JavaScript', percentage: 40 },
        { name: 'TypeScript', percentage: 25 },
        { name: 'Java', percentage: 20 },
        { name: 'HTML', percentage: 15 }
      ],
      reposList: [
        { name: 'ss_chat_web', description: 'MERN Chat web app', language: 'TypeScript', html_url: 'https://github.com/saurabhyadav1026/ss_chat_web' },
        { name: 'Bcrypt-App', description: 'Encryption/hashing application', language: 'JavaScript', html_url: 'https://github.com/saurabhyadav1026/Bcrypt-App' },
        { name: 'chatbot', description: 'Chatbot web portal', language: 'HTML', html_url: 'https://github.com/saurabhyadav1026/chatbot' },
        { name: 'clg-backend-project', description: 'College backend REST APIs', language: 'HTML', html_url: 'https://github.com/saurabhyadav1026/clg-backend-project' }
      ]
    }
  };

  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);

  // Helper for official GitHub language colors
  const getLangColor = (lang) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Java: '#b07219',
      Python: '#3572a5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      'C++': '#f34b7d',
      C: '#555555',
      'C#': '#178600'
    };
    return colors[lang] || '#8b5cf6';
  };

  useEffect(() => {
    const fetchRealTimeStats = async () => {
      let lcData = { ...defaultStats.leetcode };
      let ghData = { ...defaultStats.github };

      try {
        // Query alfa-leetcode-api endpoints concurrently
        const [profileRes, solvedRes] = await Promise.all([
          fetch('https://alfa-leetcode-api.onrender.com/saurabhyadav1026'),
          fetch('https://alfa-leetcode-api.onrender.com/saurabhyadav1026/solved')
        ]);

        if (profileRes.ok && solvedRes.ok) {
          const profileJson = await profileRes.json();
          const solvedJson = await solvedRes.json();
          
          let accRate = '56.1%';
          if (solvedJson.acSubmissionNum && solvedJson.totalSubmissionNum) {
            const acAllSub = solvedJson.acSubmissionNum.find(d => d.difficulty === 'All');
            const totAllSub = solvedJson.totalSubmissionNum.find(d => d.difficulty === 'All');
            if (acAllSub && totAllSub && totAllSub.submissions > 0) {
              accRate = ((acAllSub.submissions / totAllSub.submissions) * 100).toFixed(1) + '%';
            }
          }

          lcData = {
            solved: solvedJson.solvedProblem || 156,
            ranking: profileJson.ranking ? profileJson.ranking.toLocaleString() : '1,077,824',
            easy: solvedJson.easySolved || 74,
            medium: solvedJson.mediumSolved || 72,
            hard: solvedJson.hardSolved || 10,
            acceptance: accRate,
            synced: true
          };
        }
      } catch (err) {
        console.warn('LeetCode API fetch failed, using cached default values', err);
      }

      try {
        // Fetch GitHub profile statistics and all repositories to calculate language breakdown
        const [ghProfileRes, ghReposRes] = await Promise.all([
          fetch('https://api.github.com/users/saurabhyadav1026'),
          fetch('https://api.github.com/users/saurabhyadav1026/repos?sort=updated&per_page=30')
        ]);

        if (ghProfileRes.ok) {
          const ghProfileJson = await ghProfileRes.json();
          ghData.repos = ghProfileJson.public_repos;
          ghData.avatarUrl = ghProfileJson.avatar_url || defaultStats.github.avatarUrl;
          ghData.synced = true;
        }

        if (ghReposRes.ok) {
          const ghReposJson = await ghReposRes.json();
          
          // 1. Set the 4 latest repositories list
          ghData.reposList = ghReposJson.slice(0, 4).map(repo => ({
            name: repo.name,
            description: repo.description || 'Public GitHub Repository',
            language: repo.language || 'HTML/CSS/JS',
            html_url: repo.html_url
          }));

          // 2. Calculate language percentages across all retrieved repos
          const langCounts = {};
          let totalLanguages = 0;
          
          ghReposJson.forEach(repo => {
            if (repo.language) {
              langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
              totalLanguages++;
            }
          });

          if (totalLanguages > 0) {
            ghData.languages = Object.keys(langCounts).map(lang => ({
              name: lang,
              percentage: Math.round((langCounts[lang] / totalLanguages) * 100)
            })).sort((a, b) => b.percentage - a.percentage);
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch failed, using cached default values', err);
      }

      setStats({ leetcode: lcData, github: ghData });
      setLoading(false);
    };

    fetchRealTimeStats();
  }, []);

  const calculateDashArray = (solved, target = 100) => {
    const percent = Math.min((solved / target) * 100, 100);
    return `${percent}, 100`;
  };

  return (
    <section id="leetcode" className="section leetcode-section">
      <div className="glow-bg glow-purple"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real-Time Profiles</span>
          <h2>Problem Solving & GitHub Activity</h2>
          <div className="section-line"></div>
          <p className="leetcode-intro">
            Live integration fetching my active repository list, language stats, and LeetCode algorithmic problem-solving distribution.
          </p>
        </div>

        <div className="leetcode-grid">
          {/* Column 1: LeetCode Dashboard Card */}
          <div className="glass-card leetcode-card">
            <div className="lc-header">
              <div className="lc-brand">
                <i className="fa-solid fa-code lc-icon"></i>
                <div>
                  <h4>LeetCode Stats</h4>
                  <a 
                    href="https://leetcode.com/u/saurabhyadav1026" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="lc-username"
                  >
                    @saurabhyadav1026 <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              
              <span className={`sync-badge ${stats.leetcode.synced ? 'synced' : 'cached'}`}>
                <span className="status-dot"></span>
                {stats.leetcode.synced ? 'Live Synced' : 'Cached Data'}
              </span>
            </div>

            <div className="lc-stats-grid">
              <div className="lc-stat-box">
                <span className="lc-stat-val">{stats.leetcode.solved}</span>
                <span className="lc-stat-label">Solved</span>
              </div>
              <div className="lc-stat-box">
                <span className="lc-stat-val">{stats.leetcode.ranking}</span>
                <span className="lc-stat-label">Global Rank</span>
              </div>
              <div className="lc-stat-box">
                <span className="lc-stat-val">{stats.leetcode.acceptance}</span>
                <span className="lc-stat-label">Acceptance</span>
              </div>
            </div>

            <h5 className="distribution-title">Difficulty Breakdown</h5>
            <div className="lc-distribution">
              {/* Easy */}
              <div className="dist-wheel-box">
                <div className="wheel-svg-container">
                  <svg className="wheel-svg" viewBox="0 0 36 36">
                    <path
                      className="wheel-bg-circle"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="wheel-fill-circle"
                      strokeDasharray={calculateDashArray(stats.leetcode.easy, 120)}
                      stroke="#00b8a3"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="wheel-label">
                    <span className="wheel-num">{stats.leetcode.easy}</span>
                  </div>
                </div>
                <span className="dist-label-text" style={{ color: '#00b8a3' }}>Easy</span>
              </div>

              {/* Medium */}
              <div className="dist-wheel-box">
                <div className="wheel-svg-container">
                  <svg className="wheel-svg" viewBox="0 0 36 36">
                    <path
                      className="wheel-bg-circle"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="wheel-fill-circle"
                      strokeDasharray={calculateDashArray(stats.leetcode.medium, 120)}
                      stroke="#ffb800"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="wheel-label">
                    <span className="wheel-num">{stats.leetcode.medium}</span>
                  </div>
                </div>
                <span className="dist-label-text" style={{ color: '#ffb800' }}>Medium</span>
              </div>

              {/* Hard */}
              <div className="dist-wheel-box">
                <div className="wheel-svg-container">
                  <svg className="wheel-svg" viewBox="0 0 36 36">
                    <path
                      className="wheel-bg-circle"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="wheel-fill-circle"
                      strokeDasharray={calculateDashArray(stats.leetcode.hard, 40)}
                      stroke="#ef476f"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="wheel-label">
                    <span className="wheel-num">{stats.leetcode.hard}</span>
                  </div>
                </div>
                <span className="dist-label-text" style={{ color: '#ef476f' }}>Hard</span>
              </div>
            </div>
          </div>

          {/* Column 2: Live GitHub Statistics Card */}
          <div className="glass-card github-stats-card">
            <div className="lc-header">
              <div className="lc-brand">
                <i className="fa-brands fa-github-alt github-stats-logo-icon"></i>
                <div>
                  <h4>GitHub Stats</h4>
                  <a 
                    href="https://github.com/saurabhyadav1026" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="lc-username"
                  >
                    @saurabhyadav1026 <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              
              <div className="github-sync-wrapper">
                <span className={`sync-badge ${stats.github.synced ? 'synced' : 'cached'}`}>
                  <span className="status-dot"></span>
                  {stats.github.synced ? 'Live Synced' : 'Cached Data'}
                </span>
                <img 
                  className="github-avatar-small" 
                  src={stats.github.avatarUrl} 
                  alt="GitHub Profile Avatar" 
                />
              </div>
            </div>

            {/* Split layout: Repos count card on the left, language stats on the right */}
            <div className="gh-stats-layout">
              <div className="lc-stat-box gh-repo-count-box">
                <span className="lc-stat-val">{stats.github.repos}</span>
                <span className="lc-stat-label">Public Repos</span>
              </div>
              
              <div className="gh-lang-stats-box">
                {stats.github.languages.slice(0, 4).map((lang, idx) => (
                  <div key={idx} className="gh-lang-bar-item">
                    <div className="gh-lang-bar-header">
                      <span className="gh-lang-bar-name">{lang.name}</span>
                      <span className="gh-lang-bar-percent">{lang.percentage}%</span>
                    </div>
                    <div className="gh-lang-bar-track">
                      <div 
                        className="gh-lang-bar-fill" 
                        style={{ width: `${lang.percentage}%`, backgroundColor: getLangColor(lang.name) }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live active repositories listing */}
            <h5 className="distribution-title">Latest Active Repositories</h5>
            <div className="gh-repos-list">
              {stats.github.reposList.map((repo, index) => (
                <a 
                  key={index} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gh-repo-item glass-card"
                >
                  <div className="gh-repo-header">
                    <span className="gh-repo-name">{repo.name}</span>
                    <span className="gh-repo-lang-badge">{repo.language}</span>
                  </div>
                  <p className="gh-repo-desc">{repo.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
