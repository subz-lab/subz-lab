import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { config } from '../../config';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        // If not on home page, go home first, then scroll
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle incoming scroll requests from other pages
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
                // Clear state
                window.history.replaceState({}, document.title);
            }
        }
    }, [location]);

    // Define links: mix of sections and pages
    const links = [
        { name: 'About', path: '/', isSection: true, id: 'about' },
        { name: 'Skills', path: '/skills', isSection: false },
        { name: 'Projects', path: '/projects', isSection: false },
        { name: 'Experience', path: '/experience', isSection: false },
        { name: 'Blog', path: '/blog', isSection: false },
    ];

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] max-w-5xl px-6 py-4 flex justify-between items-center transition-all duration-500 rounded-full border ${scrolled
                ? 'bg-black/70 backdrop-blur-md border-white/10 opacity-100 translate-y-0'
                : 'bg-transparent border-transparent opacity-0 -translate-y-4 pointer-events-none'
                }`}
        >
            <NavLink to="/" className="text-xl font-bold tracking-tighter text-white">
                {config.identity.logoText}
            </NavLink>

            <ul className="hidden md:flex space-x-8 text-sm font-medium">
                {links.map((item) => {
                    const isActive = location.pathname === item.path && (!item.isSection || (item.isSection && !location.hash));
                    // Note: active state for sections is tricky in multi-page. 
                    // Simpler approach: Highlight based on path match.

                    return (
                        <li key={item.name} className="relative group">
                            {item.isSection ? (
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`cursor-pointer transition-all duration-300 ${location.pathname === '/' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300" />
                                </button>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `cursor-pointer transition-all duration-300 relative group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.name}
                                            <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                        </>
                                    )}
                                </NavLink>
                            )}
                        </li>
                    );
                })}
                <li
                    className="px-4 py-2 rounded-full text-white cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: config.theme.accent }}
                    onClick={() => navigate('/contact')}
                >
                    Contact
                </li>
            </ul>

            <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="md:hidden text-white cursor-pointer" onClick={() => scrollToSection('about')}>Menu</div>
            </div>
        </nav>
    );
};

export default Navbar;
