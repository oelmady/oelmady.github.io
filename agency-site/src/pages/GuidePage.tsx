import React from 'react';
import { Book, ArrowRight, CheckCircle } from 'lucide-react';

const GuidePage = () => {
    const guideSteps = [
        {
            phase: 'Phase 1: First Principles Analysis',
            duration: 'Day 1-2',
            description: 'Break down business challenges to fundamental components',
            actions: [
                'Map current business equation: Profit = Revenue - Cost',
                'Identify growth bottlenecks: Acquisition + Retention + Expansion',
                'Calculate value proposition: Cashflow - Risk',
                'Document pain points and inefficiencies'
            ]
        },
        {
            phase: 'Phase 2: Action-Oriented Implementation',
            duration: 'Day 3-5',
            description: 'Deploy targeted automation solutions with immediate impact',
            actions: [
                'Select AI tools based on ROI potential',
                'Implement automated workflows',
                'Configure monitoring and alerts',
                'Train team on new processes'
            ]
        },
        {
            phase: 'Phase 3: Second-Order Thinking',
            duration: 'Day 6-7',
            description: 'Optimize for long-term consequences and strategic advantages',
            actions: [
                'Analyze downstream effects of automation',
                'Plan for scaling and growth scenarios',
                'Identify potential risks and mitigation strategies',
                'Create feedback loops for continuous improvement'
            ]
        },
        {
            phase: 'Phase 4: Triangulation Validation',
            duration: 'Week 2+',
            description: 'Multi-perspective verification and optimization',
            actions: [
                'Gather data from multiple sources',
                'Cross-validate results with benchmarks',
                'Collect stakeholder feedback',
                'Iterate and optimize based on learnings'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-fast-dark mb-4">
                        FAST Framework Implementation Guide
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Step-by-step methodology for systematic business transformation
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-fast-blue text-white px-6 py-3 rounded-lg">
                        <Book className="h-5 w-5" />
                        <span className="font-medium">Proven Methodology</span>
                    </div>
                </div>

                <div className="space-y-8">
                    {guideSteps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-gradient-to-r from-fast-blue to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {index + 1}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-fast-dark mb-2 md:mb-0">
                                            {step.phase}
                                        </h3>
                                        <span className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                    <div className="space-y-3">
                                        {step.actions.map((action, actionIndex) => (
                                            <div key={actionIndex} className="flex items-start space-x-3">
                                                <CheckCircle className="h-5 w-5 text-fast-blue mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-fast-dark to-blue-900 text-white rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Implement?</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                        Get personalized guidance for your specific business challenges
                    </p>
                    <a
                        href="mailto:omar.elmady@nexusautomationai.com"
                        className="inline-flex items-center space-x-2 bg-fast-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                    >
                        <span>Schedule Implementation Call</span>
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GuidePage;