
const Footer = () => {
    return (
        <footer className="bg-surface py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-text-muted text-sm">
                    &copy; {new Date().getFullYear()} National Cybersecurity High School Association (NCHSA). All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
