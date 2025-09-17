/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'fast-blue': '#4ecdc4',
                'fast-dark': '#16213e',
                'fast-light': '#45b7d1',
                'fast-accent': '#ff6b6b',
                'business-profit': '#10b981',
                'business-growth': '#3b82f6',
                'business-value': '#8b5cf6'
            },
            fontFamily: {
                'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            animation: {
                'flow': 'flow 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                flow: {
                    '0%, 100%': { transform: 'translateX(0px)' },
                    '50%': { transform: 'translateX(10px)' },
                }
            }
        },
    },
    plugins: [],
}