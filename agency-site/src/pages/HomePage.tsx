import React from 'react';
import { BarChart3, Zap, Users, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';

const HomePage = () => {
  const heroStats = [
    { number: '$2M+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '3 weeks', label: 'Average ROI Timeline', icon: Zap },
  ];

  const services = [
    {
      title: 'Business Equation Assessment',
      description: 'Deep analysis of your Profit = Revenue - Cost equation with AI-powered optimization opportunities',
      icon: BarChart3,
      benefits: ['Identify hidden cost centers', 'Revenue optimization strategies', 'Predictive profit modeling'],
      cta: 'Start Assessment',
      path: '/flowchart'
    },
    {
      title: 'Growth Acceleration',
      description: 'Strategic Growth = Acquisition + Retention + Expansion framework implementation',
      icon: TrendingUp,
      benefits: ['Customer acquisition automation', 'Retention optimization systems', 'Expansion revenue strategies'],
      cta: 'View Framework',
      path: '/guide'
    },
    {
      title: 'Value Creation Systems',
      description: 'Maximize Value = Cashflow - Risk through intelligent automation and process optimization',
      icon: Users,
      benefits: ['Cashflow acceleration', 'Risk mitigation protocols', 'Value realization tracking'],
      cta: 'Explore Tools',
      path: '/tools'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'First Principles Analysis',
      description: 'Break down your business challenges to fundamental components using proven frameworks'
    },
    {
      step: '02',
      title: 'Action-Oriented Implementation',
      description: '1-week sprints with measurable outcomes and immediate value creation'
    },
    {
      step: '03',
      title: 'Second-Order Thinking',
      description: 'Anticipate consequences and optimize for long-term strategic advantages'
    },
    {
      step: '04',
      title: 'Triangulation Validation',
      description: 'Multi-perspective verification ensuring sustainable and scalable solutions'
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
                Transform Your Business with
                <span className="text-fast-blue block mt-2">AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Using our proven FAST Framework, we deliver measurable ROI through intelligent automation.
                From process optimization to revenue acceleration - see results in weeks, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://www.upwork.com/freelancers/~018a23423d96a2ea09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-fast-blue to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/flowchart"
                  className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-all duration-200"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Free Business Assessment</span>
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
              FAST Framework Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology delivers sustainable business transformation through 
              systematic analysis and intelligent automation implementation.
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
              The FAST Framework Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent results and sustainable growth 
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
            Join 50+ businesses that have achieved measurable ROI through our proven FAST Framework methodology.
            Get started with a free business equation assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:omar.elmady@nexusautomationai.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-fast-blue to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/flowchart"
              className="inline-flex items-center space-x-2 border-2 border-fast-blue text-fast-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-fast-blue hover:text-white transition-all duration-200"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Start Assessment</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;