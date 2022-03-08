import React from 'react';
import styles from './About.module.scss';


interface AboutI{
  about: string;
  aboutInfo: string
}

const About: React.FC<AboutI> = ({about}) => {
  return (
    <div className={`${styles.aboutSection}`}>
      <p className={`${styles.about}`}>About</p>
      <p className={`${styles.aboutText}`}>{about}</p>
    </div>
  );
};

export default About;
