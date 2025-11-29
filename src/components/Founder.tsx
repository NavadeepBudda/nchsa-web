import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Founder = () => {
    const isMobile = useIsMobile();

    return (
        <section id="founder" className="py-24 bg-surface overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mobile-no-animate"
                >
                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                            <Quote size={200} className="text-primary" />
                        </div>

                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="mb-6 p-4 bg-primary/10 rounded-full">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-12 bg-primary/50"></span>
                                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Meet the Founder</span>
                                <span className="h-px w-12 bg-primary/50"></span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-text mb-8">Navadeep Budda</h2>

                            <div className="max-w-3xl mx-auto">
                                <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8 font-light">
                                    "Hi, I’m Navadeep Budda, a student at Lambert High School in Suwanee, GA.
                                    I started NCHSA because I saw a need for high school representation in cybersecurity.
                                    In the past, I created our school’s Cybersecurity Club, participated in many tech competitions,
                                    and pursued my interest in cybersecurity. I’m excited to work with like-minded students
                                    and help shape the future of the sector!"
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <span className="font-bold text-white text-lg">Navadeep Budda</span>
                                <span className="text-sm text-primary/80 font-mono">Founder, NCHSA</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Founder;
