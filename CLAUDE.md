# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project documenting the history of Air Traffic Control (ŘLP - Řízení Letového Provozu) at Ostrava Airport (LKMT). The site contains historical records of Air Traffic Controllers (ATCO), Base Operations (BO-CDD), Technical Specialists (TS), and leadership roles from the 1950s to present.

## Architecture

The project uses a hybrid data approach:
- **Source Data**: Historical personnel records stored in `/data/markdown/*.md` files
- **Structured Data**: JavaScript constants in `/assets/constants/` containing biographical data objects
- **Dynamic Rendering**: Each page type has its own HTML file with JavaScript-driven content loading
- **Dual Image Storage**: Photos stored in both `/fotky/` (original scanned documents) and `/assets/images/` (processed portraits)

## Project Structure

```
/
├── *.html                    # Individual pages (index, atco-list, bo-cdd-list, ts, etc.)
├── types.d.ts                # TypeScript definitions for Bio and Licence interfaces
├── assets/
│   ├── css/
│   │   ├── bulma.min.css    # Bulma CSS framework
│   │   ├── bio.css          # Biographical component styling
│   │   └── typography.css   # Typography definitions
│   ├── js/
│   │   ├── navigation.js    # Dynamic navigation component
│   │   └── ts-table.js      # Table rendering utilities
│   ├── constants/
│   │   ├── bo-cdd-list.js   # BO/CDD biographical data
│   │   └── bo-cdd-list.json # JSON version of BO/CDD data
│   └── images/              # Processed portrait images
│       ├── atco/            # ATCO portraits
│       ├── bo/              # BO personnel portraits
│       └── spolecne/        # Shared/group photos
├── data/markdown/           # Source historical records
│   ├── atco.md              # ATCO personnel records
│   ├── bo-cdd.md            # Base Operations/CDD records
│   ├── ts.md                # Technical Specialists records
│   ├── vedouciLKTM.md       # LKMT Leadership records
│   └── vedouciRCP.md        # RCP Leadership records
└── fotky/                   # Original scanned photo archives
    ├── ATCO List/
    ├── BO-CDD List/
    ├── TS/
    ├── Vedouci LKMT/
    ├── Vedouci RCP/
    └── Galerie/
```

## Technology Stack

- **Frontend**: Plain HTML with Bulma CSS framework and vanilla JavaScript
- **Styling**: Bulma.min.css (modern CSS framework) + custom CSS modules (bio.css, typography.css)
- **JavaScript**: ES6 modules with dynamic navigation and data rendering
- **Data Management**: Dual format - source Markdown files + JavaScript constants for structured data
- **Images**: JPG format stored in two locations (original scans + processed portraits)

## Data Architecture

The project uses two complementary data storage approaches:

### Source Data (Markdown)
- Located in `/data/markdown/`
- Human-readable historical records with Czech text
- Contains image references numbered (Image 1, Image 2, etc.)
- Used as authoritative source for content updates

### Structured Data (JavaScript)
- Located in `/assets/constants/`
- JavaScript objects conforming to TypeScript Bio interface
- Enables dynamic rendering and component-based display
- Contains direct image paths to `/assets/images/` portraits

### Bio Interface Structure
```typescript
interface Bio {
  bio: { name, dob, dod, nastup, odchod };
  licence: { licences: Licence[], datum_ukonceni };
  instruktor: Licence[];
  info: string;
  image: string;
  imageDescription: string;
}
```

## Development Workflow

### Adding New Personnel Records
1. **Add source data**: Update appropriate `.md` file in `/data/markdown/`
2. **Add portrait**: Place processed portrait in `/assets/images/[category]/`
3. **Update constants**: Add biographical object to relevant `/assets/constants/` file
4. **Test rendering**: Verify display on corresponding HTML page

### Navigation Updates
- Modify `navigation.js` to update site-wide navigation structure
- Navigation component auto-initializes and handles mobile responsive menu

## Content Guidelines

- All content is in Czech language
- Personnel records maintain historical accuracy
- Aviation terminology uses Czech abbreviations (ŘLP, TWR, APP, etc.)
- Maintain chronological ordering in personnel lists
- Portrait images should be optimized JPGs in `/assets/images/[category]/` 

## Page Structure & Navigation

The site consists of specialized pages for each personnel category:
- `index.html` - Homepage with project overview
- `atco-list.html` - Air Traffic Control Officers
- `bo-cdd-list.html` - Base Operations/Company Dispatch
- `ts.html` - Technical Specialists  
- `vedouci-rlp.html` - Air Traffic Control Leadership
- `vedouci-klmt.html` - LKMT Leadership
- `historie.html` - Historical overview
- `galerie.html` - Photo gallery

Each specialized page uses `data-page` attribute for navigation highlighting and JavaScript-driven content loading.

## Aviation Terminology

Key Czech aviation terms used throughout:
- **ŘLP**: Řízení Letového Provozu (Air Traffic Control)
- **ATCO**: Air Traffic Control Officer
- **TWR**: Tower Controller
- **APP**: Approach Controller
- **BO**: Base Operations
- **CDD**: Company Dispatch Department
- **SC**: Synthetic Controller
- **OJTI**: On the Job Training Instructor
- **LKMT**: ICAO code for Ostrava Airport

## File Naming Conventions

- HTML pages use kebab-case: `atco-list.html`, `bo-cdd-list.html`
- Data files use kebab-case: `bo-cdd.md`
- JavaScript constants use kebab-case: `bo-cdd-list.js`
- Image folders use title case: `ATCO List/`, `BO-CDD List/`
- Portrait files use descriptive names: `Bruno.jpg`, `Kachel 1.jpg`

## Data Synchronization

When updating personnel records:
1. **Source of Truth**: Markdown files in `/data/markdown/` contain authoritative historical data
2. **Structured Data**: JavaScript constants in `/assets/constants/` must be updated to reflect changes
3. **Image Management**: Ensure portraits exist in `/assets/images/` and are referenced correctly in constants
4. **Testing**: Verify changes display correctly on corresponding HTML pages

## Historical Context

The records span from 1953 to present, documenting the evolution of air traffic control at Ostrava Airport (formerly Mošnov). The site preserves institutional knowledge of personnel who worked at this regional airport in the Czech Republic.