import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import React, { ComponentType, ReactNode } from "react";

interface SectionWrapperProps {
  idName: string;
  Component: ComponentType;
  children?: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ Component, idName, children }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component />
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
