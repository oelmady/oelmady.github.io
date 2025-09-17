import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Clock, DollarSign, Users } from 'lucide-react';
import { aiTools } from '../data/aiTools';
import { AITool } from '../types';

const ToolsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedComplexity, setSelectedComplexity] = useState('all');

    const categories = ['all', 'automation', 'crm', 'communication', 'content', 'analytics'];
    const complexities = ['all', 'low', 'medium', 'high'];

    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
        const matchesComplexity = selectedComplexity === 'all' || tool.implementation.complexity === selectedComplexity;

        return matchesSearch && matchesCategory && matchesComplexity;
    });

    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'low': return 'bg-green-100 text-green-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'high': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'automation': return '⚡';
            case 'crm': return '👥';
            case 'communication': return '💬';
            case 'content': return '📝';
            case 'analytics': return '📊';
            default: return '🔧';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-fast-dark mb-4">
                        AI Tools Database
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Curated collection of AI automation tools with implementation guides and ROI data
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search tools..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fast-blue focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fast-blue focus:border-transparent appearance-none"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Complexity Filter */}
                        <div>
                            <select
                                value={selectedComplexity}
                                onChange={(e) => setSelectedComplexity(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fast-blue focus:border-transparent"
                            >
                                {complexities.map(complexity => (
                                    <option key={complexity} value={complexity}>
                                        {complexity === 'all' ? 'All Complexities' : complexity.charAt(0).toUpperCase() + complexity.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing {filteredTools.length} of {aiTools.length} tools
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTools.map(tool => (
                        <div key={tool.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{getCategoryIcon(tool.category)}</span>
                                        <h3 className="text-xl font-bold text-fast-dark">{tool.name}</h3>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(tool.implementation.complexity)}`}>
                                        {tool.implementation.complexity}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <Clock className="h-5 w-5 text-fast-blue mx-auto mb-1" />
                                        <div className="text-sm font-medium text-gray-700">{tool.implementation.timeline}</div>
                                        <div className="text-xs text-gray-500">Setup</div>
                                    </div>
                                    <div className="text-center">
                                        <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                                        <div className="text-sm font-medium text-gray-700">${tool.implementation.cost.toLocaleString()}</div>
                                        <div className="text-xs text-gray-500">Cost</div>
                                    </div>
                                    <div className="text-center">
                                        <Users className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                                        <div className="text-sm font-medium text-gray-700">{tool.implementation.teamSize}</div>
                                        <div className="text-xs text-gray-500">Team</div>
                                    </div>
                                </div>

                                {/* ROI */}
                                <div className="bg-gradient-to-r from-fast-blue/10 to-blue-500/10 rounded-lg p-4 mb-6">
                                    <h4 className="font-semibold text-fast-dark mb-2">Expected ROI</h4>
                                    <div className="text-2xl font-bold text-fast-blue mb-1">
                                        {tool.roi.percentage}%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {tool.roi.timeline}
                                    </div>
                                </div>

                                {/* Use Cases Preview */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-fast-dark mb-2">Use Cases</h4>
                                    <div className="space-y-1">
                                        {tool.useCases.slice(0, 2).map((useCase, index) => (
                                            <div key={index} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-fast-blue mr-2">•</span>
                                                {useCase}
                                            </div>
                                        ))}
                                        {tool.useCases.length > 2 && (
                                            <div className="text-sm text-fast-blue font-medium">
                                                +{tool.useCases.length - 2} more
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={tool.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 w-full justify-center bg-gradient-to-r from-fast-blue to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                                >
                                    <span>View Implementation Guide</span>
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredTools.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No tools found</h3>
                        <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-fast-dark to-blue-900 text-white rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need Custom Implementation?</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                        Get personalized AI tool recommendations and implementation support
                    </p>
                    <a
                        href="mailto:omar.elmady@nexusautomationai.com"
                        className="inline-flex items-center space-x-2 bg-fast-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                    >
                        <span>Request Custom Solution</span>
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ToolsPage;