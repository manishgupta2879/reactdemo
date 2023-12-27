/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["*", "./node_modules/flowbite/**/*.js"],
  content: [
    "*.{{html,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}", 
    "./node_modules/flowbite/**/*.js",
    ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'tab': '1024',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      screens: {
        'xs':{'min':'320px','max':'1023px'},
        'xm':{'min':'500px','max':'1920px'},

        'md':{'min':'767px','max':'1920px'},
        'lg': {'min':'950px','max':'1920px'},
      },
     fontFamily:{
      lato:['Lato'],
      Indie:['Indie Flower']
     }
    },
  },
  plugins: [],
}

