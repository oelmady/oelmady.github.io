import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AITransformationVisualization = () => {
  const [activeView, setActiveView] = useState('roi');

  // ROI Data over 5 years
  const roiData = [
    { year: 'Year 0', toolApproach: -2000, architectureApproach: -1800 },
    { year: 'Year 1', toolApproach: -1250, architectureApproach: 300 },
    { year: 'Year 2', toolApproach: -350, architectureApproach: 2500 },
    { year: 'Year 3', toolApproach: 550, architectureApproach: 5200 },
    { year: 'Year 4', toolApproach: 1050, architectureApproach: 8900 },
    { year: 'Year 5', toolApproach: 1500, architectureApproach: 15400 }
  ];

  // Productivity improvement data
  const productivityData = [
    { year: 'Year 1', toolApproach: 15, architectureApproach: 35 },
    { year: 'Year 2', toolApproach: 12, architectureApproach: 58 },
    { year: 'Year 3', toolApproach: 8, architectureApproach: 89 },
    { year: 'Year 4', toolApproach: 5, architectureApproach: 125 },
    { year: 'Year 5', toolApproach: 3, architectureApproach: 180 }
  ];

  // Process comparison data
  const processData = [
    { metric: 'Handoffs', toolApproach: 23, architectureApproach: 8 },
    { metric: 'Decision Time (hours)', toolApproach: 48, architectureApproach: 0.25 },
    { metric: 'Data Lag (hours)', toolApproach: 48, architectureApproach: 0.08 },
    { metric: 'Integration Points', toolApproach: 23, architectureApproach: 1 }
  ];

  // Investment breakdown
  const investmentData = [
    { name: 'AI Tools', toolValue: 1600, archValue: 600 },
    { name: 'Integration', toolValue: 200, archValue: 400 },
    { name: 'Training', toolValue: 200, archValue: 300 },
    { name: 'Process Design', toolValue: 0, archValue: 500 }
  ];

  const employeeImpactData = [
    { name: 'Routine Tasks', toolBefore: 60, toolAfter: 55, archBefore: 60, archAfter: 20 },
    { name: 'Strategic Work', toolBefore: 25, toolAfter: 28, archBefore: 25, archAfter: 60 },
    { name: 'Problem Solving', toolBefore: 15, toolAfter: 17, archBefore: 15, archAfter: 20 }
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];

  const renderROIView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">5-Year ROI Comparison ($000s)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={roiData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value, name) => [`$${value}K`, name === 'toolApproach' ? 'Tool Approach' : 'Architecture Approach']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="toolApproach" 
              stroke="#ff7c7c" 
              strokeWidth={3}
              name="Tool Approach"
            />
            <Line 
              type="monotone" 
              dataKey="architectureApproach" 
              stroke="#82ca9d" 
              strokeWidth={3}
              name="Architecture Approach"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center p-4 bg-red-50 rounded">
            <div className="text-2xl font-bold text-red-600">$1.5M</div>
            <div className="text-sm text-red-700">Tool Approach 5-Year Net</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded">
            <div className="text-2xl font-bold text-green-600">$15.4M</div>
            <div className="text-sm text-green-700">Architecture Approach 5-Year Net</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductivityView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Productivity Improvement Over Time (%)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={productivityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value, name) => [`${value}%`, name === 'toolApproach' ? 'Tool Approach' : 'Architecture Approach']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="toolApproach" 
              stroke="#ff7c7c" 
              strokeWidth={3}
              name="Tool Approach"
            />
            <Line 
              type="monotone" 
              dataKey="architectureApproach" 
              stroke="#82ca9d" 
              strokeWidth={3}
              name="Architecture Approach"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <h4 className="font-bold text-yellow-800 mb-2">Key Insight: Compound vs Linear Growth</h4>
          <p className="text-yellow-700 text-sm">
            Tool approach shows diminishing returns (learning curve plateaus). 
            Architecture approach shows accelerating returns (systems learn and improve).
          </p>
        </div>
      </div>
    </div>
  );

  const renderProcessView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Process Efficiency Metrics</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={processData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="metric" type="category" width={150} />
            <Tooltip />
            <Legend />
            <Bar dataKey="toolApproach" fill="#ff7c7c" name="Tool Approach" />
            <Bar dataKey="architectureApproach" fill="#82ca9d" name="Architecture Approach" />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-red-50 p-4 rounded">
            <h4 className="font-bold text-red-800">Tool Approach Issues</h4>
            <ul className="text-sm text-red-700 mt-2 space-y-1">
              <li>• Multiple integration points</li>
              <li>• Slow decision making</li>
              <li>• Data silos and lag</li>
              <li>• Complex maintenance</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-green-800">Architecture Advantages</h4>
            <ul className="text-sm text-green-700 mt-2 space-y-1">
              <li>• Unified data flow</li>
              <li>• Real-time decisions</li>
              <li>• Minimal handoffs</li>
              <li>• Self-improving systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInvestmentView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Investment Allocation Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={investmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}K`} />
            <Legend />
            <Bar dataKey="toolValue" fill="#ff7c7c" name="Tool Approach" />
            <Bar dataKey="archValue" fill="#82ca9d" name="Architecture Approach" />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center p-4 bg-red-50 rounded">
            <div className="text-2xl font-bold text-red-600">$2.0M</div>
            <div className="text-sm text-red-700">Total Tool Approach Investment</div>
            <div className="text-xs text-red-600 mt-1">80% on tools, 0% on process design</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded">
            <div className="text-2xl font-bold text-green-600">$1.8M</div>
            <div className="text-sm text-green-700">Total Architecture Investment</div>
            <div className="text-xs text-green-600 mt-1">33% on tools, 28% on process design</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmployeeView = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center">Employee Time Allocation Changes</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-center">Tool Approach</h4>
            <div className="space-y-2">
              {employeeImpactData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="text-sm font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">{item.toolBefore}%→</span>
                    <span className="text-sm font-bold text-red-600">{item.toolAfter}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 bg-red-100 rounded">
              <div className="text-sm font-bold text-red-800">Employee Feedback:</div>
              <div className="text-xs text-red-700 italic mt-1">
                "Spending more time managing AI tools than doing meaningful work"
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-center">Architecture Approach</h4>
            <div className="space-y-2">
              {employeeImpactData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-sm font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">{item.archBefore}%→</span>
                    <span className="text-sm font-bold text-green-600">{item.archAfter}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 bg-green-100 rounded">
              <div className="text-sm font-bold text-green-800">Employee Feedback:</div>
              <div className="text-xs text-green-700 italic mt-1">
                "AI handles routine work, I focus on complex problem-solving and mentoring"
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">Key Difference: Competition vs Collaboration</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-red-700">Tool Approach:</span>
              <span className="text-red-600"> Humans compete with AI for decision-making authority</span>
            </div>
            <div>
              <span className="font-semibold text-green-700">Architecture Approach:</span>
              <span className="text-green-600"> Humans and AI collaborate with complementary strengths</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const views = {
    roi: { title: 'ROI Analysis', component: renderROIView },
    productivity: { title: 'Productivity Growth', component: renderProductivityView },
    process: { title: 'Process Efficiency', component: renderProcessView },
    investment: { title: 'Investment Allocation', component: renderInvestmentView },
    employee: { title: 'Employee Impact', component: renderEmployeeView }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Transformation: Tool vs Architecture Approach
        </h1>
        <p className="text-lg text-gray-600">
          Comparing two identical companies with different AI implementation strategies
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-6">
        <nav className="flex space-x-1 bg-white p-1 rounded-lg shadow">
          {Object.entries(views).map(([key, view]) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeView === key
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {view.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Current View */}
      <div className="min-h-[500px]">
        {views[activeView].component()}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 mb-2">10x</div>
            <div className="text-sm text-yellow-700">Better ROI with process architecture approach</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">12x</div>
            <div className="text-sm text-purple-700">Higher productivity gains after 5 years</div>
          </div>
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600 mb-2">200x</div>
            <div className="text-sm text-indigo-700">Faster decision-making (hours → minutes)</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-700 text-center italic">
            "The difference isn't the technology. It's whether you design for human-AI competition or collaboration."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITransformationVisualization;