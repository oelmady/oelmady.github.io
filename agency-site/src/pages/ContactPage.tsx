import React from 'react';
import { Mail, MapPin, Linkedin, Github, Globe, Send, MessageCircle, Calendar } from 'lucide-react';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'oelmady@gmail.com',
            href: 'mailto:oelmady@gmail.com',
            description: 'Best way to reach me for project inquiries'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Brookfield, CT 06804',
            href: null,
            description: 'Open to relocation and remote roles'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/omar-elmady',
            href: 'https://linkedin.com/in/omar-elmady',
            description: 'Professional networking and career updates'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/oelmady/Portfolio',
            href: 'https://github.com/oelmady/Portfolio',
            description: 'Code repositories and technical projects'
        },
        {
            icon: Globe,
            label: 'Website',
            value: 'nexusautomationai.com',
            href: 'https://nexusautomationai.com',
            description: 'AI automation consulting services'
        }
    ];

    const services = [
        {
            title: 'AI Automation Consulting',
            description: 'Implement agentic workflows, LLM integrations, and automated business processes',
            timeline: '2-8 weeks',
            icon: MessageCircle
        },
        {
            title: 'Full-Stack Development',
            description: 'Build scalable web applications with modern frameworks and cloud integration',
            timeline: '4-16 weeks',
            icon: Send
        },
        {
            title: 'Technical Leadership',
            description: 'Strategic technical guidance, architecture design, and team mentoring',
            timeline: 'Ongoing',
            icon: Calendar
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-fast-dark via-fast-dark to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your business with AI automation or need expert full-stack development?
                        Let's discuss how we can create measurable impact for your organization.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-600">Multiple ways to connect and start the conversation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactInfo.map((contact, index) => {
                            const Icon = contact.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                                    <div className="text-center">
                                        <div className="bg-fast-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-fast-dark mb-2">{contact.label}</h3>
                                        {contact.href ? (
                                            <a
                                                href={contact.href}
                                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-fast-blue hover:text-blue-600 font-medium mb-3 block transition-colors"
                                            >
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-700 font-medium mb-3">{contact.value}</p>
                                        )}
                                        <p className="text-gray-600 text-sm">{contact.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">How I Can Help</h2>
                        <p className="text-xl text-gray-600">Specialized services with proven track record of success</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="bg-fast-blue p-3 rounded-lg w-fit mb-6">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-fast-dark mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center space-x-2 text-fast-blue">
                                        <Calendar className="h-4 w-4" />
                                        <span className="text-sm font-medium">Timeline: {service.timeline}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process & Next Steps */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">What to Expect</h2>
                        <p className="text-xl text-gray-600">Simple, transparent process from first contact to project completion</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Initial Discussion',
                                description: 'We\'ll discuss your project goals, requirements, and timeline over email or call'
                            },
                            {
                                step: '02',
                                title: 'Proposal & Planning',
                                description: 'I\'ll provide a detailed proposal with scope, timeline, and technical approach'
                            },
                            {
                                step: '03',
                                title: 'Development & Updates',
                                description: 'Regular progress updates and collaboration throughout the development process'
                            },
                            {
                                step: '04',
                                title: 'Delivery & Support',
                                description: 'Final delivery with documentation, testing, and ongoing support as needed'
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-fast-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-fast-dark mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-fast-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you need AI automation, full-stack development, or technical leadership,
                        I'm here to help turn your ideas into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:oelmady@gmail.com?subject=Project Inquiry&body=Hi Omar,%0D%0A%0D%0AI'm interested in discussing a project. Here are the details:%0D%0A%0D%0AProject Type: [AI Automation / Full-Stack Development / Technical Leadership]%0D%0ATimeline: %0D%0ABudget Range: %0D%0AProject Description: %0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards,"
                            className="inline-flex items-center space-x-2 bg-fast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                        >
                            <Send className="h-5 w-5" />
                            <span>Send Email</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/omar-elmady"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;