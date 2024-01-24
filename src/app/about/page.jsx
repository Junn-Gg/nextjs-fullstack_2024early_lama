import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
          iusto!
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et
          maxime laborum odio odit vero? Adipisci quasi laboriosam magnam hic!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/about.png' alt='' fill className={styles.aboutImage} />
      </div>
    </div>
  );
};

export default AboutPage;
