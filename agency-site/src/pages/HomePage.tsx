import React from 'react';
import { BarChart3, Zap, TrendingUp, ArrowRight, CheckCircle, Star, Code, Brain, Award } from 'lucide-react';

const HomePage = () => {
    const heroStats = [
        { number: '$1M+', label: 'Revenue Enabled at AWS', icon: TrendingUp },
        { number: '300+', label: 'Hours Saved via Automation', icon: CheckCircle },
        { number: '95%', label: 'Test Coverage Achieved', icon: Star },
        { number: '20+', label: 'Hours Saved Weekly', icon: Zap },
    ];

    const services = [
        {
            title: 'AI Automation Consulting',
            description: 'Design and implement AI-powered workflows that save hundreds of hours and drive measurable business outcomes',
            icon: Brain,
            benefits: ['LLM integrations for marketing automation', 'Agentic workflows for lead generation', 'Enterprise system management'],
            cta: 'View Portfolio',
            path: '/projects'
        },
        {
            title: 'Full-Stack Development',
            description: 'Build scalable, production-ready applications with modern frameworks and cloud-native architecture',
            icon: Code,
            benefits: ['Spring Boot & Java expertise', 'AWS cloud integration', 'Test-driven development'],
            cta: 'See Projects',
            path: '/projects'
        },
        {
            title: 'Technical Leadership',
            description: 'Bridge business needs with technical solutions through data-driven analysis and strategic implementation',
            icon: Award,
            benefits: ['Cross-functional collaboration', 'Agile methodology expertise', 'Performance optimization'],
            cta: 'Learn More',
            path: '/about'
        },
    ];

    const processSteps = [
        {
            step: '01',
            title: 'Discovery & Analysis',
            description: 'Understanding your business challenges and identifying automation opportunities'
        },
        {
            step: '02',
            title: 'Solution Design',
            description: 'Architecting scalable, maintainable solutions with modern best practices'
        },
        {
            step: '03',
            title: 'Implementation',
            description: 'Agile development with test-driven approach and continuous integration'
        },
        {
            step: '04',
            title: 'Deployment & Optimization',
            description: 'Production deployment with performance monitoring and ongoing optimization'
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-fast-dark via-fast-dark to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-fast-blue/20 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Omar Elmady
                                <span className="text-fast-blue block mt-2">AI Automation Consultant</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Full-stack developer and AI consultant with proven track record at AWS.
                                Specializing in automation solutions that save hundreds of hours and drive measurable business outcomes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="mailto:oelmady@gmail.com"
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-fast-blue to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                >
                                    <span>Get In Touch</span>
                                    <ArrowRight className="h-5 w-5" />
                                </a>
                                <a
                                    href="/projects"
                                    className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-all duration-200"
                                >
                                    <BarChart3 className="h-5 w-5" />
                                    <span>View Projects</span>
                                </a>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {heroStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <Icon className="h-8 w-8 text-fast-blue mb-3" />
                                        <div className="text-3xl font-bold mb-2">{stat.number}</div>
                                        <div className="text-gray-300 text-sm">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">
                            Technical Expertise & Business Impact
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Combining software engineering excellence with AI automation expertise to deliver
                            solutions that drive real business outcomes and measurable ROI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="bg-gradient-to-r from-fast-blue to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-fast-dark mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2 mb-8">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <CheckCircle className="h-5 w-5 text-fast-blue mr-3 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={service.path}
                                        className="inline-flex items-center space-x-2 text-fast-blue font-semibold hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <span>{service.cta}</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">
                            My Development Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach that ensures consistent results and sustainable growth
                            through proven methodologies and intelligent implementation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className="bg-gradient-to-r from-fast-blue to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-2xl font-bold text-white">{step.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-fast-dark mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-fast-blue to-transparent transform translate-x-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-fast-dark to-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Let's discuss how AI automation and modern development practices can drive
                        measurable business outcomes for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="mailto:oelmady@gmail.com"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-fast-blue to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <a
                            href="/projects"
                            className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-all duration-200"
                        >
                            <BarChart3 className="h-5 w-5" />
                            <span>View Portfolio</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;