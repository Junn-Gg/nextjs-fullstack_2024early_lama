import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19139388/pexels-photo-19139388.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className={styles.image} />
        </div>
        <span>2024.01.23</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio ea vel omnis nesciunt quis odit provident quasi corrupti voluptate.</p>
        <Link href='/blog/post'  className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
