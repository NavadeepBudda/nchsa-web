import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Terminal, Globe, User, MessageCircle, Award, Code } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
    const isMobile = useIsMobile();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-10">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 cursor-pointer hover:border-primary/50 transition-colors group mx-auto lg:mx-0"
                        >
                            <span className="text-xs font-bold text-primary uppercase tracking-wider group-hover:shadow-[0_0_10px_rgba(0,242,255,0.5)] transition-shadow">New</span>
                            <span className="text-sm text-text/80">Join the 2025 Cohort</span>
                            <ChevronRight size={14} className="text-text/50 group-hover:text-primary transition-colors" />
                        </motion.div>

                        <motion.h1
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.2 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-text mb-6 leading-[1.1]"
                        >
                            Empowering <br />
                            <span className="text-gradient">
                                Future Cyber Leaders
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.4 }}
                            className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
                        >
                            Join the National Cybersecurity High School Association to drive change,
                            start clubs, and connect with a community of future innovators.
                        </motion.p>

                        <motion.div
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <a
                                href="#get-involved"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
                            >
                                Join Now <ArrowRight size={18} />
                            </a>
                            <a
                                href="#about"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-text font-medium hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visual - Human-Centric Cyber Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:flex w-full lg:w-1/2 relative h-[500px] items-center justify-center perspective-1000"
                    >
                        {/* Central Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

                        {/* Main Student Profile Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 bg-surface/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl w-72"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <User size={32} className="text-white/80" />
                                    </div>
                                </div>
                                <div>
                                    <div className="h-3 w-24 bg-white/20 rounded-full mb-2" />
                                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                    <Award size={20} className="text-yellow-500" />
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-white/20 rounded-full mb-1" />
                                        <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                    <Code size={20} className="text-primary" />
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-white/20 rounded-full mb-1" />
                                        <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Community Elements */}

                        {/* Chat Bubble */}
                        <motion.div
                            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-bl-none shadow-lg"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <MessageCircle size={16} className="text-green-400" />
                                <span className="text-xs font-bold text-white">Community Chat</span>
                            </div>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-black flex items-center justify-center text-[10px] text-white">
                                        {i}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skill Badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-20 left-0 bg-black/60 backdrop-blur-md border border-primary/30 p-3 rounded-xl shadow-lg flex items-center gap-3"
                        >
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Terminal size={20} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white">Python Expert</p>
                                <p className="text-[10px] text-primary">Certified</p>
                            </div>
                        </motion.div>

                        {/* Network Node */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 right-[-20px] bg-surface border border-white/10 p-3 rounded-full shadow-xl"
                        >
                            <Globe size={24} className="text-blue-400" />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
