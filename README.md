
# Premium Portfolio Website - Subodh Kudle

Designed to be cinematic, modern, and highly professional.

## Features
- **Cinematic Hero**: Full-screen scroll-controlled parallax animation.
- **Dark Mode Only**: Sleek, immersive design.
- **Fully Editable**: Content managed via `src/config.js`.
- **Preloader**: Ensures smooth playback by loading all 192 frames first.
- **Responsive**: Mobile-friendly layout and interactions.

## Setup Instructions

1. **Install Dependencies** (Already done):
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open the link shown in terminal (usually `http://localhost:5173`).

## Editing Content

### Text & Links
Edit `src/config.js` to change:
- Name, Tagline, Bio
- Theme Accent Color (`#646cff` default)
- Social Links
- Skills List
- Projects
- Experience Timeline

### Image Sequence
The hero animation images are located in `public/images/`.
To update the sequence:
1. Replace the `.webp` files in `public/images/`.
2. Run the update script:
   ```bash
   node update-frames.js
   ```
   This updates `src/frames.json` which the app uses to determine the frame order.

### Styling
Global styles are in `src/index.css`. Tail wind config is in `tailwind.config.js`.

## Tech Stack
- **React + Vite**: Optimized build.
- **Framer Motion**: Animations.
- **Lenis**: Smooth scroll.
- **Tailwind CSS**: Styling utility.

Enjoy your new premium portfolio!
