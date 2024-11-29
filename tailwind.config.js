/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}" ,
           "/node_modules/preline/preline.js",],
            
  theme: {
    extend: {

      
    },
  },
  plugins: [
    require ('preline/plugin'),
    animations,
    
  ],
}

