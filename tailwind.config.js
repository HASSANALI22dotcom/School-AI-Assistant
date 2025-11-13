/** @type {import('tailwindcss').Config} */
/* TYPE DEFINITION: Helps editors with autocomplete */

export default {
  /* ========== CONTENT PATHS ========== */
  content: [
    "./index.html",              /* Scan HTML for Tailwind classes */
    "./src/**/*.{js,ts,jsx,tsx}",  /* Scan all JS/TS/JSX/TSX files in src/ */
  ],
  /* FUNCTIONALITY:
     - Tailwind scans these files
     - Finds used classes (bg-blue-500, p-4, etc)
     - Only includes USED classes in final CSS
     - RESULT: Tiny CSS file (instead of 3MB+)
     
     EXAMPLE:
     If you use: className="bg-green-500"
     Tailwind includes: .bg-green-500 { background-color: #10b981; }
     
     If you DON'T use: className="bg-red-500"
     Tailwind SKIPS: .bg-red-500 (saves file size) */

  /* ========== DARK MODE ========== */
  darkMode: 'class',
  /* FUNCTIONALITY:
     - Dark mode works by adding 'dark' class to HTML
     - When <html class="dark"> → dark mode ON
     - When <html> → light mode ON
     
     USAGE IN CODE:
     className="bg-white dark:bg-gray-900"
     
     RESULT:
     Light mode: white background
     Dark mode: dark gray background */

  /* ========== THEME CUSTOMIZATION ========== */
  theme: {
    extend: {
      /* EXTEND = Add to default Tailwind, don't replace */
      
      /* ========== CUSTOM COLORS ========== */
      colors: {
        primary: {
          /* GREEN THEME - for school branding */
          50: '#f0fdf4',   /* Lightest green - backgrounds */
          100: '#dcfce7',  /* Very light green - hover states */
          500: '#10b981',  /* Main green - buttons, links */
          600: '#059669',  /* Darker green - button hover */
          700: '#047857',  /* Darkest green - active states */
        },
        /* FUNCTIONALITY:
           USAGE: className="bg-primary-500" → Green background
           USAGE: className="text-primary-600" → Dark green text
           USAGE: className="hover:bg-primary-100" → Light green on hover
           
           WHY NUMBERS?
           - 50-100: Very light (backgrounds)
           - 500: Standard (main color)
           - 600-700: Dark (hovers, active)
           - 900: Very dark (almost black) */
        
        secondary: {
          /* BLUE THEME - for accents */
          50: '#eff6ff',   /* Lightest blue */
          100: '#dbeafe',  /* Very light blue */
          500: '#3b82f6',  /* Main blue - used for gradients */
          600: '#2563eb',  /* Darker blue */
          700: '#1d4ed8',  /* Darkest blue */
        }
        /* FUNCTIONALITY:
           USAGE: className="from-primary-500 to-secondary-600"
           RESULT: Green to blue gradient
           
           USED IN APP:
           - Header: Green to blue gradient
           - Buttons: Green to blue gradient
           - User messages: Blue gradient */
      },
      
      /* ========== CUSTOM ANIMATIONS ========== */
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        /* FUNCTIONALITY:
           - Name: bounce-slow
           - Duration: 2 seconds (slower than default 1s)
           - Repeat: infinite
           
           USAGE: className="animate-bounce-slow"
           RESULT: Element bounces slowly forever
           
           USED IN APP:
           - Phone icon animation
           - "Naangalia..." loading dots */
      }
    },
  },
  
  /* ========== PLUGINS ========== */
  plugins: [],
  /* FUNCTIONALITY: Add extra Tailwind plugins here
     EXAMPLES:
     - @tailwindcss/forms - Better form styles
     - @tailwindcss/typography - Blog post styles
     - @tailwindcss/aspect-ratio - Video embeds
     
     CURRENTLY EMPTY: We don't need extra plugins */
}

/* 
========== HOW TAILWIND WORKS ==========

1. SCAN PHASE:
   Tailwind scans: index.html, src/**/*.jsx
   Finds: className="bg-green-500 p-4 rounded-lg"
   
2. GENERATE PHASE:
   Creates CSS:
   .bg-green-500 { background-color: #10b981; }
   .p-4 { padding: 1rem; }
   .rounded-lg { border-radius: 0.5rem; }
   
3. OPTIMIZE PHASE:
   Removes UNUSED classes
   Minifies CSS
   Final size: ~10KB instead of 3MB+

========== CUSTOM vs DEFAULT ==========

DEFAULT TAILWIND:
bg-green-500 = Tailwind's default green

CUSTOM (our config):
bg-primary-500 = Our school green (#10b981)
bg-secondary-500 = Our school blue (#3b82f6)

WHY CUSTOM?
- Consistent branding
- Easy to change everywhere
- Matches school colors

========== DARK MODE EXAMPLE ==========

CODE:
<div className="bg-white dark:bg-gray-900">

LIGHT MODE (<html>):
.bg-white { background: white; }

DARK MODE (<html class="dark">):
.dark .dark\:bg-gray-900 { background: #111827; }

========== REAL USAGE IN APP ==========

BUTTON:
className="bg-gradient-to-r from-green-500 to-blue-600"

GENERATED CSS:
.bg-gradient-to-r {
  background-image: linear-gradient(to right, ...);
}
.from-green-500 {
  --tw-gradient-from: #10b981;
}
.to-blue-600 {
  --tw-gradient-to: #2563eb;
}

RESULT:
Beautiful green to blue gradient button!
*/