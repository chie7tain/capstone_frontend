import React from 'react';
import styles from './About.module.scss';


interface AboutI{
  about: string;
  aboutInfo: string
}

const About: React.FC<AboutI> = ({about, aboutInfo}) => {
  return (
    <div className={`${styles.aboutSection}`}>
      <p className={`${styles.about}`}>{about}</p>
      <p className={`${styles.aboutText}`}>{aboutInfo}</p>
    </div>
  );
};

export default About;
