# Team Template System

A customizable template system for youth sports team websites. Designed to be easily rebranded for different teams while maintaining a consistent, professional look.

## Quick Start

1. Copy a team folder (e.g., `bombers/` or `venom/`) to create a new team
2. Update the CSS variables in the `<style>` block with your team colors
3. Replace placeholder content with your team information
4. Copy page templates from `shared/pages/` as needed

## Directory Structure

```
team-template/
├── shared/
│   ├── config.js      # Team configuration definitions
│   ├── styles.css     # Shared CSS with CSS custom properties
│   ├── template.js    # Template engine (optional JS-based rendering)
│   ├── rallyiq.html   # RallyIQ platform page (rebranded from DugoutOS)
│   └── pages/         # Page content templates
│       ├── about.html
│       ├── contact.html
│       └── support.html
├── bombers/           # CTX Meza Bombers (blue theme)
│   └── index.html
├── venom/             # Texas Venom (purple theme)
│   └── index.html
└── README.md
```

## Customization

### Team Colors

Each team defines their colors via CSS custom properties:

```css
:root {
  --color-primary: #00bfff;      /* Main brand color */
  --color-secondary: #000000;    /* Secondary color */
  --color-accent: #ffffff;       /* Accent/highlight color */
  --color-text: #ffffff;         /* Text on dark backgrounds */
  --color-text-dark: #000000;    /* Text on light backgrounds */
  --color-gradient: linear-gradient(135deg, #00bfff, #0080ff);
  --color-glow: rgba(0, 191, 255, 0.5);
}
```

### Team Presets

**Bombers** (Blue/Black/White)
```css
--color-primary: #00bfff;
--color-gradient: linear-gradient(135deg, #00bfff, #0080ff);
```

**Venom** (Purple/Black/Lime)
```css
--color-primary: #7c3aed;
--color-accent: #84cc16;
--color-gradient: linear-gradient(135deg, #7c3aed, #a855f7);
```

## Pages

| Page | Description |
|------|-------------|
| Home | Landing page with hero, values, and CTAs |
| About | Mission, vision, history, and values |
| Board | Board members and organization structure |
| Coaching | Coaching staff profiles |
| Bylaws | Organization bylaws and rules |
| Finances | Financial transparency and reports |
| Policies | Team policies and expectations |
| Documents | Important documents and forms |
| Support Us | Donations, sponsorships, and volunteering |
| RallyIQ | Team management platform (formerly DugoutOS) |
| Contact | Contact form and information |

## RallyIQ Integration

RallyIQ is the rebranded team management platform (previously DugoutOS). Features:

- Schedule management
- Roster management  
- Team communication
- Payment processing
- Attendance tracking
- Document storage

## Deployment

Static HTML files can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## Adding a New Team

1. Create a new folder: `myteam/`
2. Copy `bombers/index.html` as a starting point
3. Update the CSS variables with your team colors
4. Replace team name, slogan, and content
5. Add your logo to `myteam/assets/`
6. Create additional pages as needed
