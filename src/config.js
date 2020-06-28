module.exports = {
  siteTitle: 'Michelle Ginsburg | Cloud Engineer',
  siteDescription:
    'Michelle Ginsburg is a cloud engineer based in London, UK specializing in building (and occasionally designing) exceptional applications and utilising the latest cloud-native technologies.',
  siteKeywords:
    'Michelle Ginsburg, Michelle, Ginsburg, michelleanngins, software engineer, front-end engineer, web developer, javascript, cloud engineer',
  siteUrl: '',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Michelle Ginsburg',
  location: 'London, UK',
  email: 'michelleanngins@gmail.com',
  github: 'https://github.com/michelleginsburg',
  twitterHandle: '@brynist',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/michelleginsburg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/michelleaginsburg',
    },
    /*{
      name: 'Codepen',
      url: 'https://codepen.io/bchiang7',
    },*/
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aroundtheglobetreks',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/brynist',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
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
