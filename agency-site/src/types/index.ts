// Business Equations Foundation
export interface BusinessEquations {
    profit: {
        revenue: number;
        cost: number;
        netProfit: number;
    };
    growth: {
        acquisition: number;
        retention: number;
        expansion: number;
    };
    value: {
        cashflow: number;
        risk: 'low' | 'medium' | 'high';
        totalValue: number;
    };
}

// Core Business Analysis Structure
export interface FirstPrinciplesAnalysis {
    firstPrinciples: {
        fundamentalConstraints: {
            physical: string[];
            human: string[];
            system: string[];
        };
        rootCauses: string[];
        valueChainImpact: {
            input: string;
            process: string;
            output: string;
            outcome: string;
        };
    };
    actionOriented: {
        quickWinSolutions: {
            day1_2: string;
            day3_4: string;
            day5_7: string;
            successCriteria: string[];
        };
    };
    secondOrderThinking: {
        implementationRisks: {
            primary: string;
            secondary: string[];
            mitigation: string[];
        };
    };
    triangulation: {
        alternatives: {
            name: string;
            comparison: string;
        }[];
        benchmarks: {
            industry: string;
            performance: string;
        }[];
    };
}

// Problem Category Data Model
export interface ProblemCategory {
    id: string;
    title: string;
    description: string;
    icon: string;

    // Business Equation Mapping
    equationImpact: {
        revenue: number; // Monthly impact in dollars
        cost: number; // Monthly cost in dollars
        acquisition: number; // Customer acquisition impact
        retention: number; // Customer retention impact  
        expansion: number; // Revenue expansion impact
        cashflow: number; // Cash flow impact
        risk: 'low' | 'medium' | 'high'; // Risk level
    };

    symptoms: string[];
    traditionalApproach: string;
    aiAutomationApproach: string;

    aiSolutions: string[]; // Array of tool IDs
    caseStudies: string[]; // Array of case study IDs
}

// AI Tools Data Model
export interface AITool {
    id: string;
    name: string;
    category: 'automation' | 'content' | 'analytics' | 'communication';
    description: string;

    // Business Equation Impact
    businessValue: {
        revenueImpact: number; // Potential monthly revenue increase
        costReduction: number; // Monthly cost savings
        riskMitigation: 'low' | 'medium' | 'high';
        implementationComplexity: 'low' | 'medium' | 'high';
    };

    pricing: {
        freeTier: boolean;
        startingPrice: number;
        pricingModel: 'monthly' | 'per-use' | 'enterprise';
        roiTimeline: string; // e.g., "30-60 days"
    };

    // Implementation Details
    implementation: {
        setupTime: string;
        complexity: 'low' | 'medium' | 'high';
        technicalRequirements: string[];
        skillLevel: 'beginner' | 'intermediate' | 'advanced';

        // Action Oriented - 1 Week Sprint
        weeklyImplementation: {
            day1_2: string;
            day3_4: string;
            day5_7: string;
        };

        // Second Order Consequences
        risks: {
            dependency: string;
            quality: string;
            humanImpact: string;
        };
        mitigation: string[];

        // Triangulation Data
        alternatives: {
            name: string;
            comparison: string;
        }[];
        benchmarks: {
            industry: string;
            performance: string;
        }[];
    };

    integrations: string[];
    useCases: string[];
    pros: string[];
    cons: string[];
    caseStudies: string[];
}

// Case Studies Data Model
export interface CaseStudy {
    id: string;
    title: string;
    industry: string;
    companySize: string;

    // Business Equation Impact
    businessEquations: BusinessEquations;

    problem: string;
    traditionalApproach: string;
    aiAutomationSolution: string;
    toolsUsed: string[]; // Array of tool IDs

    implementation: {
        timeline: string;
        cost: number;
        teamSize: number;
        complexity: 'low' | 'medium' | 'high';
    };

    results: {
        timeSaved: string;
        costReduction: string;
        revenueIncrease?: string;
        roi: string;
        timeline: string;

        // Quantified Business Equation Results
        profitImprovement: number;
        growthMetrics: {
            acquisitionImprovement: string;
            retentionImprovement: string;
            expansionIncrease: string;
        };
    };

    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };

    lessonsLearned: {
        whatWorked: string[];
        challenges: string[];
        recommendations: string[];
    };
}

// Business Equation Assessment
export interface AssessmentQuestion {
    question: string;
    options: string[];
    problemMapping: string[];
    equation: 'profit' | 'growth' | 'value';
}

export interface AssessmentResult {
    primaryEquation: 'profit' | 'growth' | 'value';
    problemCategories: string[];
    recommendedTools: string[];
    estimatedROI: {
        monthlySavings: number;
        paybackPeriod: number;
        annualValue: number;
    };
    implementationPlan: {
        week1: string[];
        risks: string[];
        successCriteria: string[];
    };
}

// ROI Calculator Inputs
export interface ROIInputs {
    currentManualHours: number;
    hourlyRate: number;
    automationEfficiency: number; // 0-1
    implementationCost: number;
    monthlyToolCost: number;
}

export interface ROIResults {
    roi: number;
    paybackPeriod: number;
    annualSavings: number;
    monthlySavings: number;
    businessEquationImpact: BusinessEquations;
}