import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, BarChart3, Lightbulb, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'FAST Assessment', path: '/flowchart', icon: BarChart3 },
    { name: 'Framework Guide', path: '/guide', icon: Lightbulb },
    { name: 'AI Tools', path: '/tools', icon: Wrench },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-fast-blue sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-fast-blue to-blue-500 p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-fast-dark">NexusAutomation</span>
              <div className="text-xs text-fast-blue font-medium">AI Agency Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-fast-blue text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-fast-blue'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.upwork.com/freelancers/~018a23423d96a2ea09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-fast-blue to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActivePath(item.path)
                        ? 'bg-fast-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <a
                href="https://www.upwork.com/freelancers/~018a23423d96a2ea09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-fast-blue to-blue-500 text-white px-3 py-3 rounded-lg font-medium text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;