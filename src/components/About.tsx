import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface Service {
  title: string;
  icon: string;
}

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </Tilt>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <SectionWrapper Component={About} idName="about">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          blablabla descriere
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

export default About;