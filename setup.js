
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');
const publicImagesDir = path.join(publicDir, 'images');
const srcDir = path.join(root, 'src');
const imagesSourceDir = path.join(root, 'images');

// Create directories
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

// Move images if they exist in root/images
if (fs.existsSync(imagesSourceDir)) {
  const fileList = fs.readdirSync(imagesSourceDir);
  const webpFiles = fileList.filter(f => f.endsWith('.webp')).sort();
  
  if (webpFiles.length > 0) {
    console.log(`Moving ${webpFiles.length} images to public/images...`);
    webpFiles.forEach(file => {
      const srcPath = path.join(imagesSourceDir, file);
      const destPath = path.join(publicImagesDir, file);
      fs.renameSync(srcPath, destPath);
    });
    // Write frames.json
    const framesPath = path.join(srcDir, 'frames.json');
    fs.writeFileSync(framesPath, JSON.stringify(webpFiles, null, 2));
    console.log('frames.json created.');
  } else {
    // Maybe they are already in public/images?
    console.log('No webp files found in root/images. Checking public/images...');
    if (fs.existsSync(publicImagesDir)) {
       const existingkf = fs.readdirSync(publicImagesDir).filter(f => f.endsWith('.webp')).sort();
       fs.writeFileSync(path.join(srcDir, 'frames.json'), JSON.stringify(existingkf, null, 2));
    }
  }
}

// Create Vite Config
const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
})
`;
fs.writeFileSync(path.join(root, 'vite.config.js'), viteConfig);

// Create index.html
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Subodh Kudle | Portfolio</title>
    <meta name="description" content="Computer Engineering Student Portfolio" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), indexHtml);

// Create src/main.jsx
const mainJsx = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;
fs.writeFileSync(path.join(srcDir, 'main.jsx'), mainJsx);

// Create src/styles/index.css (basic reset)
// I'll create the file but content will be filled later.
// Actually, I'll put basic content now.
const indexCss = `
:root {
  --font-body: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  --bg-color: #050505;
  --text-color: #ffffff;
  --accent-color: #646cff; /* Default, will be overridden by user config */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #000; 
}
::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
fs.writeFileSync(path.join(srcDir, 'index.css'), indexCss);

console.log('Setup complete.');
