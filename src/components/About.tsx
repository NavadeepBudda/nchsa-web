
import { motion } from 'framer-motion';
import { Eye, TrendingUp, History, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">About NCHSA</h2>
                    <p className="text-text-muted text-lg">
                        Empowering the next generation of cybersecurity leaders.
                    </p>
                </div>

                {/* Compact Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                    {/* Card 1: Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Eye className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-text mb-2">Mission & Vision</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Providing a youth perspective on policy and expanding access to cybersecurity education.
                        </p>
                    </motion.div>

                    {/* Card 2: Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                        <div className="mb-4 p-3 bg-purple-500/10 w-fit rounded-xl group-hover:bg-purple-500/20 transition-colors">
                            <TrendingUp className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-lg font-bold text-text mb-2">Our Impact</h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-3">
                            Shaping policies and launching clubs nationwide.
                        </p>
                    </motion.div>

                    {/* Card 3: Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="glass p-6 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
                    >
                        <div className="mb-4 p-3 bg-green-500/10 w-fit rounded-xl group-hover:bg-green-500/20 transition-colors">
                            <History className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-lg font-bold text-text mb-2">Our Story</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Founded by Navadeep Budda to give high schoolers a voice in cybersecurity policy.
                        </p>
                    </motion.div>

                    {/* Card 4: Network */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                    >
                        <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-xl group-hover:bg-blue-500/20 transition-colors">
                            <Globe className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-bold text-text mb-2">Nationwide</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Connecting students from coast to coast to foster collaboration and innovation.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
