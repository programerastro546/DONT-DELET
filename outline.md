# PromptFolio Hub Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page with hero and overview
├── explore.html            # Interactive code explorer and file viewer
├── demo.html              # Working prototype of prompt library
├── tech.html              # Technical specifications and architecture
├── main.js                # Core JavaScript functionality
├── resources/             # Media assets directory
│   ├── hero-image.jpg     # Generated hero image
│   ├── tech-icons/        # Technology stack icons
│   └── screenshots/       # Application screenshots
├── interaction.md         # Interactive components documentation
├── design.md             # Design style guide
└── outline.md            # This project outline
```

## Page Breakdown

### 1. index.html - Landing Page
**Purpose**: Introduce PromptFolio Hub with visual impact and key information
**Sections**:
- Navigation bar with smooth scrolling links
- Hero section with generated background image and typewriter animation
- Feature overview with animated cards
- Technology stack visualization
- Call-to-action buttons leading to other pages
- Footer with project information

**Key Features**:
- Cinematic hero with animated background effects
- Smooth scroll animations using Anime.js
- Interactive technology cards with hover effects
- Responsive design optimized for all devices

### 2. explore.html - Code Explorer
**Purpose**: Interactive exploration of the actual project codebase
**Sections**:
- Split-screen layout: file tree (left) + code viewer (right)
- Navigation breadcrumbs showing current file path
- Syntax-highlighted code display with line numbers
- Tab system for opening multiple files
- Search functionality within code
- File information panel (size, language, last modified)

**Key Features**:
- Real project file structure from GitHub repository
- Working code examples from actual components
- Interactive file tree with expand/collapse functionality
- Copy-to-clipboard functionality for code snippets
- Responsive layout for mobile code browsing

### 3. demo.html - Interactive Demo
**Purpose**: Fully functional prototype of the PromptShelf application
**Sections**:
- Search bar with real-time filtering
- Tag-based category filters
- Grid layout of prompt cards with ratings
- Detailed prompt view modal
- Submit prompt form simulation
- User interaction statistics

**Key Features**:
- Mock data representing real AI prompts
- Working search and filter functionality
- Interactive rating system
- Smooth animations for card transitions
- Form validation and submission feedback
- Local storage for user preferences

### 4. tech.html - Technical Deep Dive
**Purpose**: Comprehensive technical documentation and architecture overview
**Sections**:
- Technology stack breakdown with interactive diagrams
- Dependency visualization using ECharts.js
- Performance metrics and optimization tips
- Database schema visualization
- API documentation
- Development setup instructions

**Key Features**:
- Interactive network diagrams showing dependencies
- Animated charts displaying performance data
- Code architecture flowcharts
- Responsive technical documentation
- Copy-to-clipboard for terminal commands

## Interactive Components

### 1. Live Code Explorer
- **File Tree**: Hierarchical navigation of project structure
- **Code Viewer**: Syntax highlighting with theme switching
- **File Tabs**: Multi-file editing interface simulation
- **Search**: Find and highlight within code files

### 2. Component Showcase
- **Prompt Cards**: Interactive cards with hover effects and ratings
- **Search Interface**: Real-time filtering with animated results
- **Tag Filters**: Multi-select filtering with visual feedback
- **Modal System**: Detailed views with smooth transitions

### 3. Tech Stack Visualizer
- **Dependency Graph**: Interactive network of npm packages
- **Technology Cards**: Flip animations revealing details
- **Performance Charts**: Real-time metrics visualization
- **Architecture Diagram**: Clickable flowchart of system components

### 4. Background Effects
- **Aurora Gradient**: Animated background using shader-park
- **Floating Particles**: Matter.js physics simulation
- **Code Rain**: Matrix-style background animation
- **Geometric Patterns**: SVG-based animated tessellations

## Content Strategy

### Visual Assets
- Hero image: Custom generated AI workspace scene
- Technology icons: SVG icons for each tech stack component
- Screenshots: Actual application interface captures
- Background textures: Subtle patterns and gradients

### Text Content
- Technical documentation extracted from actual code
- Feature descriptions based on real functionality
- Performance metrics from bundle analysis
- User experience insights and optimization tips

### Interactive Elements
- Working search functionality with 50+ mock prompts
- Real code examples from the GitHub repository
- Interactive charts with real dependency data
- Functional forms with validation and feedback

## Technical Implementation

### Core Libraries
1. **Anime.js**: Smooth animations and micro-interactions
2. **ECharts.js**: Data visualization and interactive charts
3. **p5.js**: Creative coding and background effects
4. **Splide.js**: Carousel and slider components
5. **Pixi.js**: High-performance visual effects
6. **Matter.js**: Physics-based animations
7. **Shader-park**: Advanced background gradients

### Responsive Design
- Mobile-first approach with progressive enhancement
- Flexible grid system using CSS Grid and Flexbox
- Optimized touch interactions for mobile devices
- Performance considerations for slower connections

### Accessibility
- Semantic HTML structure with proper ARIA labels
- Keyboard navigation support for all interactive elements
- High contrast mode compatibility
- Screen reader friendly content structure

## Performance Optimization

### Loading Strategy
- Critical CSS inlined for above-the-fold content
- Progressive image loading with lazy loading
- JavaScript modules loaded asynchronously
- Optimized font loading with font-display: swap

### Animation Performance
- Hardware-accelerated CSS transforms
- RequestAnimationFrame for smooth animations
- Reduced motion support for accessibility
- Efficient DOM manipulation strategies

### Asset Optimization
- Compressed images with WebP fallbacks
- Minified CSS and JavaScript
- Optimized SVG icons and graphics
- Efficient caching strategies for static assets