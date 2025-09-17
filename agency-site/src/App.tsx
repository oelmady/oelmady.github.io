import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlowchartPage from './pages/FlowchartPage';
import GuidePage from './pages/GuidePage';
import ToolsPage from './pages/ToolsPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/flowchart" element={<FlowchartPage />} />
                        <Route path="/guide" element={<GuidePage />} />
                        <Route path="/tools" element={<ToolsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;