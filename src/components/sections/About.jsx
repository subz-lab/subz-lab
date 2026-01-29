import React from 'react';
import { config } from '../../config';
import { Sparkles, Code, Brain, GraduationCap } from 'lucide-react';
import InteractiveBackground from '../InteractiveBackground';
import RevealText from '../RevealText';

const About = () => {
    return (
        <section id="about" className="relative py-20 md:py-32 px-6 overflow-hidden bg-[var(--bg)]">
            <InteractiveBackground />

            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side: Visual Card */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                    <Sparkles className="text-white w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Who am I?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    A passionate developer dedicated to creating high-performance, visually stunning digital experiences.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                            <Code size={16} className="text-blue-400" />
                                        </div>
                                        <span>Full-Stack Development</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                            <Brain size={16} className="text-purple-400" />
                                        </div>
                                        <span>Problem Solving</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                            <GraduationCap size={16} className="text-pink-400" />
                                        </div>
                                        <span>Continuous Learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-2/3">
                        <RevealText text={config.about.title} className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight" />
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
                                {config.about.bio}
                            </p>
                            <div className="pt-6 border-t border-white/10">
                                <RevealText text="My Interests" className="text-xl font-bold text-white mb-6 uppercase tracking-widest" />
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {config.about.interests.map((interest, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all group cursor-default">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                            <span className="text-sm font-medium">{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
