# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website project documenting the history of Air Traffic Control (ŘLP - Řízení Letového Provozu) at Ostrava Airport (LKMT). The site contains historical records of Air Traffic Controllers (ATCO), Base Operations (BO-CDD), Technical Specialists (TS), and leadership roles from the 1950s to present.

## Project Structure

```
/
├── index.html                 # Main entry point (minimal HTML page)
├── navigation.txt            # Site navigation structure
├── assets/
│   ├── css/
│   │   └── bulma.min.css    # Bulma CSS framework for styling
│   └── js/
│       └── navigation.js    # JavaScript for dynamic navigation
├── data/                    # Historical records in Markdown format
│   ├── atco.md              # ATCO personnel records
│   ├── bo-cdd.md            # Base Operations/CDD records
│   ├── ts.md                # Technical Specialists records
│   ├── vedouciLKTM.md       # LKMT Leadership records
│   └── vedouciRCP.md        # RCP Leadership records
└── fotky/                   # Photo archives organized by category
    ├── ATCO List/
    ├── BO-CDD List/
    ├── TS/
    ├── Vedouci LKMT/
    ├── Vedouci RCP/
    └── Galerie/
```

## Technology Stack

- **Frontend**: Plain HTML with Bulma CSS framework and JavaScript navigation
- **Styling**: Bulma.min.css (modern CSS framework with component classes)
- **JavaScript**: Dynamic navigation component with theme support
- **Data Format**: Markdown files with structured personnel records
- **Images**: JPG format for historical photographs

## Data Structure

Personnel records follow a consistent format:
- Name with birth/death dates
- Start date (Nástup)
- License information (TWR, APP, radar, PAR)
- Various qualifications (SC, BO, OJTI, Instruktor)
- Career progression and departure information

## Development Workflow

Since this is a static site project, development is straightforward:

1. **Content Updates**: Edit Markdown files in `/data/` directory
2. **Styling**: Modify CSS in `/assets/css/` or update HTML classes
3. **Structure**: Update navigation in `navigation.txt` and implement in HTML
4. **Images**: Add new photos to appropriate subdirectories in `/fotky/`

## Content Guidelines

- All content is in Czech language
- Personnel records maintain historical accuracy
- Aviation terminology uses Czech abbreviations (ŘLP, TWR, APP, etc.)
- Image references in data files correspond to numbered photos
- Maintain chronological ordering in personnel lists

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

- Data files use lowercase with hyphens: `bo-cdd.md`
- Image folders use title case with spaces: `ATCO List/`
- Photo files use timestamp format: `IMG_YYYYMMDD_HHMMSS.jpg`
- Each photo folder contains a corresponding `data.md` file

## Historical Context

The records span from 1953 to present, documenting the evolution of air traffic control at Ostrava Airport (formerly Mošnov). The site preserves institutional knowledge of personnel who worked at this regional airport in the Czech Republic.