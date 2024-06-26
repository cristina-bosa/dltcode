'use client'
import IconComponent from 'components/IconComponent';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const ServiceItem = ({ id, title, iconDown, iconUp, description }) => {


  const [isActive, setIsActive] = useState(null);
  const handleToggle = () => {
    setIsActive(id);
  }
  return (
    <section className="relative">
      <motion.section
        className="services__item"
        layoutId={id} onClick={handleToggle}>
        <motion.h5>{title}</motion.h5>

        <IconComponent iconName={iconUp} color="black" />

      </motion.section>

      <AnimatePresence>
        {isActive && (
          <motion.section
            layoutId={id}
            className="services__item--active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsActive(0)}>
            <motion.h5>{title}</motion.h5>
            <motion.p>{description}</motion.p>
            <motion.span className="services__item--active__icon">
              <IconComponent iconName={iconDown} color="black" />
            </motion.span>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
export default ServiceItem;