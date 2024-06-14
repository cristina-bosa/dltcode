'use client'
import IconComponent from 'components/IconComponent';
import { useState } from 'react';
import { motion } from "framer-motion"

const ServiceItem = ({ title, icon, content }) => {
  
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive)
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={isActive === true ? "services__item services__item--active" : "services__item"} onClick={handleToggle}>
      <h3>{title}</h3>
      <p>{content}</p>
      <IconComponent iconName={icon} color="black" />
    </motion.div>
  );
}
export default ServiceItem;