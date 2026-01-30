import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { usePreloadImages } from './hooks/usePreloadImages';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/sections/Navbar';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import ScrollProgress from './components/ScrollProgress';
import AIAssistant from './components/AIAssistant';
import ThemeWash from './components/ThemeWash';
import frames from './frames.json';

// Pages
import Home from './pages/Home';
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage'));
const SkillsPage = React.lazy(() => import('./pages/SkillsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const Footer = React.lazy(() => import('./components/sections/Footer'));

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    // Construct full paths
    const framePaths = useMemo(() => {
        const baseUrl = import.meta.env.BASE_URL;
        return frames.map(frame => `${baseUrl}images/${frame}`);
    }, []);

    const { images, progress, loaded } = usePreloadImages(framePaths);

    // Initialize Lenis for smooth scrolling
    useEffect(() => {
        if (!loaded) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [loaded]);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 transition-colors duration-700">
                <ThemeWash />
                <NoiseOverlay />
                <ScrollProgress />
                <CustomCursor />
                {/* Loading Screen Overlay */}
                <LoadingScreen progress={progress} isActive={!loaded} />

                {/* Main Content - Only visible after load to prevent jank */}
                <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Navbar />

                    <main className="relative z-10 w-full min-h-screen">
                        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Home images={images} />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/experience" element={<ExperiencePage />} />
                                <Route path="/skills" element={<SkillsPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                            </Routes>
                        </Suspense>
                    </main>

                    <Suspense fallback={null}>
                        <Footer />
                    </Suspense>

                    <AIAssistant />
                </div>
            </div>
        </Router>
    );
}

export default App;
