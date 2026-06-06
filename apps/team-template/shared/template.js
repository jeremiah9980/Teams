/**
 * Team Template Engine
 * Generates pages from team configuration
 */

class TeamTemplate {
  constructor(teamKey) {
    this.team = TEAM_CONFIGS[teamKey];
    if (!this.team) {
      throw new Error(`Team "${teamKey}" not found in config`);
    }
    this.applyTheme();
  }

  applyTheme() {
    const root = document.documentElement;
    const colors = this.team.colors;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-dark', colors.textDark);
    root.style.setProperty('--color-gradient', colors.gradient);
    root.style.setProperty('--color-glow', colors.glow);
  }

  generateNavbar() {
    const enabledPages = Object.entries(this.team.pages)
      .filter(([_, page]) => page.enabled)
      .map(([key, page]) => ({ key, ...page }));

    return `
      <nav class="navbar">
        <div class="navbar-inner">
          <a href="index.html" class="navbar-brand">
            <img src="${this.team.logo}" alt="${this.team.shortName}" class="navbar-logo" onerror="this.style.display='none'">
            <span class="navbar-title">${this.team.shortName}</span>
          </a>
          <button class="navbar-toggle" onclick="toggleNav()">☰</button>
          <ul class="navbar-nav" id="navMenu">
            ${enabledPages.map(page => `
              <li><a href="${page.key}.html" class="nav-link">${page.title}</a></li>
            `).join('')}
          </ul>
        </div>
      </nav>
    `;
  }

  generateHero(options = {}) {
    const { showCta = true, bgImage = '' } = options;

    return `
      <section class="hero">
        ${bgImage ? `<div class="hero-bg" style="background-image: url('${bgImage}')"></div>` : ''}
        <div class="hero-content">
          <img src="${this.team.logo}" alt="${this.team.name}" class="hero-logo" onerror="this.style.display='none'">
          <h1 class="hero-title">${this.team.name}</h1>
          <p class="hero-slogan">${this.team.slogan}</p>
          <p class="hero-tagline">${this.team.tagline}</p>
          ${showCta ? `
            <div class="hero-cta">
              <a href="contact.html" class="btn btn-primary">Join Our Team</a>
              <a href="about.html" class="btn btn-outline">Learn More</a>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  generateFooter() {
    const enabledPages = Object.entries(this.team.pages)
      .filter(([_, page]) => page.enabled)
      .map(([key, page]) => ({ key, ...page }));

    const quickLinks = enabledPages.slice(0, 5);
    const resourceLinks = enabledPages.slice(5);

    return `
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-about">
            <div class="footer-brand">
              <img src="${this.team.logo}" alt="${this.team.shortName}" class="footer-logo" onerror="this.style.display='none'">
              <span class="footer-title">${this.team.name}</span>
            </div>
            <p style="color: rgba(255,255,255,0.6); max-width: 300px;">${this.team.tagline}</p>
          </div>

          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              ${quickLinks.map(page => `
                <li><a href="${page.key}.html">${page.title}</a></li>
              `).join('')}
            </ul>
          </div>

          ${resourceLinks.length > 0 ? `
            <div class="footer-links">
              <h4>Resources</h4>
              <ul>
                ${resourceLinks.map(page => `
                  <li><a href="${page.key}.html">${page.title}</a></li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="footer-links">
            <h4>Contact</h4>
            <ul>
              ${this.team.social?.email ? `<li><a href="mailto:${this.team.social.email}">${this.team.social.email}</a></li>` : ''}
              ${this.team.social?.phone ? `<li><a href="tel:${this.team.social.phone}">${this.team.social.phone}</a></li>` : ''}
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${this.team.name}. All rights reserved. Powered by <a href="rallyiq.html">RallyIQ</a></p>
        </div>
      </footer>
    `;
  }

  generateStandardsList() {
    if (!this.team.standards) return '';

    return `
      <ul class="standards-list">
        ${this.team.standards.map(std => `<li>${std}</li>`).join('')}
      </ul>
    `;
  }

  generateRallyIQSection() {
    return `
      <section class="section">
        <div class="container">
          <div class="rallyiq-banner">
            <div class="rallyiq-logo">RallyIQ</div>
            <p class="rallyiq-tagline">Team Management, Simplified</p>
            <p style="color: var(--color-text-dark); opacity: 0.8; max-width: 600px; margin: 0 auto 30px;">
              Schedule practices, manage rosters, track attendance, communicate with parents,
              and handle payments—all in one place.
            </p>
            <a href="#" class="btn" style="background: var(--color-text-dark); color: var(--color-primary);">
              Access RallyIQ
            </a>
          </div>
        </div>
      </section>
    `;
  }

  generateContactSection() {
    return `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">Ready to join our family? Reach out today!</p>
          </div>
          <div class="contact-grid">
            ${this.team.social?.email ? `
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <div class="contact-label">Email</div>
                  <a href="mailto:${this.team.social.email}" class="contact-value" style="color: var(--color-primary); text-decoration: none;">${this.team.social.email}</a>
                </div>
              </div>
            ` : ''}
            ${this.team.social?.phone ? `
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                  <div class="contact-label">Phone</div>
                  <a href="tel:${this.team.social.phone}" class="contact-value" style="color: var(--color-primary); text-decoration: none;">${this.team.social.phone}</a>
                </div>
              </div>
            ` : ''}
            ${this.team.coach ? `
              <div class="contact-item">
                <div class="contact-icon">👤</div>
                <div>
                  <div class="contact-label">${this.team.coach.title}</div>
                  <div class="contact-value">${this.team.coach.name}</div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
  }

  wrapPage(content, title = '') {
    const pageTitle = title ? `${title} | ${this.team.name}` : this.team.name;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="shared/styles.css">
  <script src="shared/config.js"></script>
</head>
<body>
  <div class="grid-bg"></div>
  ${this.generateNavbar()}

  <main class="main-content">
    ${content}
  </main>

  ${this.generateFooter()}

  <script>
    function toggleNav() {
      document.getElementById('navMenu').classList.toggle('active');
    }

    // Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  </script>
</body>
</html>`;
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TeamTemplate;
}
