import React from 'react';
import { MapPin, Mail, Linkedin, Github, Globe, Award, GraduationCap, Briefcase, Code } from 'lucide-react';

const AboutPage = () => {
    const education = [
        {
            degree: 'Masters in Computer Science',
            school: 'Northeastern University',
            location: 'Arlington, VA',
            period: 'Jan 2023 – Dec 2025',
            gpa: '3.7/4.0',
            relevant: 'Algorithms, Object-Oriented Design, Software Engineering, Computer Vision, AI/ML'
        },
        {
            degree: 'Bachelor of Science in Psychology',
            school: 'Carnegie Mellon University',
            location: 'Pittsburgh, PA',
            period: 'Aug 2017 – May 2021',
            gpa: '3.52/4.0',
            relevant: 'Programming Foundations, Advanced Statistics'
        }
    ];

    const experience = [
        {
            title: 'AI Automation Consultant',
            company: 'NexusAutomation AI',
            location: 'Danbury, CT',
            period: 'Aug 2025 – present',
            achievements: [
                'Consult on AI automation projects implementing agentic workflows for lead gen, CRM, content creation, and enterprise system management',
                'Utilized LLM integrations to implement marketing campaign automations saving 20+ hours of work weekly',
                'Implemented automatic, personalized cold email outreach to 1000+ validated leads, saving 300+ hours of work'
            ]
        },
        {
            title: 'Software Development Engineer Intern',
            company: 'Amazon Web Services (AWS)',
            location: 'Boston, MA',
            period: 'Jun 2025 – Aug 2025',
            achievements: [
                'Designed and implemented production-facing feature enabling $1M+ monthly revenue globally for FSx Windows',
                'Automated operator workflows using test-driven development, saving 10+ developer hours weekly',
                'Developed solutions using Java, PostgreSQL, Ruby, XML, and bash scripting, using Agile SDLC methodology',
                'Collaborated with 12+ cross-functional team members including product managers and senior engineers'
            ]
        },
        {
            title: 'Research Data Manager',
            company: 'Carnegie Mellon University',
            location: 'Pittsburgh, PA',
            period: 'May 2018 – Dec 2019',
            achievements: [
                'Developed automated data management workflows, reducing time spent on 500+ patient records by 60%',
                'Maintained 99%+ data integrity across 500+ patient records over 18-month period',
                'Managed software systems handling 8 years of longitudinal research data across 3 concurrent studies',
                'Trained 4 team members on software development processes and data management best practices'
            ]
        }
    ];

    const skills = {
        'Programming': ['Java (3yrs)', 'Python (2yrs)', 'C/C++ (1yr)', 'SQL (2yrs)', 'Ruby', 'XML', 'Bash'],
        'Frameworks & Tools': ['Spring Boot', 'AWS Cloud', 'Git/GitHub', 'JUnit', 'PyTorch', 'TensorFlow'],
        'Specializations': ['AI/ML', 'Test-Driven Development', 'Agile Methodology', 'Cloud Architecture', 'Automation']
    };

    const certifications = [
        {
            name: 'Google Data Analysis Certification',
            date: 'August 2023',
            icon: Award
        },
        {
            name: 'Hackathon 1st Place - Data Dive @ The World Bank',
            date: 'December 2024',
            icon: Award
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-fast-dark via-fast-dark to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Omar Elmady</h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Computer Science graduate student with software engineering experience at AWS and
                                full-stack development expertise. Skilled in AI-accelerated software development
                                with modern frameworks and cloud-native solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:oelmady@gmail.com" className="flex items-center space-x-2 text-fast-blue hover:text-white transition-colors">
                                    <Mail className="h-5 w-5" />
                                    <span>oelmady@gmail.com</span>
                                </a>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <MapPin className="h-5 w-5" />
                                    <span>Brookfield, CT 06804</span>
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <a href="https://linkedin.com/in/omar-elmady" target="_blank" rel="noopener noreferrer"
                                    className="bg-fast-blue hover:bg-blue-600 p-3 rounded-lg transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="https://github.com/oelmady/Portfolio" target="_blank" rel="noopener noreferrer"
                                    className="bg-fast-blue hover:bg-blue-600 p-3 rounded-lg transition-colors">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://nexusautomationai.com" target="_blank" rel="noopener noreferrer"
                                    className="bg-fast-blue hover:bg-blue-600 p-3 rounded-lg transition-colors">
                                    <Globe className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Professional Summary Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-4 text-fast-blue">Professional Summary</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Experienced in AI-accelerated software development with Java, Spring Boot, AWS cloud,
                                and database integration using modern development practices including test-driven development,
                                Agile methodology, and scalable system design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">Education</h2>
                        <p className="text-xl text-gray-600">Strong foundation in computer science and analytical thinking</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-fast-blue p-3 rounded-lg">
                                        <GraduationCap className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-fast-dark mb-2">{edu.degree}</h3>
                                        <p className="text-lg text-gray-700 mb-1">{edu.school}</p>
                                        <p className="text-gray-600 mb-2">{edu.location} | {edu.period}</p>
                                        <p className="text-fast-blue font-semibold mb-3">GPA: {edu.gpa}</p>
                                        <p className="text-gray-600 text-sm">
                                            <strong>Relevant Coursework:</strong> {edu.relevant}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">Work Experience</h2>
                        <p className="text-xl text-gray-600">Proven track record of delivering business impact through technology</p>
                    </div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-fast-blue">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-fast-blue p-3 rounded-lg">
                                        <Briefcase className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-fast-dark mb-2">{exp.title}</h3>
                                        <p className="text-lg text-fast-blue font-semibold mb-1">{exp.company}</p>
                                        <p className="text-gray-600 mb-6">{exp.location} | {exp.period}</p>
                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-fast-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700">{achievement}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">Technical Skills</h2>
                        <p className="text-xl text-gray-600">Comprehensive expertise across modern development stack</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="bg-fast-blue p-3 rounded-lg">
                                        <Code className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-fast-dark">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, i) => (
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-fast-dark mb-4">Certifications & Awards</h2>
                        <p className="text-xl text-gray-600">Recognition for technical excellence and innovation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {certifications.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                    <div className="bg-fast-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-fast-dark mb-2">{cert.name}</h3>
                                    <p className="text-gray-600">{cert.date}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;