import { CaseStudy } from '../types';

// Portfolio case studies showcasing real consulting and development work
export const caseStudies: CaseStudy[] = [
    {
        id: 'aws-fsx-feature',
        title: 'AWS FSx Windows Production Feature',
        industry: 'Cloud Computing',
        companySize: 'Enterprise',
        problem: 'Need for production-facing feature to enable significant monthly revenue for FSx Windows service at AWS.',
        traditionalApproach: 'Manual operator workflows and non-automated processes.',
        aiAutomationSolution: 'Automated operator workflows using test-driven development, Java, PostgreSQL, and Ruby.',
        toolsUsed: ['java', 'postgresql', 'ruby'],
        implementation: {
            timeline: '3 months (internship)',
            cost: 0,
            teamSize: 12,
            complexity: 'high'
        },
        results: {
            timeSaved: '10+ developer hours weekly',
            costReduction: 'Automated manual workflows',
            revenueIncrease: '$1M+ monthly revenue globally',
            roi: 'Significant enterprise impact',
            timeline: 'Production deployment',
            profitImprovement: 1000000,
            growthMetrics: {
                acquisitionImprovement: 'Enabled new revenue stream',
                retentionImprovement: 'Improved service reliability',
                expansionIncrease: 'Global feature deployment'
            }
        },
        testimonial: {
            quote: '',
            author: '',
            position: ''
        },
        lessonsLearned: {
            whatWorked: [
                'Test-driven development approach',
                'Agile methodology with cross-functional collaboration',
                'Modern tech stack with Java and PostgreSQL'
            ],
            challenges: [
                'Working with enterprise-scale systems',
                'Meeting production-level quality standards',
                'Coordinating with multiple stakeholders'
            ],
            recommendations: [
                'Maintain rigorous testing standards',
                'Collaborate closely with product managers',
                'Focus on scalable, maintainable solutions'
            ]
        },
        businessEquations: {
            profit: {
                revenue: 1000000,
                cost: 0,
                netProfit: 1000000
            },
            growth: {
                acquisition: 30,
                retention: 25,
                expansion: 40
            },
            value: {
                cashflow: 1000000,
                risk: 'low',
                totalValue: 12000000
            }
        }
    },
    {
        id: 'ai-marketing-automation',
        title: 'AI Marketing Automation Platform',
        industry: 'AI Consulting',
        companySize: 'Small Business',
        problem: 'Manual marketing processes consuming excessive time with limited lead generation effectiveness.',
        traditionalApproach: 'Manual email outreach, CRM management, and content creation processes.',
        aiAutomationSolution: 'Implemented agentic workflows with LLM integrations for automated lead generation and personalized outreach.',
        toolsUsed: ['python', 'llm-apis', 'automation-tools'],
        implementation: {
            timeline: '4 weeks',
            cost: 2500,
            teamSize: 1,
            complexity: 'medium'
        },
        results: {
            timeSaved: '300+ hours of manual work',
            costReduction: '20+ hours saved weekly',
            revenueIncrease: 'Automated outreach to 1000+ leads',
            roi: '12x return on automation investment',
            timeline: 'Immediate impact',
            profitImprovement: 30000,
            growthMetrics: {
                acquisitionImprovement: '1000+ validated leads contacted',
                retentionImprovement: 'Personalized communication at scale',
                expansionIncrease: 'Scalable lead generation system'
            }
        },
        testimonial: {
            quote: '',
            author: '',
            position: ''
        },
        lessonsLearned: {
            whatWorked: [
                'LLM integration for personalization',
                'Automated workflow design',
                'Data validation and lead scoring'
            ],
            challenges: [
                'Balancing automation with personalization',
                'Ensuring compliance with outreach regulations',
                'Optimizing response rates'
            ],
            recommendations: [
                'Start with small-scale testing',
                'Focus on data quality and validation',
                'Monitor and optimize automation performance'
            ]
        },
        businessEquations: {
            profit: {
                revenue: 30000,
                cost: 2500,
                netProfit: 27500
            },
            growth: {
                acquisition: 85,
                retention: 40,
                expansion: 60
            },
            value: {
                cashflow: 27500,
                risk: 'low',
                totalValue: 330000
            }
        }
    }
];