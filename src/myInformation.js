// Main Data
export const mainData = {
    title: 'Hi, my name is',
    name: 'Jamie Wang',
    subtitle:'front end developer',
    cta: 'Know More',
};

// About
export const aboutData = {
    img: './images/portfolio_pic.jpg',
    paragraphOne:
    "I'm the Front-End Developer from China live in Melbroune.",
  paragraphTwo:
    'I have serious passion for front end development, UI effects, animations and creating intuitive, dynamic user experiences.',
  paragraphThree:
    "Let's create something incredible!",
  resume: 'https://drive.google.com/file/d/1y1ESNrxklNJxIcoS86D5fRoIyEHAs_is/view?usp=sharing', // if no resume, the button will not show up
};

// Projects
export const projectsData = [
  {
    title:'Burger Builder',
    info: 'A powerful, fast, user-friendly and reactive web app build by React&Redux',
    info2: 'I used React, Redux, and Next.js in order to create this web application',
    url: 'https://serene-bhaskara-e066b0.netlify.com',
    repo: 'https://github.com/Jamie220/react-burger-builder',
    img: './images/burgerBuilder.png',
  },
  {
    title:'Face Recognition App',
    info: "A full-stack web application using the MERN stack, this app allows you to identify the detection of faces in any image supplied. This was achieved thanks to Clarifai's artificial intelligence API.",
    info2: 'I used React, Node, Express.js and MongoDB in order to create this web application.',
    url: 'https://zen-bardeen-4a49a0.netlify.com/',
    repo: 'https://github.com/Jamie220/React-smartBrain',
    img:'./images/smartBrain.png',
  },
  {
    title: 'Ivy Real Estate website',
    info: 'A commercial website build for Ivy Real Estate company by using WordPress, PHP, JavaScript, CSS. This web allows you search accommodation whether rent or buy',
    info2: 'This is my first freelance project when I first year working in GBCA',
    url: 'http://ivyrealestate.com.au/',
    repo:'',//if no repo, the button will not show up
    img:'./images/IvyRealEstate.png',
  },
  {
    title:'GBCA web',
    info: 'A commercial web build for Global Business College of Australia by using WordPress, PHP, JavaScript, CSS',
    info2: 'This project I am working with when I work at GBCA.',
    url: 'https://gbca.edu.au',
    repo:'',
    img:'./images/GBCA.png',
  },
  {
    title: 'GBCA Moddle',
    info: 'A online learning management system platform bulid for Global Business College of Australia', 
    info2: 'I build up this app start from zero, which establish at own server',
    url: 'http://ecs.gbca.edu.au',
    repo: '',
    img: './images/GBCAmoodle.png',
  },
];

// contact data
export const contactData = {
  subtitle:'Have a question or want to work together?',
  btn: "Contact Me",
  email: 'jamiewang220@gmail.com',
};

//footer data
export const footerData = {
  socialMedias: [
    {
      name: 'twitter',
      url: 'https://twitter.com/3602239',
    },
    {
      name:'codepen',
      url: 'https://codepen.io/JamieWang',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamiewang220/',
    },
    {
      name: 'github',
      url:'https://github.com/Jamie220',
    }
  ],
}; 