# AI Coding Agent Instructions for AI Reckoning Platform

## Project Overview
Static website for AI career transformation guidance. Built with HTML/CSS/JS, deployed via GitHub Pages/Netlify/Vercel. No build process - pure static files.

## Architecture
- **Frontend**: Vanilla HTML5 + Tailwind CSS + JavaScript
- **Data Storage**: JavaScript objects in HTML files (componentData in component-detail.html, roadmapTemplates in main.js)
- **Routing**: URL parameters (?component=id, ?phase=id) + localStorage for state
- **Styling**: Forced center-alignment, glass morphism design, dark gradients

## Key Files & Patterns

### Component System (`component-detail.html`)
- Components defined in `componentData` JavaScript object
- Structure: `{id: {title, industry, phases: [{title, duration, skills: [{name, category, description}], resources, milestones}]}}`
- Add new components by extending `componentData` object
- Example: `'ai-recruitment-tools': {title: 'AI Recruitment Tools', industry: 'HR', phases: [...]}`

### Roadmap System (`js/main.js`)
- Roadmaps in `roadmapTemplates` object
- Display via `displayRoadmap(templateKey)` function
- Fallback to `showFallback()` on errors

### Navigation & State
- Use `localStorage.setItem('assessmentData', JSON.stringify(data))` for persistence
- URL params: `component-detail.html?component=ai-recruitment-tools`
- Loading screens hidden via `document.getElementById('loading').classList.add('hidden')`

## Development Workflow

### Adding Components
1. Add to `componentData` in `component-detail.html`
2. Add link in `roadmaps.html` if needed
3. Test via `find_missing_components.py` script

### Maintenance Scripts
- Run Python scripts: `python3 find_missing_components.py`
- Scripts modify HTML files directly using regex
- Use for bulk operations (removing links, finding missing data)

### Deployment
- Static files served directly
- Cache headers configured in `vercel.json`/`netlify.toml`
- No build step required

## Code Conventions

### HTML Structure
- All content center-aligned (forced via CSS `text-align: center !important`)
- Glass effect: `background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px)`
- Button styling: `btn-primary` class with gold/red gradients

### JavaScript Patterns
- Error handling with try/catch, fallback to `showFallback()`
- Console logging for debugging: `console.log('init running')`
- Direct DOM manipulation: `document.getElementById('roadmapContent').innerHTML = html`

### Python Scripts
- Regex-based HTML parsing: `re.findall(r'component-detail\.html\?component=([^"&]*)', content)`
- Direct file I/O: `with open("roadmaps.html", 'r', encoding='utf-8') as f:`
- Print status updates: `print(f"Found {len(unique_components)} unique component references")`

## Common Tasks

### Debug Component Issues
```bash
python3 find_missing_components.py
```

### Remove Phase Links
```bash
python3 remove_phase_links.py
```

### Test Locally
```bash
python -m http.server 8000
```

## Integration Points
- **External APIs**: None (static site)
- **CDN Assets**: Tailwind, Font Awesome, Google Fonts
- **Cross-page Communication**: localStorage + URL parameters
- **Data Flow**: HTML files → JavaScript objects → DOM manipulation

## Quality Checks
- Verify components load in `component-detail.html?component=id`
- Check console for JavaScript errors
- Test on mobile (responsive design)
- Validate HTML structure after Python script modifications</content>
<parameter name="filePath">c:\Users\admin\Desktop\IT retraining\ai emergency\ai-reckoning\.github\copilot-instructions.md