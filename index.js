/* TAILWIND CSS DIRECTIVES */
/* @tailwind = inaimport Tailwind CSS classes */
@tailwind base;        /* Reset styles & HTML elements */
@tailwind components;  /* Reusable component classes */
@tailwind utilities;   /* Utility classes (bg-blue-500, p-4, etc) */

/* UNIVERSAL RESET */
/* * = applies to EVERYTHING */
* {
  margin: 0;           /* Removes default margins */
  padding: 0;          /* Removes default padding */
  box-sizing: border-box;  /* Makes width/height include padding & border */
}

/* BODY STYLES */
body {
  margin: 0;           /* No margin around page */
  
  /* FONT STACK - tries fonts in order */
  font-family: -apple-system,        /* macOS/iOS default */
               BlinkMacSystemFont,    /* Chrome on macOS */
               'Segoe UI',            /* Windows */
               'Roboto',              /* Android */
               'Oxygen',              /* KDE */
               'Ubuntu',              /* Ubuntu */
               'Cantarell',           /* GNOME */
               'Fira Sans',           /* Firefox OS */
               'Droid Sans',          /* Older Android */
               'Helvetica Neue',      /* Older macOS */
               sans-serif;            /* Fallback */
  
  /* FONT SMOOTHING - makes text clearer */
  -webkit-font-smoothing: antialiased;      /* Chrome/Safari */
  -moz-osx-font-smoothing: grayscale;      /* Firefox on macOS */
}

/* CODE ELEMENT STYLES */
code {
  font-family: source-code-pro,    /* Code font */
               Menlo,                /* macOS terminal */
               Monaco,               /* macOS */
               Consolas,             /* Windows */
               'Courier New',        /* Fallback */
               monospace;            /* Generic monospace */
}

/* ========== CUSTOM SCROLLBAR ========== */

/* SCROLLBAR WIDTH */
::-webkit-scrollbar {
  width: 8px;          /* Scrollbar width = 8 pixels */
}

/* SCROLLBAR TRACK (background) */
::-webkit-scrollbar-track {
  background: #f1f1f1;  /* Light gray background */
}

/* SCROLLBAR THUMB (the moving part) */
::-webkit-scrollbar-thumb {
  background: #888;     /* Gray color */
  border-radius: 4px;   /* Rounded corners */
}

/* SCROLLBAR THUMB ON HOVER */
::-webkit-scrollbar-thumb:hover {
  background: #555;     /* Darker gray when hovering */
}

/* ========== DARK MODE SCROLLBAR ========== */

/* DARK MODE TRACK */
.dark ::-webkit-scrollbar-track {
  background: #1f2937;  /* Dark background (Tailwind gray-800) */
}

/* DARK MODE THUMB */
.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;  /* Medium dark gray (Tailwind gray-600) */
}

/* DARK MODE THUMB HOVER */
.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;  /* Lighter dark gray (Tailwind gray-500) */
}

/* 
FUNCTIONALITY:
✅ Tailwind CSS setup - utility classes ready
✅ Reset default browser styles
✅ Font stack - works on all devices
✅ Smooth fonts - clear text
✅ Custom scrollbar - looks professional
✅ Dark mode scrollbar - matches theme
✅ Cross-browser compatibility
*/