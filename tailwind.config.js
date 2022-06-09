module.exports = {
  content: [
    "./src/components/Home/index.js",
    "./src/components/Nav/index.js",
    "./src/components/About/index.js",
    "./src/components/Message/index.js",
    "./src/components/Contact/index.js",
    "./src/components/Project/index.js",
    "./src/App.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#253031",
      secondary: "#315659",
      tertiary: '#2978a0',
      light: '#fffff',
      dark: '#000000',
      darker: '#111111',
      error: '#f34832'
    }
  },
  plugins: [],
}
