import { AITool } from '../types';

export const aiTools: AITool[] = [
    {
        id: 'zapier',
        name: 'Zapier',
        category: 'automation',
        description: 'Connect and automate workflows between 5,000+ apps without coding',

        businessValue: {
            revenueImpact: 8000,
            costReduction: 6000,
            riskMitigation: 'low',
            implementationComplexity: 'low'
        },

        pricing: {
            freeTier: true,
            startingPrice: 19.99,
            pricingModel: 'monthly',
            roiTimeline: '7-14 days'
        },

        implementation: {
            setupTime: '2-4 hours',
            complexity: 'low',
            technicalRequirements: ['Basic understanding of your current tools', 'Admin access to connected apps'],
            skillLevel: 'beginner',

            weeklyImplementation: {
                day1_2: 'Map current workflows and identify automation opportunities, set up Zapier account and connect primary apps',
                day3_4: 'Build and test 3-5 core automation workflows (lead capture, data sync, notifications)',
                day5_7: 'Deploy automations live, monitor performance, and optimize based on initial results'
            },

            risks: {
                dependency: 'Relies on third-party app APIs, potential for service disruptions',
                quality: 'Limited data transformation capabilities for complex workflows',
                humanImpact: 'Team may feel disconnected from automated processes'
            },
            mitigation: [
                'Create backup manual processes for critical workflows',
                'Start with non-critical automations to test reliability',
                'Provide team training on monitoring and managing automations'
            ],

            alternatives: [
                {
                    name: 'Make.com (Integromat)',
                    comparison: 'More powerful but steeper learning curve, better for complex integrations'
                },
                {
                    name: 'Microsoft Power Automate',
                    comparison: 'Better for Microsoft ecosystem, limited third-party app support'
                }
            ],
            benchmarks: [
                {
                    industry: 'Small businesses',
                    performance: 'Average 10 hours saved per week per user'
                },
                {
                    industry: 'Marketing teams',
                    performance: '300% increase in lead processing speed'
                }
            ]
        },

        integrations: ['Gmail', 'Slack', 'HubSpot', 'Salesforce', 'Google Sheets', 'Mailchimp', 'Trello', 'Airtable'],
        useCases: [
            'Lead capture from website to CRM',
            'Automatic invoice creation from project completion',
            'Social media posting automation',
            'Customer onboarding sequences',
            'Data synchronization between tools'
        ],
        pros: [
            'Extremely user-friendly interface',
            'Vast library of pre-built integrations',
            'No coding required',
            'Active community and support',
            'Reliable uptime and performance'
        ],
        cons: [
            'Limited customization for complex workflows',
            'Can become expensive with high usage',
            'Dependent on third-party API reliability',
            'Limited error handling for complex scenarios'
        ],
        caseStudies: ['ecommerce-lead-qualification', 'manufacturing-inventory']
    },

    {
        id: 'make-com',
        name: 'Make.com (formerly Integromat)',
        category: 'automation',
        description: 'Advanced visual automation platform for complex integrations and data processing',

        businessValue: {
            revenueImpact: 12000,
            costReduction: 10000,
            riskMitigation: 'medium',
            implementationComplexity: 'medium'
        },

        pricing: {
            freeTier: true,
            startingPrice: 9,
            pricingModel: 'monthly',
            roiTimeline: '14-30 days'
        },

        implementation: {
            setupTime: '4-8 hours',
            complexity: 'medium',
            technicalRequirements: ['Understanding of data structures', 'API knowledge helpful', 'Logical thinking for complex workflows'],
            skillLevel: 'intermediate',

            weeklyImplementation: {
                day1_2: 'System analysis and data flow mapping, Make.com account setup and initial app connections',
                day3_4: 'Build complex integration scenarios with data transformation and error handling',
                day5_7: 'Testing, validation, and deployment of integrated automation system'
            },

            risks: {
                dependency: 'Complex scenarios create multiple failure points',
                quality: 'Requires technical understanding to maintain and troubleshoot',
                humanImpact: 'Team needs training to understand and modify workflows'
            },
            mitigation: [
                'Document all scenarios thoroughly',
                'Implement comprehensive error handling and notifications',
                'Create team training program for ongoing maintenance'
            ],

            alternatives: [
                {
                    name: 'Zapier',
                    comparison: 'Easier to use but less powerful for complex data transformations'
                },
                {
                    name: 'Custom development',
                    comparison: 'More flexible but requires 10x the time and technical expertise'
                }
            ],
            benchmarks: [
                {
                    industry: 'E-commerce',
                    performance: '80% reduction in manual data processing time'
                },
                {
                    industry: 'SaaS companies',
                    performance: '60% faster customer onboarding through advanced automation'
                }
            ]
        },

        integrations: ['Any REST API', 'Webhook support', 'Database connections', 'Custom HTTP requests', 'File processing'],
        useCases: [
            'Complex data transformation and processing',
            'Multi-step conditional workflows',
            'Advanced error handling and retry logic',
            'Real-time data synchronization',
            'Custom business logic automation'
        ],
        pros: [
            'Powerful data transformation capabilities',
            'Advanced conditional logic and branching',
            'Excellent error handling and debugging',
            'Cost-effective for high-volume operations',
            'Visual workflow builder'
        ],
        cons: [
            'Steeper learning curve than simpler alternatives',
            'Requires more technical knowledge to maintain',
            'Complex scenarios can be difficult to troubleshoot',
            'Limited pre-built templates compared to Zapier'
        ],
        caseStudies: ['manufacturing-inventory', 'saas-onboarding']
    },

    {
        id: 'chatgpt-api',
        name: 'ChatGPT API',
        category: 'content',
        description: 'AI-powered content generation and text processing for scalable content creation',

        businessValue: {
            revenueImpact: 15000,
            costReduction: 8000,
            riskMitigation: 'medium',
            implementationComplexity: 'medium'
        },

        pricing: {
            freeTier: false,
            startingPrice: 0.002, // per 1K tokens
            pricingModel: 'per-use',
            roiTimeline: '7-14 days'
        },

        implementation: {
            setupTime: '1-3 days',
            complexity: 'medium',
            technicalRequirements: ['API integration knowledge', 'Prompt engineering skills', 'Content review process'],
            skillLevel: 'intermediate',

            weeklyImplementation: {
                day1_2: 'Prompt engineering and content pipeline design, API setup and initial testing',
                day3_4: 'Build automated content generation system with quality controls',
                day5_7: 'Deploy content pipeline with human review process and performance monitoring'
            },

            risks: {
                dependency: 'AI-generated content may lack accuracy or brand alignment',
                quality: 'Potential for generic or inappropriate content generation',
                humanImpact: 'Content creators may feel replaced or undervalued'
            },
            mitigation: [
                'Implement human review and editing process',
                'Create brand-specific prompts and guidelines',
                'Regular content quality audits and prompt optimization'
            ],

            alternatives: [
                {
                    name: 'Claude API',
                    comparison: 'Better for long-form content, different strengths in reasoning'
                },
                {
                    name: 'Hire content writers',
                    comparison: '$50K+ per writer, limited scalability, higher ongoing costs'
                }
            ],
            benchmarks: [
                {
                    industry: 'Marketing agencies',
                    performance: '500% increase in content production volume'
                },
                {
                    industry: 'E-commerce',
                    performance: '70% reduction in product description creation time'
                }
            ]
        },

        integrations: ['REST API', 'Python/Node.js SDKs', 'Webhook support', 'Custom applications'],
        useCases: [
            'Blog post and article generation',
            'Product descriptions and marketing copy',
            'Email marketing content',
            'Social media post creation',
            'Customer support response templates'
        ],
        pros: [
            'Extremely versatile content generation',
            'Cost-effective for high-volume content needs',
            'Consistent availability and response times',
            'Continuously improving model capabilities',
            'Easy integration with existing workflows'
        ],
        cons: [
            'Requires careful prompt engineering for quality',
            'May generate factually incorrect information',
            'Brand voice consistency requires ongoing tuning',
            'Usage costs can scale quickly with high volume'
        ],
        caseStudies: ['marketing-agency-content', 'ecommerce-lead-qualification']
    },

    {
        id: 'hubspot',
        name: 'HubSpot CRM & Marketing Hub',
        category: 'communication',
        description: 'All-in-one CRM, marketing automation, and customer service platform',

        businessValue: {
            revenueImpact: 25000,
            costReduction: 15000,
            riskMitigation: 'low',
            implementationComplexity: 'high'
        },

        pricing: {
            freeTier: true,
            startingPrice: 50,
            pricingModel: 'monthly',
            roiTimeline: '30-60 days'
        },

        implementation: {
            setupTime: '1-2 weeks',
            complexity: 'high',
            technicalRequirements: ['CRM migration planning', 'Marketing automation strategy', 'Team training program'],
            skillLevel: 'advanced',

            weeklyImplementation: {
                day1_2: 'Data migration planning and initial HubSpot setup with basic CRM configuration',
                day3_4: 'Marketing automation workflows and lead scoring system implementation',
                day5_7: 'Team training, testing, and go-live with ongoing optimization plan'
            },

            risks: {
                dependency: 'Significant platform lock-in with data migration complexity',
                quality: 'Feature overwhelm can reduce adoption and effectiveness',
                humanImpact: 'Significant change management required for team adoption'
            },
            mitigation: [
                'Phased implementation starting with core CRM functionality',
                'Comprehensive training program with ongoing support',
                'Data backup and export strategies before migration'
            ],

            alternatives: [
                {
                    name: 'Salesforce',
                    comparison: 'More customizable but significantly more complex and expensive'
                },
                {
                    name: 'Pipedrive',
                    comparison: 'Simpler CRM but limited marketing automation capabilities'
                }
            ],
            benchmarks: [
                {
                    industry: 'B2B companies',
                    performance: '37% increase in sales qualified leads'
                },
                {
                    industry: 'Growing businesses',
                    performance: '40% improvement in marketing ROI'
                }
            ]
        },

        integrations: ['Salesforce', 'Gmail', 'Outlook', 'Slack', 'WordPress', 'Shopify', 'Zoom', 'QuickBooks'],
        useCases: [
            'Complete customer lifecycle management',
            'Marketing automation and lead nurturing',
            'Sales pipeline management and forecasting',
            'Customer service and support ticketing',
            'Website and landing page creation'
        ],
        pros: [
            'Comprehensive all-in-one platform',
            'Strong free tier with room to grow',
            'Excellent integration ecosystem',
            'Robust reporting and analytics',
            'Strong community and educational resources'
        ],
        cons: [
            'Can be overwhelming for small teams',
            'Advanced features require expensive tiers',
            'Customization complexity for unique workflows',
            'Steep learning curve for full utilization'
        ],
        caseStudies: ['saas-onboarding', 'professional-services-communication']
    },

    {
        id: 'intercom',
        name: 'Intercom',
        category: 'communication',
        description: 'Customer messaging platform with AI-powered chatbots and support automation',

        businessValue: {
            revenueImpact: 18000,
            costReduction: 12000,
            riskMitigation: 'low',
            implementationComplexity: 'medium'
        },

        pricing: {
            freeTier: false,
            startingPrice: 39,
            pricingModel: 'monthly',
            roiTimeline: '7-21 days'
        },

        implementation: {
            setupTime: '3-5 days',
            complexity: 'medium',
            technicalRequirements: ['Website integration', 'Chatbot conversation design', 'Support workflow mapping'],
            skillLevel: 'intermediate',

            weeklyImplementation: {
                day1_2: 'Platform setup, website integration, and initial chatbot configuration',
                day3_4: 'Advanced chatbot training, support workflow automation, and team setup',
                day5_7: 'Live deployment, team training, and performance optimization'
            },

            risks: {
                dependency: 'Customer experience depends on chatbot quality and human escalation',
                quality: 'Poor bot training can frustrate customers and damage relationships',
                humanImpact: 'Support team role changes from reactive to proactive management'
            },
            mitigation: [
                'Comprehensive bot training with real customer conversation data',
                'Clear escalation paths to human agents for complex issues',
                'Regular conversation review and bot optimization'
            ],

            alternatives: [
                {
                    name: 'Zendesk Chat',
                    comparison: 'Better for traditional ticketing but less advanced AI capabilities'
                },
                {
                    name: 'Drift',
                    comparison: 'More sales-focused but less comprehensive for support use cases'
                }
            ],
            benchmarks: [
                {
                    industry: 'SaaS companies',
                    performance: '67% of inquiries resolved automatically'
                },
                {
                    industry: 'E-commerce',
                    performance: '50% faster response times and 30% higher satisfaction'
                }
            ]
        },

        integrations: ['HubSpot', 'Salesforce', 'Slack', 'Shopify', 'Stripe', 'Google Analytics', 'Zapier'],
        useCases: [
            'Website visitor engagement and qualification',
            'Customer support automation and triage',
            'Product tours and onboarding assistance',
            'Lead qualification and sales handoff',
            'Proactive customer health monitoring'
        ],
        pros: [
            'Advanced AI chatbot capabilities',
            'Seamless human-to-bot handoffs',
            'Rich customer context and history',
            'Powerful automation and workflow features',
            'Excellent mobile and web chat experience'
        ],
        cons: [
            'Higher cost compared to basic chat solutions',
            'Requires ongoing bot training and optimization',
            'Complex pricing structure based on people reached',
            'Advanced features require higher-tier plans'
        ],
        caseStudies: ['saas-onboarding', 'ecommerce-lead-qualification']
    }
];