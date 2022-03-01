import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={`${styles.aboutSection}`}>
      <p className={`${styles.about}`}> About </p>
      <p className={`${styles.aboutText}`}> Star girl </p>
    </div>
  );
};

export default About;
