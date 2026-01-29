import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, Code2, Activity } from 'lucide-react';
import { config } from '../config';

const GithubPulse = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = config.social.github.split('/').pop();

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch basic user data
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();

                // Fetch recent events for latest commit
                const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public`);
                const eventsData = await eventsRes.json();

                const lastPush = eventsData.find(e => e.type === 'PushEvent');
                const lastCommit = lastPush ? {
                    repo: lastPush.repo.name.split('/').pop(),
                    message: lastPush.payload.commits[0].message,
                    date: new Date(lastPush.created_at).toLocaleDateString()
                } : null;

                setData({
                    public_repos: userData.public_repos,
                    followers: userData.followers,
                    lastCommit
                });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, [username]);

    return (
        <div className="flex flex-col h-full bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] p-6 overflow-hidden relative group">
            {/* Background Icon */}
            <Github className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 group-hover:text-blue-500/10 transition-colors duration-700 pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Live Pulse</span>
                </div>
                <Github size={18} className="text-gray-500 group-hover:text-white transition-colors" />
            </div>

            {loading ? (
                <div className="flex-grow flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                </div>
            ) : (
                <div className="flex-grow flex flex-col justify-between relative z-10">
                    <div>
                        <h4 className="text-xs font-mono text-blue-400 mb-2">AUTH://{username.toUpperCase()}</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Repos</p>
                                <p className="text-xl font-bold text-white">{data?.public_repos || 0}</p>
                            </div>
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Followers</p>
                                <p className="text-xl font-bold text-white">{data?.followers || 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[var(--border)]">
                        <div className="flex items-center gap-2 mb-3">
                            <GitCommit size={14} className="text-blue-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Latest Commit</span>
                        </div>
                        {data?.lastCommit ? (
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-white line-clamp-1">{data.lastCommit.message}</p>
                                <p className="text-[10px] text-blue-400/70 font-mono">repo: {data.lastCommit.repo}</p>
                            </div>
                        ) : (
                            <p className="text-[10px] text-gray-600 italic font-mono">No recent push events found.</p>
                        )}
                    </div>
                </div>
            )}

            {/* Heartbeat Line Animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden opacity-30">
                <motion.div
                    animate={{
                        x: ['-100%', '100%']
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#3b82f6]"
                />
            </div>
        </div>
    );
};

export default GithubPulse;
