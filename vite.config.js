import { defineConfig } from 'vite'
/* IMPORT VITE CONFIG FUNCTION
   FUNCTIONALITY: Creates typed configuration object */

import react from '@vitejs/plugin-react'
/* IMPORT REACT PLUGIN
   FUNCTIONALITY:
   - Transforms JSX → JavaScript
   - Enables Fast Refresh (hot reload)
   - Handles React DevTools */

// https://vitejs.dev/config/
export default defineConfig({
  /* ========== PLUGINS ========== */
  plugins: [react()],
  /* FUNCTIONALITY:
     Enables React support in Vite
     
     WHAT IT DOES:
     1. JSX TRANSFORMATION:
        INPUT:  <div>Hello</div>
        OUTPUT: React.createElement('div', null, 'Hello')
     
     2. FAST REFRESH:
        - Save file → Changes appear instantly
        - Keeps component state (doesn't reload page)
        - Shows errors in browser
     
     3. REACT DEVTOOLS:
        - Component tree inspector
        - Props & state viewer
        - Performance profiler */

  /* ========== DEVELOPMENT SERVER ========== */
  server: {
    port: 3000,
    /* FUNCTIONALITY: Runs server on http://localhost:3000
       DEFAULT: 5173 (Vite's default)
       WHY CHANGE: 3000 is familiar to React developers */
    
    open: true
    /* FUNCTIONALITY: Auto-opens browser when server starts
       RESULT:
       1. Run: npm run dev
       2. Server starts
       3. Browser opens automatically
       4. Shows: http://localhost:3000 */
  },

  /* ========== PRODUCTION BUILD ========== */
  build: {
    outDir: 'dist',
    /* FUNCTIONALITY: Output folder for production files
       RESULT:
       npm run build creates:
       dist/
       ├── index.html          (optimized HTML)
       ├── assets/
       │   ├── index-abc123.js   (bundled JavaScript)
       │   └── index-xyz789.css  (bundled CSS)
       
       WHY:
       - All code in one place
       - Ready to deploy
       - Optimized for production */
    
    sourcemap: false,
    /* FUNCTIONALITY: Controls source map generation
       
       sourcemap: true
       - Shows original code in DevTools
       - Easier debugging
       - LARGER file size
       - DON'T use in production (security)
       
       sourcemap: false
       - Hides original code
       - Smaller file size
       - Harder to reverse engineer
       - BETTER for production
       
       EXAMPLE:
       User sees: app-abc123.js (minified)
       With sourcemap: Can see original App.jsx
       Without sourcemap: Only sees minified code */
    
    minify: 'terser'
    /* FUNCTIONALITY: Minifies (compresses) JavaScript
       
       MINIFICATION EXAMPLE:
       BEFORE (readable):
       function greet(name) {
         return "Hello, " + name + "!";
       }
       
       AFTER (minified):
       function greet(n){return"Hello, "+n+"!"}
       
       TERSER OPTIONS:
       - 'terser' → Best compression (slower build)
       - 'esbuild' → Faster build (less compression)
       - false → No minification (development)
       
       BENEFITS:
       - Smaller files → Faster downloads
       - Less bandwidth → Lower costs
       - Better performance → Happier users
       
       FILE SIZE COMPARISON:
       Before minify: 500 KB
       After minify:  150 KB (70% smaller!) */
  }
})

/* 
========== VITE vs WEBPACK ==========

WEBPACK (old way):
- Slow dev server (30+ seconds)
- Rebuilds everything on change
- Complex configuration
- node_modules bundled

VITE (modern way):
- Fast dev server (instant)
- Only rebuilds changed files
- Simple configuration
- ES modules (native browser)

========== HOW VITE WORKS ==========

DEVELOPMENT (npm run dev):
1. Start server instantly
2. Serve files as ES modules
3. Transform on-demand (only what's requested)
4. Hot Module Replacement (HMR)
   - Save file
   - Browser updates instantly
   - State preserved

PRODUCTION (npm run build):
1. Bundle all files
2. Minify JavaScript (terser)
3. Optimize CSS
4. Generate hashes (cache busting)
5. Output to dist/

========== OPTIMIZATION FEATURES ==========

CODE SPLITTING:
Large app → Split into chunks
Load only what's needed
Faster initial load

TREE SHAKING:
Remove unused code
Import { Button } from 'library'
Only Button included (not whole library)

LAZY LOADING:
Import components when needed
Not on initial page load

ASSET OPTIMIZATION:
- Images → WebP
- CSS → Minified
- JS → Compressed

========== REAL WORLD EXAMPLE ==========

BEFORE VITE BUILD:
src/App.jsx           (50 KB)
src/index.js          (2 KB)
src/index.css         (5 KB)
node_modules/react    (500 KB)
node_modules/lucide   (200 KB)
TOTAL: 757 KB

AFTER VITE BUILD:
dist/index.html                    (2 KB)
dist/assets/index-abc123.js       (180 KB) ← All JS bundled & minified
dist/assets/index-xyz789.css      (8 KB)   ← All CSS bundled & minified
TOTAL: 190 KB (75% smaller!)

USER DOWNLOADS:
- 190 KB instead of 757 KB
- Loads 4x faster
- Uses less data
- Better mobile experience

========== PORT 3000 EXPLANATION ==========

PORT = Door number for your computer

http://localhost:3000
│         │        │
│         │        └─ Port (door #3000)
│         └─ Computer name (localhost = your PC)
└─ Protocol (http)

WHY 3000?
- Create React App used it
- Developers are familiar
- Not used by system (safe)

OTHER COMMON PORTS:
- 80   → HTTP websites
- 443  → HTTPS websites
- 3000 → React apps
- 5173 → Vite default
- 8080 → General development

========== BUILD PROCESS FLOW ==========

npm run build
↓
1. Read vite.config.js
↓
2. Use @vitejs/plugin-react
   - Transform JSX
   - Bundle components
↓
3. Process CSS
   - Tailwind utilities
   - Minify
↓
4. Minify JS (terser)
   - Remove whitespace
   - Shorten variable names
   - Remove comments
↓
5. Generate hashes
   - index-abc123.js (for caching)
   - index-xyz789.css
↓
6. Output to dist/
   - Ready to deploy!
   - Upload to server
   - Users download optimized files

========== SUMMARY ==========

✅ React plugin → JSX support + Fast Refresh
✅ Port 3000 → Familiar to developers
✅ Auto-open → Saves time
✅ dist/ folder → Clean output
✅ No sourcemaps → Better security
✅ Terser minify → Smallest files
✅ Fast builds → Happy developers
✅ Small files → Happy users
*/