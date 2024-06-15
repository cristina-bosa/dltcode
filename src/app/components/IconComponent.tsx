import React from 'react';
import * as Icons from 'react-icons/lu';

const IconComponent = ({ iconName, size = '24px', color = 'black', ...props }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null; 
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default IconComponent;
