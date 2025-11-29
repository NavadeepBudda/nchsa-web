import { motion } from 'framer-motion';
import { User, School, Star, Users, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const opportunities = [
    {
        icon: <User className="w-10 h-10 text-primary" />,
        title: 'Individual Membership',
        description: 'Join as an individual member to receive updates, participate in events, and be part of our cybersecurity community.',
        link: 'https://forms.gle/2Giwe97hQoETwVWJ7',
        cta: 'Join as Individual',
    },
    {
        icon: <School className="w-10 h-10 text-purple-500" />,
        title: 'Organization Membership',
        description: 'For schools, clubs, or organizations interested in partnering with NCHSA and advancing cybersecurity education.',
        link: 'https://forms.gle/2Giwe97hQoETwVWJ7',
        cta: 'Join as Organization',
    },
    {
        icon: <Star className="w-10 h-10 text-yellow-500" />,
        title: 'Executive Team',
        description: 'Apply to join our leadership team and help shape the future of cybersecurity education.',
        link: 'https://forms.gle/mwZTM9N9SW1pTTdi7',
        cta: 'Apply for Leadership',
    },
    {
        icon: <Users className="w-10 h-10 text-green-500" />,
        title: 'Mentorship Program',
        description: 'Join our mentorship program to be paired with a cybersecurity professional and receive real-world advice.',
        link: 'https://forms.gle/rBjeKEd17puHFemdA',
        cta: 'Join Mentorship',
    },
];

const GetInvolved = () => {
    const isMobile = useIsMobile();

    return (
        <section id="get-involved" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Get Involved</h2>
                    <p className="text-text-muted text-lg">
                        Whether you are a student, educator, or professional, there is a place for you in our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {opportunities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                            className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] mobile-no-animate"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10">
                                    {item.icon}
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-transparent hover:bg-white/10 text-text-muted hover:text-primary transition-colors"
                                >
                                    <ArrowRight size={20} />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                            <p className="text-text-muted mb-6 min-h-[3rem]">{item.description}</p>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                                {item.cta} <ArrowRight size={16} className="ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
