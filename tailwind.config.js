module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            'mobile': '375px',
            'tablet': '768px',
            'desktop': '1024px',
        },
        extend: {
            backgroundImage: {
                'arch': 'url("https://placeimg.com/1000/800/arch")',
            }
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar-hide')
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
        defaultTheme: "dark",
    },
};
