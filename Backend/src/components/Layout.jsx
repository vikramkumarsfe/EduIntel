import React, { useEffect } from 'react';
import { Search, Groups, Description, Insights, Menu, Twitter, LinkedIn } from '@mui/icons-material';
const Header = () => {
    // Custom logic from the original HTML script for header scroll effect
    useEffect(() => {
        const header = document.getElementById('header');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-white/80', 'dark:bg-primary/80', 'backdrop-blur-sm', 'shadow-md');
                header.classList.remove('py-4');
                header.classList.add('py-2');
            } else {
                header.classList.remove('bg-white/80', 'dark:bg-primary/80', 'backdrop-blur-sm', 'shadow-md');
                header.classList.remove('py-2');
                header.classList.add('py-4');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Updates', href: '#' },
        { name: 'Policies', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Login/Register', href: '#' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between rounded-full px-6 py-2 glassmorphism border border-transparent dark:border-border-dark shadow-lg">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🧠</span>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-copy dark:text-copy-dark">EduIntel</h1>
                            <p className="text-xs text-copy-muted dark:text-copy-muted-dark hidden md:block">Empowering Smart Decisions through Intelligent Insights</p>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <a key={item.name} className="text-copy dark:text-copy-dark hover:text-primary-focus dark:hover:text-primary-focus transition-colors" href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <a className="bg-gradient-to-r from-primary to-primary-focus text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-glow-primary hover:shadow-glow-primary-hover transition-all duration-300 transform hover:scale-105" href="#">
                            <span className="truncate">🔍 Explore AI Portal</span>
                        </a>
                        <button className="lg:hidden text-copy dark:text-copy-dark">
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

// This Footer should also be extracted.
const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Policies', href: '#' },
        { name: 'Contact', href: '#' },
    ];
    const contactInfo = [
        'Higher Education Dept.',
        'Govt. Building, Capital City',
        'contact@eduintel.gov',
    ];

    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">EduIntel</h3>
                        <p className="text-sm text-gray-300">Making Governance Smarter, Decisions Faster.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}><a className="text-gray-300 hover:text-white" href={link.href}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {contactInfo.map((info) => (
                                <li key={info}>{info}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a className="text-gray-300 hover:text-white" href="#"><span className="sr-only">Twitter</span><Twitter className="w-6 h-6" /></a>
                            <a className="text-gray-300 hover:text-white" href="#"><span className="sr-only">LinkedIn</span><LinkedIn className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
                    <p>© 2024 EduIntel. All rights reserved. </p>
                </div>
            </div>
        </footer>
    );
};


const Layout = ({ children }) => {

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;

