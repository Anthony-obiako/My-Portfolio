import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  veeTech,
  tonyJp,
  viclyd,
  dashboard,
  youtube,
  tenzies,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "javascript Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tony JP Stores",
    icon: tonyJp,
    iconBg: "#383E56",
    date: "March 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Viclyd int Ltd",
    icon: viclyd,
    iconBg: "#383E56",
    date: "January 2023 - August 2023",
    points: [
      "Built state of the Art User interfaces and Modern Web Applications.",
      "Provided Functional desktop, mobile and web applications with React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Vee Tech",
    icon: veeTech,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Obiako was a very delightful experience as he exceeded my expectations on every project.",
    name: "Jude Sunday",
    designation: "CEO",
    company: "Tony Jp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He is my first encounter with a web developer who truly cares about their client's success like Obiako does.",
    name: "John",
    designation: "CTO",
    company: "Viclyd",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description:
      "React admin dashboard that can be used to edit and monitor the data of your site or web app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Anthony-obiako/admin-dashboard",
  },
  {
    name: "Youtube clone",
    description: "A youtube web clone with react.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Anthony-obiako/youtube-clone",
  },
  {
    name: "Tenzies Game",
    description:
      "Web game of Tenzies with basic react and javascript functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tenzies,
    source_code_link: "https://github.com/Anthony-obiako/Tenzies-game",
  },
];

export { services, technologies, experiences, testimonials, projects };
