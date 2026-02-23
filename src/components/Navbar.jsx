import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Hosts', path: '/hosts' },
        { name: 'Rewards', path: '/rewards' },
        { name: 'Membership', path: '/membership' },
        { name: 'Sponsors', path: '/partner' },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
                <div className="container-custom flex justify-between items-center">
                    <Link to="/" className={`z-50 flex items-center transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <img
                            src="/National%20Football%20Legend%20Incorporated%20logo.png"
                            alt="NFLegend Incorporated Logo"
                            className="h-20 md:h-28 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors relative group ${location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/watch" className="btn btn-primary ml-4">
                                <Play size={18} className="mr-2" /> Watch Show
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden z-[100] p-1 border border-white rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

            <div className={`fixed inset-0 w-full h-full bg-background/95 backdrop-blur-md z-[90] p-8 transition-transform duration-400 ease-in-out lg:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col gap-8 items-center w-full max-w-xs relative z-[100]">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-2xl font-medium transition-colors ${location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-8 w-full">
                        <Link to="/watch" className="btn btn-primary w-full justify-center text-lg py-3" onClick={() => setIsMobileMenuOpen(false)}>
                            <Play size={24} className="mr-2" /> Watch Show
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
