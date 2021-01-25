import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alexia Allaway | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am ',
  name: 'Alexia Allaway',
  subtitle: 'I am a Software Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello! I'm Alexia, a software engineer based in Atlanta, Ga.",
  paragraphTwo:
    'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide performant experiences.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Astrola',
    info:
      'Astrola is a web application where you can view Picture of The Day from Nasa Api dating back to 1995.',
    info2: 'Built with React, Redux, CSS',
    url: 'https://rocky-river-07511.herokuapp.com/',
    repo: 'https://github.com/allawa1/Astrola_', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memeOrator.png',
    title: 'Meme-Orator',
    info:
      'Meme-Orator is a web application where you can search gifs and edit one by adding text. ',
    info2: 'Built with HTML, CSS, Javascript',
    url: '',
    repo: 'https://github.com/allawa1/Meme-Orator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pinster.png',
    title: 'Pinster',
    info: 'Post DIY Projects',
    info2: 'Built with HTML,CSS, EJS, Javascript, Bootstrap, Node, Postgresql, Express, Passport',
    url: '',
    repo: 'https://github.com/allawa1/Pinster', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'alexiaallaway@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alexia-allaway/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/allawa1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
