import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImagesDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');

console.log('Scanning public/images for .webp files...');

if (fs.existsSync(publicImagesDir)) {
    const files = fs.readdirSync(publicImagesDir);
    const webpFiles = files.filter(f => f.endsWith('.webp')).sort();

    if (webpFiles.length > 0) {
        const framesPath = path.join(srcDir, 'frames.json');
        fs.writeFileSync(framesPath, JSON.stringify(webpFiles, null, 2));
        console.log(`Updated src/frames.json with ${webpFiles.length} frames.`);
    } else {
        console.log('No .webp files found in public/images.');
    }
} else {
    console.log('public/images directory not found.');
}
