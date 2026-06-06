/**
 * Team Configuration System
 * Define team branding, colors, and content here
 */

const TEAM_CONFIGS = {
  bombers: {
    name: "CTX Meza Bombers",
    shortName: "Bombers",
    sport: "Fastpitch",
    slogan: "Built for the Fight",
    tagline: "Building champions, one player at a time.",
    logo: "assets/bombers-logo.png",
    colors: {
      primary: "#00bfff",      // Light blue
      secondary: "#000000",    // Black
      accent: "#ffffff",       // White
      text: "#ffffff",
      textDark: "#000000",
      gradient: "linear-gradient(135deg, #00bfff, #0080ff)",
      glow: "rgba(0, 191, 255, 0.5)"
    },
    social: {
      instagram: "",
      facebook: "",
      twitter: "",
      email: ""
    },
    pages: {
      home: { enabled: true, title: "Home" },
      about: { enabled: true, title: "About" },
      board: { enabled: true, title: "Board" },
      coaching: { enabled: true, title: "Coaching" },
      bylaws: { enabled: true, title: "Bylaws" },
      finances: { enabled: true, title: "Finances" },
      policies: { enabled: true, title: "Policies" },
      documents: { enabled: true, title: "Documents" },
      support: { enabled: true, title: "Support Us" },
      rallyiq: { enabled: true, title: "RallyIQ" },
      contact: { enabled: true, title: "Contact" }
    }
  },

  venom: {
    name: "Texas Venom Softball",
    shortName: "Venom",
    sport: "Softball",
    slogan: "Strike with Purpose",
    tagline: "1% better each day.",
    logo: "assets/venom-logo.png",
    colors: {
      primary: "#7c3aed",      // Purple
      secondary: "#000000",    // Black
      accent: "#84cc16",       // Lime/softball yellow
      text: "#ffffff",
      textDark: "#000000",
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      glow: "rgba(124, 58, 237, 0.5)"
    },
    social: {
      instagram: "",
      facebook: "",
      twitter: "",
      email: "Texasvenom2k25@gmail.com",
      phone: "512-755-6975"
    },
    coach: {
      name: "Coach Chris Balcom",
      title: "Head Coach",
      bio: "Former 7 year professional baseball player with 10+ years in player development from ages 8-18."
    },
    pages: {
      home: { enabled: true, title: "Home" },
      about: { enabled: true, title: "About" },
      board: { enabled: false, title: "Board" },
      coaching: { enabled: true, title: "Coaching" },
      bylaws: { enabled: false, title: "Bylaws" },
      finances: { enabled: false, title: "Finances" },
      policies: { enabled: true, title: "Policies" },
      documents: { enabled: true, title: "Documents" },
      support: { enabled: true, title: "Support Us" },
      rallyiq: { enabled: true, title: "RallyIQ" },
      contact: { enabled: true, title: "Contact" }
    },
    standards: [
      "1% Better Each Day",
      "Practice Like You Play",
      "Do the Little Things Right",
      "Be a Great Teammate"
    ]
  }
};

// Export for use in templates
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEAM_CONFIGS;
}
