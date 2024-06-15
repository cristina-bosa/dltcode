'use client'
import IconComponent from 'components/IconComponent';
import { useState } from 'react';
import { motion } from "framer-motion"

const ServiceItem = ({ title, iconDown, iconUp, content }) => {

  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive)
  }
  return (
    <motion.article
      layout
      className={isActive === true ? "services__item services__item--active" : "services__item"}
      transition={{ duration: 0.5 }}
      initial={false}
      onClick={handleToggle}>
      <motion.section layout='position' className="services__item__header">
        <motion.h3 layout='position' >{title}</motion.h3>
        {!isActive && (<IconComponent iconName={iconDown} color="black" />)}

      </motion.section>
      <motion.section
        transition={{ duration: 0.5 }}
        className="services__item__body">
        {isActive && (
          <>
            <motion.p layout='position'>{content}</motion.p>
            <IconComponent iconName={iconUp} color="black" />
          </>
        )}
      </motion.section>
    </motion.article>
  );
}
export default ServiceItem;