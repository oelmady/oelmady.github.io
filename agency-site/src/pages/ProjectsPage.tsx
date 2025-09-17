import React from 'react';
import { ExternalLink, Github, Calendar, Target, TrendingUp, Server, Database, Cpu, TestTube } from 'lucide-react';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'AWS FSx Windows Production Feature',
            company: 'Amazon Web Services',
            period: 'Jun 2025 – Aug 2025',
            type: 'Enterprise Software',
            description: 'Designed and implemented a production-facing feature that enabled $1M+ monthly revenue globally for FSx Windows service.',
            technologies: ['Java', 'PostgreSQL', 'Ruby', 'XML', 'Bash'],
            achievements: [
                'Enabled $1M+ monthly revenue globally',
                'Automated operator workflows saving 10+ developer hours weekly',
                'Collaborated with 12+ cross-functional team members',
                'Implemented using test-driven development and Agile methodology'
            ],
            metrics: {
                revenue: '$1M+ monthly',
                timeSaved: '10+ hours/week',
                teamSize: '12+ members',
                methodology: 'Agile SDLC'
            },
            icon: Server,
            category: 'Enterprise'
        },
        {
            title: 'AI Marketing Automation Platform',
            company: 'NexusAutomation AI',
            period: 'Aug 2025 – Present',
            type: 'AI Automation',
            description: 'Implemented agentic workflows for lead generation, CRM management, and automated marketing campaigns using LLM integrations.',
            technologies: ['Python', 'LLMs', 'APIs', 'Automation Tools'],
            achievements: [
                'Saved 20+ hours weekly through marketing automation',
                'Automated personalized outreach to 1000+ validated leads',
                'Reduced manual work by 300+ hours',
                'Implemented end-to-end lead generation workflows'
            ],
            metrics: {
                timeSaved: '300+ hours',
                leads: '1000+ contacts',
                automation: '20+ hrs/week',
                efficiency: '95% automated'
            },
            icon: TrendingUp,
            category: 'AI/Automation'
        },
        {
            title: 'Full-Stack E-commerce Platform',
            company: 'Northeastern University',
            period: 'Sep 2024 – Dec 2024',
            type: 'Web Application',
            description: 'Built a complete e-commerce platform for a real client using Spring framework, designed for high concurrency and reliability.',
            technologies: ['Java', 'Spring Boot', 'RESTful APIs', 'PostgreSQL'],
            achievements: [
                'Designed to serve 1,000+ concurrent users with 99.5% uptime',
                'Implemented 25+ RESTful API endpoints with <200ms response time',
                'Applied Agile methodology with 4 iterative sprints',
                'Achieved 95% code coverage with 150+ unit and integration tests'
            ],
            metrics: {
                concurrency: '1000+ users',
                uptime: '99.5%',
                apiResponse: '<200ms',
                testCoverage: '95%'
            },
            icon: Database,
            category: 'Full-Stack'
        },
        {
            title: 'ML Healthcare Application',
            company: 'Northeastern University',
            period: 'Course Project',
            type: 'Machine Learning',
            description: 'Developed machine learning application for healthcare data analysis with advanced algorithms and visualization.',
            technologies: ['Python', 'K-Nearest Neighbors', 'SHAP', 'Data Visualization'],
            achievements: [
                'Processed 10 GiB healthcare dataset with 87% prediction accuracy',
                'Reduced model training time by 40% through optimization',
                'Generated 20+ statistical visualizations including AUC curves',
                'Submitted peer-reviewed research paper to IEEE conference'
            ],
            metrics: {
                dataSize: '10 GiB',
                accuracy: '87%',
                optimization: '40% faster',
                visualizations: '20+'
            },
            icon: Cpu,
            category: 'Machine Learning'
        },
        {
            title: 'Concurrent Simulation System',
            company: 'Tufts University',
            period: 'Sep 2022 – Dec 2022',
            type: 'Systems Programming',
            description: 'Developed a multithreaded Java application for high-performance concurrent processing with comprehensive testing.',
            technologies: ['Java', 'Multithreading', 'JUnit', 'Concurrency'],
            achievements: [
                'Handled 1,000+ concurrent processes with 99%+ thread safety',
                'Implemented automated regression testing with JUnit',
                'Achieved 90% test coverage across 20+ test cases',
                'Reduced system response time by 35% through optimization'
            ],
            metrics: {
                concurrency: '1000+ processes',
                threadSafety: '99%+',
                testCoverage: '90%',
                performance: '35% faster'
            },
            icon: TestTube,
            category: 'Systems'
        },
        {
            title: 'Research Data Management System',
            company: 'Carnegie Mellon University',
            period: 'May 2018 – Dec 2019',
            type: 'Data Management',
            description: 'Developed automated workflows for managing longitudinal research data across multiple concurrent studies.',
            technologies: ['Python', 'Data Processing', 'Automation', 'Quality Assurance'],
            achievements: [
                'Reduced time spent on 500+ patient records by 60%',
                'Maintained 99%+ data integrity over 18-month period',
                'Managed 8 years of longitudinal data across 3 studies',
                'Trained 4 team members on development processes'
            ],
            metrics: {
                records: '500+ patients',
                efficiency: '60% reduction',
                integrity: '99%+',
                duration: '18 months'
            },
            icon: Database,
            category: 'Data Management'
        }
    ];

    const categories = ['All', 'Enterprise', 'AI/Automation', 'Full-Stack', 'Machine Learning', 'Systems', 'Data Management'];
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-fast-dark via-fast-dark to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Projects & Portfolio</h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        A showcase of technical projects spanning enterprise software, AI automation,
                        full-stack development, and research applications with measurable business impact.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${selectedCategory === category
                                        ? 'bg-fast-blue text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                                    {/* Project Header */}
                                    <div className="bg-gradient-to-r from-fast-blue to-blue-500 p-6 text-white">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-white/20 p-3 rounded-lg">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                                    <p className="text-blue-100">{project.company}</p>
                                                </div>
                                            </div>
                                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                                {project.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-4 text-blue-100">
                                            <Calendar className="h-4 w-4" />
                                            <span className="text-sm">{project.period}</span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Metrics */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3">Key Metrics</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                {Object.entries(project.metrics).map(([key, value], i) => (
                                                    <div key={i} className="bg-gray-50 p-3 rounded-lg">
                                                        <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                                                        <p className="font-bold text-fast-blue">{value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                                            <ul className="space-y-2">
                                                {project.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <Target className="h-4 w-4 text-fast-blue mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700 text-sm">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-fast-dark mb-6">Interested in Working Together?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can leverage AI automation and modern development practices
                        to drive measurable business outcomes for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:oelmady@gmail.com"
                            className="inline-flex items-center space-x-2 bg-fast-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                        >
                            <span>Start a Conversation</span>
                            <ExternalLink className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/oelmady/Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span>View GitHub</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;