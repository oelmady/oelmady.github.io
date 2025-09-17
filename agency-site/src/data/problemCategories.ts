import { ProblemCategory } from '../types';

export const problemCategories: ProblemCategory[] = [
  {
    id: 'data-problems',
    title: 'Data Processing & Integration',
    description: 'Volume, quality, and integration challenges that impact decision-making speed and accuracy',
    icon: 'Database',
    
    fastFramework: {
      firstPrinciples: {
        fundamentalConstraints: {
          physical: ['Data storage limits', 'Processing power constraints', 'Network bandwidth'],
          human: ['Manual data entry errors', 'Analysis bottlenecks', 'Skill gaps'],
          system: ['Legacy system incompatibility', 'API limitations', 'Data format inconsistencies']
        },
        rootCauses: [
          'No unified data architecture',
          'Manual processes create delays',
          'Inconsistent data formats across systems',
          'Lack of real-time processing capability'
        ],
        valueChainImpact: {
          input: 'Raw data from multiple sources',
          process: 'Manual cleaning, transformation, and analysis',
          output: 'Reports with 48-72 hour delays',
          outcome: 'Decisions based on outdated information'
        }
      },
      actionOriented: {
        quickWinSolutions: {
          day1_2: 'Audit current data sources and identify highest-impact integration points',
          day3_4: 'Implement automated data pipeline for top 2 most critical data flows',
          day5_7: 'Deploy real-time dashboard with key metrics and automated alerts',
          successCriteria: [
            'Data processing time reduced by 80%',
            'Error rate decreased by 90%',
            'Real-time insights available within 15 minutes'
          ]
        }
      },
      secondOrderThinking: {
        implementationRisks: {
          primary: 'Over-automation without human oversight',
          secondary: [
            'Data quality degradation if validation rules are insufficient',
            'System dependency creates single point of failure',
            'Staff resistance to new automated processes'
          ],
          mitigation: [
            'Implement staged validation with human review checkpoints',
            'Create backup data processing procedures',
            'Comprehensive training and change management program'
          ]
        }
      },
      triangulation: {
        alternatives: [
          {
            name: 'Hire data analysts',
            comparison: '3x more expensive, scales linearly, human error prone'
          },
          {
            name: 'Custom development',
            comparison: '6-12 month timeline, higher risk, maintenance overhead'
          }
        ],
        benchmarks: [
          {
            industry: 'Similar companies',
            performance: '70% report 2-4x productivity gains from data automation'
          },
          {
            industry: 'Best-in-class',
            performance: '90% of Fortune 500 use automated data pipelines'
          }
        ]
      }
    },
    
    equationImpact: {
      revenue: 15000, // Monthly revenue from faster decision-making
      cost: -8000, // Monthly cost reduction from automation
      acquisition: 25, // 25% faster prospect qualification
      retention: 15, // 15% better customer insights
      expansion: 20, // 20% more upsell opportunities identified
      cashflow: 23000, // Net monthly cashflow improvement
      risk: 'low' // Low risk due to proven automation tools
    },
    
    symptoms: [
      'Reports take 2-3 days to generate',
      'Data exists in multiple systems without connection',
      'Manual data entry errors causing incorrect insights',
      'Team spends 20+ hours weekly on data compilation',
      'Decisions delayed waiting for complete information'
    ],
    
    traditionalApproach: 'Hire more analysts, create manual processes, weekly/monthly reporting cycles',
    
    aiAutomationApproach: 'Automated data pipelines with real-time processing, AI-powered quality checks, and intelligent alerts',
    
    aiSolutions: ['zapier', 'make-com', 'power-automate'],
    caseStudies: ['ecommerce-lead-qualification', 'manufacturing-inventory']
  },
  
  {
    id: 'process-problems',
    title: 'Workflow & Process Automation',
    description: 'Repetitive tasks, routing decisions, and scheduling bottlenecks that drain productivity',
    icon: 'Workflow',
    
    fastFramework: {
      firstPrinciples: {
        fundamentalConstraints: {
          physical: ['Time constraints', 'Resource limitations', 'Geographic distribution'],
          human: ['Context switching costs', 'Decision fatigue', 'Skill variability'],
          system: ['Manual handoffs', 'Lack of standardization', 'No process visibility']
        },
        rootCauses: [
          'Processes designed for human execution',
          'No clear decision criteria for routing',
          'Manual scheduling creates conflicts',
          'Lack of process standardization'
        ],
        valueChainImpact: {
          input: 'Requests, approvals, scheduling needs',
          process: 'Manual routing, approval chains, calendar coordination',
          output: 'Delayed responses, scheduling conflicts',
          outcome: 'Customer frustration, team inefficiency'
        }
      },
      actionOriented: {
        quickWinSolutions: {
          day1_2: 'Map top 3 most frequent manual processes and identify automation points',
          day3_4: 'Implement workflow automation for highest-volume process',
          day5_7: 'Deploy automated routing and notification system',
          successCriteria: [
            'Process completion time reduced by 60%',
            'Manual handoffs eliminated for 80% of routine tasks',
            'Response time improved from hours to minutes'
          ]
        }
      },
      secondOrderThinking: {
        implementationRisks: {
          primary: 'Process inflexibility for edge cases',
          secondary: [
            'Team loses process visibility and control',
            'Over-optimization creates brittleness',
            'Reduced human judgment in complex situations'
          ],
          mitigation: [
            'Build escalation paths for complex cases',
            'Maintain process dashboards for visibility',
            'Include human override capabilities'
          ]
        }
      },
      triangulation: {
        alternatives: [
          {
            name: 'Hire process managers',
            comparison: '$60K+ annual cost per manager, still manual bottlenecks'
          },
          {
            name: 'Process documentation only',
            comparison: 'No automation benefit, still requires manual execution'
          }
        ],
        benchmarks: [
          {
            industry: 'Service businesses',
            performance: '40-60% time savings from workflow automation'
          },
          {
            industry: 'High-growth companies',
            performance: '80% use automated workflows for standard processes'
          }
        ]
      }
    },
    
    equationImpact: {
      revenue: 12000, // Faster customer service leads to retention
      cost: -15000, // Significant labor cost reduction
      acquisition: 30, // Faster response times improve conversion
      retention: 25, // Better service consistency
      expansion: 15, // More time for relationship building
      cashflow: 27000, // Net monthly improvement
      risk: 'medium' // Medium risk due to process changes
    },
    
    symptoms: [
      'Requests sit in email for days awaiting approval',
      'Team spends hours on scheduling coordination',
      'Same questions answered repeatedly by different people',
      'Bottlenecks when key people are unavailable',
      'No visibility into process status or delays'
    ],
    
    traditionalApproach: 'Hire coordinators, create manual checklists, rely on email chains',
    
    aiAutomationApproach: 'Intelligent routing, automated approvals based on criteria, smart scheduling with conflict resolution',
    
    aiSolutions: ['hubspot', 'intercom', 'calendly'],
    caseStudies: ['saas-onboarding', 'professional-services-communication']
  },
  
  {
    id: 'communication-problems',
    title: 'Customer Communication & Support',
    description: 'Scale, personalization, and response time challenges in customer interactions',
    icon: 'MessageSquare',
    
    fastFramework: {
      firstPrinciples: {
        fundamentalConstraints: {
          physical: ['Limited human hours', 'Timezone differences', 'Channel fragmentation'],
          human: ['Inconsistent messaging', 'Response time variability', 'Training limitations'],
          system: ['Multiple communication platforms', 'No conversation history', 'Manual routing']
        },
        rootCauses: [
          'Human-only communication model doesnt scale',
          'No intelligent triage system',
          'Lack of personalization at scale',
          'No proactive communication triggers'
        ],
        valueChainImpact: {
          input: 'Customer inquiries, support requests, sales questions',
          process: 'Manual response, routing, follow-up',
          output: 'Delayed responses, inconsistent quality',
          outcome: 'Customer churn, lost sales opportunities'
        }
      },
      actionOriented: {
        quickWinSolutions: {
          day1_2: 'Analyze communication patterns and identify automation opportunities',
          day3_4: 'Deploy AI chatbot for FAQ and initial triage',
          day5_7: 'Implement automated follow-up sequences and personalized messaging',
          successCriteria: [
            'Response time reduced from hours to minutes',
            '80% of routine inquiries handled automatically',
            '50% increase in customer satisfaction scores'
          ]
        }
      },
      secondOrderThinking: {
        implementationRisks: {
          primary: 'Loss of human touch in customer relationships',
          secondary: [
            'AI misunderstanding complex customer issues',
            'Over-automation reduces empathy',
            'Customers prefer human interaction for sensitive issues'
          ],
          mitigation: [
            'Clear escalation paths to human agents',
            'Sentiment analysis to detect frustration',
            'Regular bot training and conversation review'
          ]
        }
      },
      triangulation: {
        alternatives: [
          {
            name: 'Hire support staff',
            comparison: '$40K+ per agent, limited availability, scaling challenges'
          },
          {
            name: 'Outsource support',
            comparison: 'Quality control issues, cultural misalignment, higher costs'
          }
        ],
        benchmarks: [
          {
            industry: 'SaaS companies',
            performance: '67% use AI chatbots, 40% faster resolution times'
          },
          {
            industry: 'E-commerce',
            performance: '30% of support tickets resolved automatically'
          }
        ]
      }
    },
    
    equationImpact: {
      revenue: 18000, // Better customer experience increases sales
      cost: -12000, // Reduced support staff needs
      acquisition: 35, // Faster response improves conversion
      retention: 40, // Better support reduces churn
      expansion: 25, // More touchpoints for upselling
      cashflow: 30000, // Highest impact on cashflow
      risk: 'low' // Low risk with proper human escalation
    },
    
    symptoms: [
      'Customer emails pile up with 24+ hour response times',
      'Same questions answered repeatedly',
      'Support team overwhelmed during peak periods',
      'Lost sales due to slow inquiry responses',
      'Inconsistent messaging across team members'
    ],
    
    traditionalApproach: 'Hire more support staff, create FAQ pages, use ticket systems',
    
    aiAutomationApproach: 'AI-powered chatbots, automated response routing, personalized communication sequences',
    
    aiSolutions: ['intercom', 'hubspot', 'chatgpt-api'],
    caseStudies: ['saas-onboarding', 'professional-services-communication']
  },
  
  {
    id: 'content-problems',
    title: 'Content Creation & Management',
    description: 'Volume, quality, and optimization challenges for marketing and customer content',
    icon: 'FileText',
    
    fastFramework: {
      firstPrinciples: {
        fundamentalConstraints: {
          physical: ['Time to create quality content', 'Design skill requirements', 'Publication scheduling'],
          human: ['Creative blocks', 'Inconsistent brand voice', 'Limited subject matter expertise'],
          system: ['Manual content workflows', 'No content optimization', 'Fragmented creation tools']
        },
        rootCauses: [
          'Everything created from scratch',
          'No systematic content production process',
          'Limited optimization and performance tracking',
          'Lack of content personalization at scale'
        ],
        valueChainImpact: {
          input: 'Content ideas, brand guidelines, audience data',
          process: 'Manual writing, designing, optimizing, publishing',
          output: 'Limited content volume, inconsistent quality',
          outcome: 'Reduced marketing effectiveness, lost opportunities'
        }
      },
      actionOriented: {
        quickWinSolutions: {
          day1_2: 'Audit current content creation process and identify bottlenecks',
          day3_4: 'Implement AI content generation system with brand-specific prompts',
          day5_7: 'Deploy automated content optimization and performance tracking',
          successCriteria: [
            'Content creation speed increased by 300%',
            'Consistent brand voice across all content',
            'Performance-driven content optimization'
          ]
        }
      },
      secondOrderThinking: {
        implementationRisks: {
          primary: 'Generic, low-quality AI-generated content',
          secondary: [
            'Brand voice dilution',
            'Reduced creativity and original thinking',
            'Over-reliance on AI without human oversight'
          ],
          mitigation: [
            'Human editorial review process',
            'Brand-specific AI training and prompts',
            'Regular content quality audits'
          ]
        }
      },
      triangulation: {
        alternatives: [
          {
            name: 'Hire content creators',
            comparison: '$50K+ per creator, limited scalability, high turnover'
          },
          {
            name: 'Outsource content',
            comparison: 'Quality control issues, brand inconsistency, ongoing costs'
          }
        ],
        benchmarks: [
          {
            industry: 'Marketing agencies',
            performance: '60% report 5x content production increase with AI'
          },
          {
            industry: 'B2B companies',
            performance: '40% use AI for content creation, 3x engagement rates'
          }
        ]
      }
    },
    
    equationImpact: {
      revenue: 22000, // More content drives more leads and sales
      cost: -10000, // Reduced content creation costs
      acquisition: 45, // More content improves SEO and lead generation
      retention: 20, // Better content improves customer education
      expansion: 30, // Content supports upselling efforts
      cashflow: 32000, // Strong impact on business growth
      risk: 'medium' // Medium risk due to brand consistency concerns
    },
    
    symptoms: [
      'Content creation is a constant bottleneck',
      'Inconsistent publishing schedule',
      'Limited content personalization',
      'High cost per piece of content',
      'Poor content performance tracking'
    ],
    
    traditionalApproach: 'Hire writers and designers, use content calendars, manual optimization',
    
    aiAutomationApproach: 'AI content generation, automated optimization, performance-driven content creation',
    
    aiSolutions: ['chatgpt-api', 'canva-automation', 'hubspot'],
    caseStudies: ['marketing-agency-content', 'ecommerce-lead-qualification']
  }
];