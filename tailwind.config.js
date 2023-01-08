/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#CB1C8D",
        
"secondary": "#F56EB3",
        
"accent": "#7F167F",
        
"neutral": "#382338",
        
"base-100": "#ffffff",
        
"info": "#460C68",
        
"success": "#168345",
        
"warning": "#CF910C",
        
"error": "#E78474",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
