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

      className={isActive === true ? "services__item services__item--active" : "services__item"} onClick={handleToggle}>
      <motion.section layout='position' className="services__item__header">
        <motion.h3 layout='position' >{title}</motion.h3>
        {!isActive && (<IconComponent iconName={iconDown} color="black" />)}

      </motion.section>

      {isActive && (
        <motion.section className="services__item__body">
          <motion.p layout='position'>{content}</motion.p>
          <IconComponent iconName={iconUp} color="black" />
        </motion.section>

      )}
    </motion.article>
  );
}
export default ServiceItem;