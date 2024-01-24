import Link from 'next/link';
import styles from './footer.module.css'

const Footer = () => {
  return <div className={styles.container}>
      <Link href='/' className={styles.logo}>Logo</Link>
  <p className={styles.text}>Next.js 14 &copy; All rights reserved</p>
  </div>;
};

export default Footer;
