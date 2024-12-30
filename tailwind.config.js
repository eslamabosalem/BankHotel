/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
      primary: '#313F38',
      secondary: '#FCD043',
      text: '#1B3B36',
      textWhite: '#FFFCF6',
      error: '#B03E3E',
      attention: '#455955',
      success: '#6A7A77',
      link: '#909B9A',
      linkHover: '#909B9A',
     
    }},
    
    fontFamily: {
      miracle: ['"Miracle"', 'sans-serif'],
      poppins: ['Poppins'],
    },
  },
  plugins: [],
}

