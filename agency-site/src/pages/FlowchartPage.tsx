import React from 'react';
import { Calendar, Target, TrendingUp, Users } from 'lucide-react';

const FlowchartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-fast-dark mb-4">
            FAST Framework Assessment
          </h1>
          <p className="text-xl text-gray-600">
            Interactive business equation analysis coming soon
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-fast-blue rounded-lg p-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fast-dark">First Principles</h3>
                  <p className="text-gray-600">Break down to fundamentals</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-fast-blue rounded-lg p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fast-dark">Action Oriented</h3>
                  <p className="text-gray-600">1-week implementation sprints</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-fast-blue rounded-lg p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fast-dark">Second Order</h3>
                  <p className="text-gray-600">Consider long-term consequences</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-fast-blue rounded-lg p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fast-dark">Triangulation</h3>
                  <p className="text-gray-600">Multi-perspective validation</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-fast-dark mb-4">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                Interactive React Flow diagram for business equation assessment will be implemented here.
              </p>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowchartPage;