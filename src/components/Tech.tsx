import React from 'react';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { BallCanvas } from '.';

const staggerContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const technologyVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Tech = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      animate='show'
      className="p-4 mt-16 max-w-7xl mx-auto relative z-0 flex flex-row flex-wrap justify-center gap-10"
    >
      <span className='hash-span' id='tech'>
        &nbsp;
      </span>

      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className='w-28 h-28'
          variants={technologyVariant}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Tech;
