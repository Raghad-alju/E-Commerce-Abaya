/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/lib/esm/**/*.js', /* src folder, for example */],
  theme: {
    fontFamily:{
      primary :['DM Serif Display'],
      secondry: ['DM Serif Display Noto Serif']
    },


    colors: {
      'blue-sky': '#5d667a',
      'white-gray': '#DEDAD7',
      'white-yellow': '#dccea6',
      'pastel-yellow':'#f4e89c'
    },
    extend: {keyframes: {
      beat: {
        '0%' :{transform:'scale(1)'},
         '25%': {transform: 'scale(1.04)'},
         '50%':{transform: 'scale(1)'},

      },
      transform: {
        '0%':{transform: 'translate(0)'},
        '100%':{transform: 'translate(64px)'},
     
        //'43.5%':{transform: 'translateX(2px) rotateY(3deg)'},
        //'50%':{transform: 'translateX(0)'},


      },
      scale: {
        '0%':{transform: 'scale(1)'},
        '50%':{transform: 'scale(1.25)'},
        
     
        //'43.5%':{transform: 'translateX(2px) rotateY(3deg)'},
        //'50%':{transform: 'translateX(0)'},


      },
      headShake: {
        '0%':{transform: 'translate(0)'},
        '6.5%':{transform: 'translate(-6px) rotateY(-9deg)'},
        '18.5%':{transform: 'translate(5px) rotateY(7deg)'},
        '31.5%':{transform: 'translate(0px) rotateY(-5deg)'},
        //'43.5%':{transform: 'translateX(2px) rotateY(3deg)'},
        //'50%':{transform: 'translateX(0)'},


      }
    },
    animation: {
      beat: 'beat 0.2s ',
      headShake: 'headShake 2s ease-out',
      transform: 'transform 1s',
      scale: 'scale 0.5s'
    },
  },
},
  plugins: [require('flowbite/plugin')],
};