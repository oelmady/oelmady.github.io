import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Zap, ArrowRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'FAST Assessment', path: '/flowchart' },
        { name: 'Framework Guide', path: '/guide' },
        { name: 'AI Tools Database', path: '/tools' },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/omar-el-mady/',
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/oelmady',
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:omar.elmady@nexusautomationai.com',
        },
    ];

    return (
        <footer className="bg-fast-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-gradient-to-r from-fast-blue to-blue-500 p-2 rounded-xl">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold">NexusAutomation AI</span>
                                <div className="text-sm text-fast-blue">FAST Framework Solutions</div>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transforming businesses through intelligent automation using our proven FAST Framework:
                            First Principles analysis, Action-oriented implementation, Second-order thinking, and
                            Triangulation validation. Achieve measurable ROI in weeks, not months.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.upwork.com/freelancers/~018a23423d96a2ea09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-fast-blue to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="mailto:omar.elmady@nexusautomationai.com"
                                className="inline-flex items-center space-x-2 border border-fast-blue text-fast-blue px-6 py-3 rounded-lg font-medium hover:bg-fast-blue hover:text-white transition-all duration-200"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Get Free Consultation</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-fast-blue transition-colors duration-200 flex items-center group"
                                    >
                                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Connect</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-300 mb-2">Omar Elmady</p>
                                <p className="text-sm text-fast-blue">AI Automation Specialist</p>
                            </div>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target={social.name !== 'Email' ? '_blank' : undefined}
                                            rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                            className="p-2 bg-gray-800 rounded-lg hover:bg-fast-blue transition-colors duration-200 group"
                                            aria-label={social.name}
                                        >
                                            <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} NexusAutomation AI. All rights reserved.
                        </div>
                        <div className="flex flex-col md:flex-row text-sm text-gray-400 space-y-2 md:space-y-0 md:space-x-6">
                            <span>Remember to smile!</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;