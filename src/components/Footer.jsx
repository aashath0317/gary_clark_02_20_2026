import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-secondary border-t border-border-color pb-8">
            <div className="container-custom section-padding pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-extrabold uppercase tracking-wider text-gradient mb-4">NFL Legend Experience</h3>
                        <p className="text-sm text-text-secondary mt-2">
                            Where NFL Legends congregate together while rewriting the future of fan rewards. Hosted by Gary Clark & Chad Morton.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-accent-primary hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(239,68,68,0.4)]"><Youtube size={20} /></a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-accent-primary hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(239,68,68,0.4)]"><Instagram size={20} /></a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-accent-primary hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(239,68,68,0.4)]"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Home</Link></li>
                            <li><Link to="/about" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">About the Show</Link></li>
                            <li><Link to="/hosts" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Meet the Hosts</Link></li>
                            <li><Link to="/watch" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Watch the Show</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Engage</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/rewards" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Fan Rewards</Link></li>
                            <li><Link to="/membership" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Legends Circle</Link></li>
                            <li><Link to="/partner" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Partner & Sponsor</Link></li>
                            <li><Link to="/contact" className="text-text-secondary hover:text-accent-primary transition-all duration-200 inline-block hover:translate-x-1">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Join The Circle</h4>
                        <p className="text-sm text-text-secondary mb-4">Get exclusive updates and behind-the-scenes content.</p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-glass-border bg-black/20 text-white outline-none focus:border-accent-primary transition-colors" />
                            <button type="submit" className="btn btn-primary px-4 py-2"><Mail size={16} /></button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-glass-border text-sm gap-4 text-center md:text-left">
                    <p className="text-text-secondary">&copy; {new Date().getFullYear()} The NFL Legend Experience. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-text-secondary hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
