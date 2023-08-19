import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion"; 

interface Service {
  title: string;
  icon: string;
}

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <div className="flex justify-center"> 
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
          <motion.div 
            variants={staggerContainer()} 
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <motion.img 
              src={icon} alt='web-development' className='w-16 h-16 object-contain'
            />
            <motion.h3 
              variants={textVariant()} 
              className='text-white text-[20px] font-bold text-center'
            >
              {title}
            </motion.h3>
          </motion.div>
        </Tilt>
      </motion.div>
    </Tilt>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10"> 
      <motion.div variants={textVariant()} className="mb-4">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, I'm a software engineer proficient in React Native with TypeScript. I've also developed apps using Kotlin Android and Flutter, 
        dabbled in Java Spring and Gin for back-end work. 
        With a knack for crafting intuitive UI/UX experiences, I bring a holistic approach to application development. 
        Let's collaborate and create exceptional software solutions.
      </motion.p>

      <div className='mt-4 flex flex-wrap justify-center gap-10'> 
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
