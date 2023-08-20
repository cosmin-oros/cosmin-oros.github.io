import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescriptImage,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  continental,
  espresoh,
  gdsc,
  nokia,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "TypeScript",
    icon: typescriptImage,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };