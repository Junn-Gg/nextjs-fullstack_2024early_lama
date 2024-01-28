import Image from 'next/image';
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact',
  description: 'Next.js 14 Contact description',
};

const ContactPage = () => {
  return <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src='/contact.png' alt='' fill className={styles.image} />
    </div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone' />
        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
        <button>Send</button>
      </form>
    </div>
  </div>;
};

export default ContactPage;
