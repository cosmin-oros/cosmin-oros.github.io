import {
  mobile,
  backend,
  creator,
  web,
  typescriptImage,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  continental,
  espresoh,
  gdsc,
  nokia,
  carrent,
  jobit,
  tripguide,
  springboot,
  java,
  kotlin,
  github,
  dart,
  flutter,
  python,
  go,
  gin,
  c,
  cpp,
  sentry,
  axios,
  postman,
  mysql,
  jira,
  firebase,
} from '../assets'

interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
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

interface Service {
  title: string;
  icon: string; // You can replace "string" with a more specific type for the icon
}

const services: Service[] = [
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

interface Technology {
  name: string;
  icon: string; // You can replace "string" with a more specific type for the icon
}

const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: typescriptImage,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "sentry",
    icon: sentry,
  },
  {
    name: "axios",
    icon: axios,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "go",
    icon: go,
  },
  {
    name: "gin",
    icon: gin,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

interface Experience {
  title: string;
  company_name: string;
  icon: string; // You can replace "string" with a more specific type for the icon
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Mobile Software Development Intern",
    company_name: "[e-spres-oh]",
    icon: espresoh,
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "During my continued tenure at [e-spres-oh], I delved deeper into mastering React Native and TypeScript.",
      "Started using technologies such as Redux for state management, Axios for making asynchronous API requests, and Sentry for error tracking and monitoring.",
      "Worked in an agile environment developing the Enfineo app.",
    ],
  },
  {
    title: "Mobile Development Summer Practice",
    company_name: "Nokia",
    icon: nokia,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Developed a gamified android app using Kotlin and Jetpack Compose.",
      "The app would showcase the differences between 4G and 5G internet speeds with a simple car racing game.",
    ],
  },
  {
    title: "React Native Liga AC LABS",
    company_name: "[e-spres-oh]",
    icon: espresoh,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jun 2023",
    points: [
      "During my time at [e-spres-oh]'s lab, I began my exploration of React Native.",
      "Our practical application of this learning resulted in FitPanda—an app aimed at easily tracking daily calorie consumption.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "GDSC UPT",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Nov 2022 - Jun 2023",
    points: [
      "During my time at GDSC UPT, I focused on Flutter app development.",
      "Creating multiple mobile applications that showcased my skills in building user-friendly and functional interfaces.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Continental",
    icon: continental,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - May 2023",
    points: [
      "At Continental, I engaged in C embedded programming, software testing, and Python automation.",
      "I contributed to embedded systems, conducted software testing, and used Python to automate processes, improving efficiency throughout."
    ],
  },
];

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string; // You can replace "string" with a more specific type for the image URL
  source_code_link: string;
}

const projects: Project[] = [
  {
    name: "Fit-Panda-Mobile",
    description:
      "Mobile app that helps you track your nutrition and stay on track with your goals.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "MobX",
        color: "green-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/cosmin-oros/fit-panda-mobile",
  },
  {
    name: "Bookify",
    description:
      "Mobile app that gives you book recommendations based on your preferences.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "books rest api",
        color: "green-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/cosmin-oros/Bookify",
  },
  {
    name: "Vacation Spot Finder",
    description:
      "Mobile app that helps you find the perfect travel destination and provides you with safety guidelines.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/cosmin-oros/Vacation-Spot-Finder-App",
  },
  {
    name: "ProShaped-App",
    description:
      "Mobile app that tracks your fitness activity and gives you nutrition advice.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/cosmin-oros/ProShaped-app",
  },
];

export { services, technologies, experiences, testimonials, projects };