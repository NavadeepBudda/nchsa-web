
import { Mail, Instagram, Link as LinkIcon, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Contact Us</h2>
                    <p className="text-text-muted text-lg">
                        Have questions? We'd love to hear from you. Send us a message or connect with us on social media.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-surface p-8 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <Mail className="text-primary" />
                            <h3 className="text-xl font-bold text-text">Send a Message</h3>
                        </div>
                        <form action="mailto:nationalchsa@gmail.com" method="post" encType="text/plain" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-text-muted/50"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)]"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="bg-surface p-8 rounded-2xl border border-white/5 text-center hover:border-primary/30 transition-all duration-300 group">
                            <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-text mb-2">Instagram</h3>
                            <p className="text-text-muted mb-6">Follow us for the latest updates, event photos, and community highlights.</p>
                            <a
                                href="https://www.instagram.com/nationalchsa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-text font-medium hover:bg-white/10 hover:border-primary hover:text-primary transition-colors"
                            >
                                Follow @nationalchsa
                            </a>
                        </div>

                        <div className="bg-surface p-8 rounded-2xl border border-white/5 text-center hover:border-primary/30 transition-all duration-300 group">
                            <LinkIcon className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-text mb-2">Linktree</h3>
                            <p className="text-text-muted mb-6">Access all our important links, resources, and forms in one place.</p>
                            <a
                                href="https://linktr.ee/nationalchsa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-text font-medium hover:bg-white/10 hover:border-primary hover:text-primary transition-colors"
                            >
                                Visit Linktree
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
