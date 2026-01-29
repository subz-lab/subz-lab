import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { config } from '../config';
import { useAudio } from '../hooks/useAudio';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: `Hi! I'm ${config.identity.firstName}'s AI intelligence. I can tell you about his projects, skills, or even navigate the site for you. What's on your mind?` }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [lastIntent, setLastIntent] = useState(null);
    const scrollRef = useRef(null);
    const { playPop, playClick, playHover } = useAudio();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // High-level "Brain" to handle intent scoring
    const getResponse = (query) => {
        query = query.toLowerCase();

        // Scoring logic
        const scores = {
            about: 0,
            skills: 0,
            projects: 0,
            contact: 0,
            navigation: 0
        };

        // 1. Scoring Keywords
        if (query.includes('who') || query.includes('about') || query.includes(config.identity.firstName.toLowerCase()) || query.includes('bio')) scores.about += 5;
        if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('language') || query.includes('know')) scores.skills += 5;
        if (query.includes('project') || query.includes('work') || query.includes('build') || query.includes('portfolio') || query.includes('created')) scores.projects += 5;
        if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('reach') || query.includes('linkedin')) scores.contact += 5;
        if (query.includes('go to') || query.includes('show me') || query.includes('take me') || query.includes('scroll')) scores.navigation += 10;

        // 2. Memory Context (Follow-up handling)
        if (lastIntent && (query.includes('more') || query.includes('else') || query.includes('tell me') || query.includes('what'))) {
            scores[lastIntent] += 10;
        }

        // Determine best intent
        const bestIntent = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

        setLastIntent(bestIntent);

        if (scores[bestIntent] < 2) {
            return {
                text: `I'm not quite sure I understand that. Try asking about ${config.identity.firstName}'s skills, projects, or ask me to show you a specific section!`,
                intent: null
            };
        }

        // Intent Mapping to Responses
        switch (bestIntent) {
            case 'about':
                return {
                    text: `${config.about.bio} He is currently pursuing a ${config.about.education}.`,
                    intent: 'about',
                    action: () => safeNavigate('/', 'about')
                };
            case 'skills':
                const skillNames = config.skills.icons.map(s => s.name);
                return {
                    text: `${config.identity.firstName} has a diverse stack including ${skillNames.slice(0, 6).join(', ')}, and more. He specializes in ${skillNames[0]} and ${skillNames[2]}.`,
                    intent: 'skills',
                    action: () => safeNavigate('/', 'skills')
                };
            case 'projects':
                const projectTitles = config.projects.map(p => p.title);
                return {
                    text: `He has built some impressive engineering projects like ${projectTitles.join(' and ')}. Each project focuses on solving specific real-world problems.`,
                    intent: 'projects',
                    action: () => navigate('/projects')
                };
            case 'contact':
                return {
                    text: `You can connect with ${config.identity.firstName} on LinkedIn, check his code on GitHub, or see his life on Instagram. All these links are conveniently placed in the footer for you!`,
                    intent: 'contact',
                    action: () => {
                        const el = document.getElementById('footer');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                };
            case 'navigation':
                if (query.includes('about')) {
                    safeNavigate('/', 'about');
                    return { text: "Sure, let me take you to the About section.", intent: 'about' };
                }
                if (query.includes('skill')) {
                    safeNavigate('/', 'skills');
                    return { text: "Heading over to the Skills and Tech Stack area.", intent: 'skills' };
                }
                if (query.includes('project')) {
                    navigate('/projects');
                    return { text: "Let's check out some of the featured work.", intent: 'projects' };
                }
                if (query.includes('experience')) {
                    navigate('/experience');
                    return { text: "Taking you to the career timeline.", intent: 'experience' };
                }
                return { text: "Where would you like to go? I can navigate to About, Skills, Projects, or Contact.", intent: 'navigation' };
            default:
                return { text: `I'm here to help you explore ${config.identity.firstName}'s portfolio. What would you like to see?`, intent: null };
        }
    };

    const safeNavigate = (path, hashId) => {
        if (location.pathname !== path) {
            navigate(path, { state: { scrollTo: hashId } });
            // Navbar handles the scrolling on mount
        } else {
            const el = document.getElementById(hashId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsTyping(true);
        playClick();

        // Process Intelligence
        setTimeout(() => {
            const result = getResponse(userMsg);
            setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
            setIsTyping(false);
            playPop();
            if (result.action) result.action();
        }, 1200);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[10002]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full h-full md:w-[400px] md:h-[550px] bg-[var(--bg)] border border-[var(--border)] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-[var(--border)] flex items-center justify-between bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                    <Sparkles size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-tight">Portfolio Intel v2.0</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Smart Neural Link</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => { setIsOpen(false); playClick(); }}
                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <X size={16} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/20'
                                        : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1 items-center">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" />
                                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        {!isTyping && messages.length < 3 && (
                            <div className="px-6 pb-4 flex flex-wrap gap-2">
                                {['Show Projects', 'What are your skills?', 'Experience'].map(hint => (
                                    <button
                                        key={hint}
                                        onClick={() => { setInput(hint); playHover(); }}
                                        className="text-[10px] px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                                    >
                                        {hint}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Query neural network..."
                                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                            >
                                <Send size={18} className="text-white" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setIsOpen(!isOpen); playPop(); }}
                onMouseEnter={() => playHover()}
                className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-600/30 border border-white/20 relative group"
            >
                <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 animate-ping pointer-events-none" />
                {isOpen ? <X size={28} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
