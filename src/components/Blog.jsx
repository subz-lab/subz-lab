import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { config } from '../config';
import TiltCard from './TiltCard';
import { useAudio } from '../hooks/useAudio';

const BlogCard = ({ post, onOpen }) => {
    const { playHover } = useAudio();

    return (
        <TiltCard className="h-full flex flex-col group cursor-pointer" onClick={() => onOpen(post)}>
            <div className="relative h-48 mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-bold">
                <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-blue-400" />
                    {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-blue-400" />
                    {post.readTime}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
            </h3>

            <p className="text-sm text-gray-400 line-clamp-3 mb-6 flex-grow">
                {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read Intelligence
                <ArrowRight size={14} />
            </div>
        </TiltCard>
    );
};

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const { playPop, playClick } = useAudio();

    const handleOpen = (post) => {
        setSelectedPost(post);
        playPop();
    };

    const handleClose = () => {
        setSelectedPost(null);
        playClick();
    };

    return (
        <section id="blog" className="relative py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-blue-500" />
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Insights</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white"
                    >
                        {config.blog.title.split(' ').map((word, i) => (
                            <span key={i} className={i >= 3 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.blog.posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <BlogCard post={post} onOpen={handleOpen} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Post Expanded Modal Overlay */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10005] flex items-center justify-center p-4 md:p-8"
                    >
                        <div
                            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl"
                            onClick={handleClose}
                        />

                        <motion.div
                            layoutId={`post-${selectedPost.id}`}
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg)] border border-[var(--border)] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <X size={24} className="text-white" />
                            </button>

                            <div className="overflow-y-auto custom-scrollbar flex-grow p-8 md:p-16">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex items-center gap-4 text-xs text-blue-400 font-bold uppercase tracking-widest mb-6">
                                        <span>{selectedPost.category}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                        <span>{selectedPost.readTime}</span>
                                    </div>

                                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                        {selectedPost.title}
                                    </h1>

                                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
                                        <img
                                            src={selectedPost.image}
                                            alt={selectedPost.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="prose prose-invert prose-blue max-w-none">
                                        <p className="text-xl text-gray-300 mb-8 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                                            {selectedPost.excerpt}
                                        </p>

                                        <div className="text-gray-400 space-y-6 text-lg leading-relaxed">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <p>
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                            <h3 className="text-2xl font-bold text-white mt-12 mb-4">The Future of Digital Identity</h3>
                                            <p>
                                                Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Leo urna molestie at elementum eu facilisis sed odio. Pellentesque habitant morbi tristique senectus et netus et malesuada.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border-t border-[var(--border)] bg-white/[0.02] flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                        <Calendar size={18} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Published On</p>
                                        <p className="text-sm text-white font-bold">{selectedPost.date}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 font-medium">
                                    &copy; {new Date().getFullYear()} Subz Intelligence
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
