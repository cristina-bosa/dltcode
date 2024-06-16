'use client'
import IconComponent from 'components/IconComponent';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const BannerItem = ({ id, title, iconDown, iconUp, description }) => {

  const [isActive, setIsActive] = useState(null);
  const handleToggle = () => {
    setIsActive(isActive === id ? null : id);
  }


  return (
    <section className="relative">
      <motion.section
        className="banner__item"
        layoutId={id} onClick={handleToggle}>
        <motion.h5>{title}</motion.h5>
        <IconComponent iconName={iconUp} color="black" />
      </motion.section>

      <AnimatePresence>
        {isActive && (

          <motion.section
            layoutId={id}
            className="banner__item--active"
  
            onClick={handleToggle}>
            <motion.h5>{title}</motion.h5>
            <motion.h2>{description}</motion.h2>
            <motion.span className="banner__item--active__icon">
              <IconComponent iconName={iconDown} color="black" />
            </motion.span>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BannerItem;