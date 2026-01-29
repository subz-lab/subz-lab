
import { useState, useEffect } from 'react';

export const usePreloadImages = (imagePaths) => {
    const [images, setImages] = useState([]);
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!imagePaths || imagePaths.length === 0) {
            setLoaded(true);
            return;
        }

        const total = imagePaths.length;
        const loadedImages = new Array(total).fill(null);
        let loadedCount = 0;

        // Priority threshold: Unblock UI after this many frames (e.g., ~1.5s of animation)
        const PRIORITY_THRESHOLD = Math.min(30, total);
        let priorityLoadedCount = 0;

        imagePaths.forEach((path, index) => {
            const img = new Image();
            img.src = path;

            img.onload = () => {
                loadedCount++;
                loadedImages[index] = img;

                // Track priority batch
                if (index < PRIORITY_THRESHOLD) {
                    priorityLoadedCount++;
                }

                // Update progress visualization (still based on total for accuracy)
                setProgress(Math.round((loadedCount / total) * 100));

                // Check if priority batch is complete to unblock UI
                if (index < PRIORITY_THRESHOLD && priorityLoadedCount === PRIORITY_THRESHOLD) {
                    setImages([...loadedImages]); // Initial set
                    setLoaded(true);
                } else if (loadedCount === total) {
                    // All done
                    setImages([...loadedImages]);
                    setLoaded(true); // Ensure true if not already
                } else if (loaded && loadedCount % 10 === 0) {
                    // Update state periodically for background loads so Hero can use new frames
                    setImages([...loadedImages]);
                }
            };

            img.onerror = () => {
                console.error(`Failed to load image: ${path}`);
                loadedCount++;
                if (index < PRIORITY_THRESHOLD) priorityLoadedCount++;

                // Recovery logic same as onload
                if (index < PRIORITY_THRESHOLD && priorityLoadedCount === PRIORITY_THRESHOLD) {
                    setImages([...loadedImages]);
                    setLoaded(true);
                } else if (loadedCount === total) {
                    setImages([...loadedImages]);
                    setLoaded(true);
                }
            };
        });

        return () => {
            // Cleanup not strictly necessary for simple image objects but good practice to avoid state updates if unmounted
        };

    }, [imagePaths]);

    return { images, progress, loaded };
};
