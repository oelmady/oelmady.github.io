import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
    {
        id: 'ecommerce-lead-qualification',
        title: 'E-commerce Lead Qualification Automation',
        industry: 'E-commerce',
        companySize: '25-50 employees',

        fastApplication: {
            rootProblem: 'Manual lead review taking 20 hours/week with only 40% conversion rate',
            fundamentalConstraints: [
                'No systematic lead scoring system in place',
                'Manual email review process creating delays',
                'Inconsistent qualification criteria across team members'
            ],

            oneWeekSprint: {
                day1_2: 'Conducted comprehensive data audit of existing leads and identified scoring criteria based on purchase history, engagement metrics, and demographic data',
                day3_4: 'Built automated lead scoring system using Zapier integration with ChatGPT API for intelligent email analysis and HubSpot for lead management',
                day5_7: 'Deployed system with A/B testing, monitored performance, and optimized scoring algorithms based on initial conversion data'
            },

            consequences: {
                positive: [
                    'Immediate 15-hour weekly time savings for sales team',
                    'Conversion rate improved from 40% to 65% through better qualification',
                    'Consistent lead evaluation criteria across entire team',
                    'Real-time lead scoring enabling faster response times'
                ],
                negative: [
                    'Initial setup required 2 days of concentrated effort',
                    'Team needed training on new automated processes',
                    'Some edge cases required manual review override capability'
                ],
                mitigation: [
                    'Created comprehensive training materials and hands-on sessions',
                    'Built manual override functionality for complex cases',
                    'Established weekly review meetings to optimize scoring criteria'
                ]
            },

            alternativesConsidered: [
                'Hiring additional sales qualification specialists',
                'Implementing expensive CRM with built-in scoring',
                'Outsourcing lead qualification to third-party service'
            ],
            benchmarksUsed: [
                'Industry standard 45-55% conversion rates for qualified leads',
                'Best-in-class companies achieving 60-70% with automation',
                'Competitor analysis showing 2-4 hour response time benchmarks'
            ]
        },

        businessEquations: {
            profit: {
                revenue: 15000, // Monthly increase from better conversion rates
                cost: -4500, // Monthly savings from reduced manual work
                netProfit: 19500
            },
            growth: {
                acquisition: 25, // 25% improvement in lead acquisition through faster response
                retention: 10, // Better qualified leads have higher lifetime value
                expansion: 15 // More time for upselling to existing customers
            },
            value: {
                cashflow: 19500, // Monthly net improvement
                risk: 'low', // Low risk due to proven automation tools
                totalValue: 234000 // Annual value creation
            }
        },

        problem: 'E-commerce company struggling with manual lead qualification process consuming 20 hours weekly, resulting in slow response times and 40% conversion rate well below industry standards.',

        traditionalApproach: 'Hire additional sales development representatives at $50K+ annually each, implement manual lead scoring spreadsheets, create email templates for consistent messaging.',

        aiAutomationSolution: 'Implemented automated lead scoring system using Zapier for workflow automation, ChatGPT API for intelligent email content analysis, and HubSpot integration for seamless lead management and tracking.',

        toolsUsed: ['zapier', 'chatgpt-api', 'hubspot'],

        implementation: {
            timeline: '5 business days',
            cost: 2500,
            teamSize: 2,
            complexity: 'medium'
        },

        results: {
            timeSaved: '15 hours per week',
            costReduction: '$4,500 monthly in labor costs',
            revenueIncrease: '$15,000 monthly from improved conversion rates',
            roi: '680% annual ROI',
            timeline: 'Results visible within first week',

            profitImprovement: 19500,
            growthMetrics: {
                acquisitionImprovement: '25% faster lead processing',
                retentionImprovement: '10% higher customer lifetime value',
                expansionIncrease: '15% more upselling opportunities'
            }
        },

        testimonial: {
            quote: 'The automated lead scoring system transformed our sales process. We went from manually reviewing every lead to having qualified prospects automatically prioritized and routed. Our conversion rate jumped from 40% to 65% in just two weeks.',
            author: 'Sarah Martinez',
            position: 'Sales Director'
        },

        lessonsLearned: {
            whatWorked: [
                'Starting with clear scoring criteria based on historical data',
                'Gradual rollout with A/B testing to validate improvements',
                'Regular team feedback sessions to refine the automation',
                'Integration with existing tools rather than complete system replacement'
            ],
            challenges: [
                'Initial resistance from sales team worried about automation replacing human judgment',
                'Need for ongoing optimization as customer patterns evolved',
                'Balancing automation efficiency with personal touch for high-value prospects'
            ],
            recommendations: [
                'Invest time upfront in comprehensive data analysis for scoring criteria',
                'Maintain human oversight and override capabilities for complex cases',
                'Plan for ongoing optimization and team training beyond initial implementation',
                'Monitor conversion rates closely and adjust automation rules based on performance'
            ]
        }
    },

    {
        id: 'saas-onboarding',
        title: 'SaaS Customer Onboarding Optimization',
        industry: 'Software as a Service',
        companySize: '50-100 employees',

        fastApplication: {
            rootProblem: '25% customer churn in first 90 days with manual onboarding taking 5 hours per customer',
            fundamentalConstraints: [
                'No systematic follow-up process for new customers',
                'Unclear progress tracking for onboarding milestones',
                'Manual coordination between sales, success, and technical teams'
            ],

            oneWeekSprint: {
                day1_2: 'Mapped complete customer journey from signup to first value realization, identified key engagement touchpoints and common drop-off points',
                day3_4: 'Built automated onboarding sequences using Intercom for progressive disclosure, HubSpot for milestone tracking, and automated email sequences for guidance',
                day5_7: 'Deployed system with progress tracking dashboard, implemented automated escalation for at-risk customers, and trained customer success team on new workflows'
            },

            consequences: {
                positive: [
                    'Churn rate reduced from 25% to 12% within first month',
                    'Onboarding time per customer reduced from 5 hours to 2 hours',
                    '95% feature adoption rate compared to previous 60%',
                    'Customer success team could focus on high-touch strategic accounts'
                ],
                negative: [
                    'Initial customer feedback about less personal touch during onboarding',
                    'Need for ongoing content updates as product features evolved',
                    'Technical integration challenges with existing customer database'
                ],
                mitigation: [
                    'Added personal check-ins at key milestones (day 7, 21, and 45)',
                    'Created dynamic content system for automatic updates',
                    'Implemented gradual rollout with legacy system fallback during transition'
                ]
            },

            alternativesConsidered: [
                'Hiring additional customer success managers',
                'Creating static onboarding documentation and video library',
                'Implementing expensive customer success platform'
            ],
            benchmarksUsed: [
                'SaaS industry average 20-25% first-year churn rates',
                'Best-in-class onboarding achieving sub-10% churn',
                'Time-to-value benchmarks showing 30-day activation windows'
            ]
        },

        businessEquations: {
            profit: {
                revenue: 28000, // Monthly recurring revenue retention from reduced churn
                cost: -8000, // Reduced manual onboarding labor costs
                netProfit: 36000
            },
            growth: {
                acquisition: 15, // Better onboarding experience improves referral rates
                retention: 52, // Massive improvement from 75% to 88% retention
                expansion: 25, // Better product adoption leads to more upgrade opportunities
            },
            value: {
                cashflow: 36000, // Monthly improvement
                risk: 'low', // Low risk with proper personal touch maintenance
                totalValue: 432000 // Annual value
            }
        },

        problem: 'SaaS company experiencing 25% customer churn in first 90 days due to poor onboarding experience, with customer success team spending 5 hours manually guiding each new customer through setup and initial usage.',

        traditionalApproach: 'Hire additional customer success managers at $75K+ annually, create comprehensive documentation library, implement manual check-in schedules and milestone tracking spreadsheets.',

        aiAutomationSolution: 'Deployed intelligent onboarding automation using Intercom for progressive guidance, HubSpot for automated milestone tracking and at-risk customer identification, with personalized touchpoints at critical moments.',

        toolsUsed: ['intercom', 'hubspot', 'make-com'],

        implementation: {
            timeline: '7 business days',
            cost: 3500,
            teamSize: 3,
            complexity: 'medium'
        },

        results: {
            timeSaved: '3 hours per customer onboarded',
            costReduction: '$8,000 monthly in reduced manual effort',
            revenueIncrease: '$28,000 monthly from improved retention',
            roi: '920% annual ROI',
            timeline: 'Churn improvement visible within 30 days',

            profitImprovement: 36000,
            growthMetrics: {
                acquisitionImprovement: '15% increase in referral rates',
                retentionImprovement: '52% reduction in early churn',
                expansionIncrease: '25% more feature adoption and upgrades'
            }
        },

        testimonial: {
            quote: 'The automated onboarding system was a game-changer. We cut our churn rate in half while actually improving the customer experience. Our team now focuses on strategic accounts instead of repetitive onboarding tasks.',
            author: 'Michael Chen',
            position: 'VP of Customer Success'
        },

        lessonsLearned: {
            whatWorked: [
                'Mapping the entire customer journey before building automation',
                'Maintaining personal touchpoints at critical moments',
                'Progressive disclosure of features based on usage patterns',
                'Real-time monitoring and intervention for at-risk customers'
            ],
            challenges: [
                'Balancing automation with personal relationship building',
                'Keeping onboarding content current with product updates',
                'Training team on when to intervene manually vs. trust automation'
            ],
            recommendations: [
                'Start with journey mapping and identify the highest-impact automation points',
                'Maintain human touchpoints at critical emotional moments',
                'Build feedback loops to continuously optimize automation based on customer behavior',
                'Plan for content maintenance and updates as part of ongoing operations'
            ]
        }
    },

    {
        id: 'manufacturing-inventory',
        title: 'Manufacturing Inventory Management Automation',
        industry: 'Manufacturing',
        companySize: '75-150 employees',

        fastApplication: {
            rootProblem: 'Daily manual inventory counts with 15% stockout rate and $50K tied up in excess inventory',
            fundamentalConstraints: [
                'No predictive reordering system based on historical usage patterns',
                'Manual tracking creating delays and inaccuracies in inventory data',
                'Lack of integration between sales forecasts and inventory planning'
            ],

            oneWeekSprint: {
                day1_2: 'Integrated existing ERP system with Power Automate for real-time data sync, analyzed 12 months of historical usage patterns',
                day3_4: 'Built predictive reordering model using Excel with advanced formulas and automated alerts, connected to supplier ordering systems',
                day5_7: 'Deployed automated alert system for reorder points, implemented safety stock calculations, and created management dashboard'
            },

            consequences: {
                positive: [
                    'Stockout rate reduced from 15% to 3% within first month',
                    '$30K in working capital freed up through optimized inventory levels',
                    '90% reduction in manual counting time through automated tracking',
                    'Improved supplier relationships through predictable ordering patterns'
                ],
                negative: [
                    'Initial over-reliance on predictive model without seasonal adjustments',
                    'Team concerns about reduced visibility into physical inventory',
                    'Integration challenges with legacy ERP system'
                ],
                mitigation: [
                    'Added seasonal pattern recognition and manual override capabilities',
                    'Implemented daily automated reports and physical verification processes',
                    'Created comprehensive team training on new system monitoring'
                ]
            },

            alternativesConsidered: [
                'Implementing expensive enterprise inventory management system',
                'Hiring additional inventory specialists',
                'Outsourcing inventory management to third-party logistics provider'
            ],
            benchmarksUsed: [
                'Manufacturing industry average 8-12% stockout rates',
                'Best-practice inventory turnover ratios for similar manufacturers',
                'Working capital optimization targets based on industry standards'
            ]
        },

        businessEquations: {
            profit: {
                revenue: 8000, // Monthly revenue from reduced stockouts
                cost: -12000, // Monthly savings from labor reduction and optimized inventory
                netProfit: 20000
            },
            growth: {
                acquisition: 20, // Better delivery reliability improves customer acquisition
                retention: 25, // Consistent availability improves customer satisfaction
                expansion: 15, // More reliable supply chain enables new product lines
            },
            value: {
                cashflow: 50000, // One-time cash freed up plus monthly improvements
                risk: 'medium', // Medium risk due to reliance on predictive models
                totalValue: 290000 // Annual value including cash flow improvement
            }
        },

        problem: 'Manufacturing company struggling with manual daily inventory counts, experiencing 15% stockout rate causing production delays, while maintaining $50K in excess inventory tie-up affecting cash flow.',

        traditionalApproach: 'Hire inventory managers at $60K+ annually, implement manual reorder point systems, increase safety stock levels across all SKUs, weekly physical inventory audits.',

        aiAutomationSolution: 'Implemented predictive inventory management using Power Automate for ERP integration, Excel-based predictive analytics for reorder optimization, and automated alert systems for proactive inventory management.',

        toolsUsed: ['make-com', 'zapier'],

        implementation: {
            timeline: '5 business days',
            cost: 4000,
            teamSize: 2,
            complexity: 'medium'
        },

        results: {
            timeSaved: '25 hours per week in manual inventory management',
            costReduction: '$12,000 monthly in labor and carrying costs',
            revenueIncrease: '$8,000 monthly from reduced stockouts',
            roi: '400% annual ROI plus $30K one-time cash improvement',
            timeline: 'Inventory optimization visible within 2 weeks',

            profitImprovement: 20000,
            growthMetrics: {
                acquisitionImprovement: '20% better delivery reliability',
                retentionImprovement: '25% improvement in customer satisfaction',
                expansionIncrease: '15% capacity for new product introductions'
            }
        },

        testimonial: {
            quote: 'The automated inventory system eliminated our chronic stockout problems while freeing up $30K in working capital. We went from daily manual counts to predictive reordering that actually works.',
            author: 'David Rodriguez',
            position: 'Operations Manager'
        },

        lessonsLearned: {
            whatWorked: [
                'Starting with historical data analysis to understand usage patterns',
                'Integrating with existing ERP rather than replacing entire system',
                'Building in safety stock calculations and manual override capabilities',
                'Creating clear dashboards for ongoing monitoring and optimization'
            ],
            challenges: [
                'Initial model accuracy required several weeks of refinement',
                'Seasonal variations needed additional model sophistication',
                'Change management for team accustomed to physical inventory control'
            ],
            recommendations: [
                'Invest in comprehensive historical data cleanup before model building',
                'Plan for seasonal adjustments and manual override capabilities',
                'Maintain some physical verification processes during transition period',
                'Create comprehensive training on interpreting and acting on automated alerts'
            ]
        }
    }
];