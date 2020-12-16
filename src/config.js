module.exports = {
  siteTitle: 'Shreeyash Pawar | Data Scientist,IoT,AI on Edge',
  siteDescription:
    'Portfolio for Shreeyash Pawar, Data Scientist, Engineer, Developer',
  siteKeywords:
    'Shreeyash,Pawar,Developer,Data Scientist,Python',
  siteUrl: 'https://shreeyash.netlify.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-180VVQY24J',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shreeyash Pawar',
  location: 'Bangalore',
  email: 'shreeyash.s.pawar@gmail.com',
  github: 'https://github.com/shree970/',
  // twitterHandle: '@qpdx',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shree970/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shreeyash-pawar-6a8845178/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/alleyhector',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/qpdx',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#jobs',
    },
    {
      name: 'Featured Projects',
      url: '/#projects',
    },
    
    // {
    //   name: 'Writing Samples',
    //   url: '/#writing',
    // }
    // ,
    
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#7AA34B',
    navy: '#223246',
    darkNavy: '#273A52',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
