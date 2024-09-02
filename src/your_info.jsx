//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'src/assets/images/bg1.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Lucas',
  lastname: 'Adams',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://drive.google.com/file/d/1Fm4AQqLNwvOK3g8t18dSXtSZmz5f4vmE/view?usp=sharing',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Frontend (ReactJS, React Native, VueJS ...)',
  'Backend (NodeJS, Express ...)',
  'Other Skills (AWS, RestAPI, CI/CD ...)' 
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://linkedin.com/in/lucas-adams-9548b4134',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/devacarus',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  {
    name: 'ORCiD',
    icon: 'lni lni-rocket',
    url: 'https://orcid.org/0009-0005-4131-5724',
  },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'frontend',
    icon: 'lni lni-widget-5',
    title: 'Frontend',
    description:
      "As a Frontend Developer, I create dynamic and user-friendly interfaces using HTML, CSS, and JavaScript, ensuring responsive and engaging web experiences. My expertise in modern frameworks and performance optimization drives the development of visually appealing and highly functional web applications.",
    skills: [
      {
        icon: 'lni lni-javascript',
        title: 'JavaScript (ES6+)',
      },
      {
        icon: 'lni lni-typescript',
        title: 'TypeScript',
      },
      {
        icon: 'lni lni-html5',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-css3',
        title: 'CSS3',
      },
    ],
  },
  {
    name: 'backend',
    icon: 'lni lni-server',
    title: 'Backend',
    description:
    "As a Backend Developer, I build and maintain robust server-side applications, creating efficient APIs and managing databases to ensure seamless functionality and performance. My expertise includes implementing business logic, optimizing data storage, and integrating services to deliver reliable, scalable solutions.",
    skills: [
      {
        icon: 'lni lni-nodejs',
        title: 'NodeJS',
      },
      {
        icon: 'lni lni-python',
        title: 'Python',
      },
      {
        icon: 'lni lni-php',
        title: 'PHP'
      },
     
      
    ],
  },
  {
    name: 'databases',
    icon: 'lni lni-database',
    title: 'Databases',
    description:
    "As a Database Developer, I design and optimize scalable database systems, ensuring data integrity and performance across relational and NoSQL databases. My expertise includes crafting efficient queries, managing data migrations, and implementing robust data security measures to support dynamic, data-driven applications.",
    skills: [
      {
        icon: 'lni lni-mysql',
        title: 'MySQL',
      },
      {
        icon: 'lni lni-postgresql',
        title: 'PostgreSQL',
      },
      {
        icon: 'lni lni-mongodb',
        title: 'MongoDB',
      },
      
    ],
  },
  {
    name: 'versionctrlandcollaboration',
    icon: 'lni lni-cogs',
    title: 'Version Control and Collaboration',
    description:
    "As a developer skilled in version control and collaboration, I manage code changes efficiently using Git and platforms like GitHub, ensuring seamless integration and high-quality software delivery. My focus on clear communication and agile practices fosters effective teamwork and streamlined development workflows.",
    skills: [
      {
        icon: 'lni lni-git',
        title: 'Git',
      },
      {
        icon: 'lni lni-github',
        title: 'GitHub',
      },
      {
        icon: 'lni lni-bitbucket',
        title: 'Bitbucket',
      },
      {
        icon: 'lni lni-trello',
        title: 'Trello',
      },
      
    ],
  },
  {
    name: 'devopsandcloud',
    icon: 'lni lni-cloud-network',
    title: 'DevOps and Cloud',
    description:
    "As a DevOps and Cloud Developer, I excel in automating deployment processes and managing scalable cloud infrastructure using platforms like AWS, Azure, or Google Cloud. I leverage CI/CD pipelines, infrastructure as code, and monitoring tools to enhance system reliability, streamline workflows, and drive efficient software delivery.",
    skills: [
      {
        icon: 'lni lni-docker',
        title: 'Docker',
      },
      {
        icon: 'lni lni-aws',
        title: 'AWS',
      },
    ],
  },
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'completed in time', value: 100, unit: '%' },
  { word: 'finished projects', value: 78, unit: '' },
  { word: 'experience', value: 8, unit: ' years' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Restaurant Landing Page',
    description: 'This is a Next.js project using React.js for building user interfaces and SCSS Modules for styling it.',
    demoUrl: 'src/assets/images/restaurant-landing.gif' ,
    githubUrl: 'https://github.com/devacarus/react-restaurant-landing-page'
  },
  {
    title: 'React Native Restaurant App',
    description: 'Main objective of this project was to have a single code base for both web and mobile apps with the logic and view separated.',
    demoUrl: 'src/assets/images/react-native-restaurant.png',
    githubUrl: 'https://github.com/devacarus/React-Native-Restaurant-App'
  },
  {
    title: 'React Webpack Project',
    description: 'A prebuilt project for creating desktop apps using Electron, React, Webpack & Typescript with hot-reload, easy to use custom import aliases & executable builds for distribution.',
    demoUrl: 'src/assets/images/electron-webpack-typescript.gif',
    githubUrl: 'https://github.com/devacarus/electron-react-webpack-typescript'
  },
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Lucas Adams. Highly experienced Full-Stack Web and Mobile App Developer with over 8+ years of expertise in designing and implementing dynamic, user-centric applications and solutions. Proven track record of leading successful projects from concept through to delivery, consistently exceeding expectations. Seeking Full Stack position where I can leverage my technical skills, leadership experience, and passion for innovation to contribute to the success of a forward-thinking company.`,
  power_slogan: `Full stack developer`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_2zxycnq',
  templateID: 'template_d0m514u',
  publicKey: 'U9HhuasbxuDKdyHZg',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
