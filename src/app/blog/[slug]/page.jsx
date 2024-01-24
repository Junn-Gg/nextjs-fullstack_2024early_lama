import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/19139388/pexels-photo-19139388.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Hoge Foo</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>24.01.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic
          nostrum illum consequuntur corrupti illo, ut rerum nisi! Officia nobis
          odit quas, vero laborum officiis corrupti libero aperiam inventore
          itaque. Dolorem dicta eum minima dignissimos? Officia minus atque
          deserunt laborum officiis neque eum reprehenderit dolores incidunt
          perferendis voluptatibus cupiditate aspernatur vitae aliquid maxime
          dignissimos id quidem, repellendus consectetur tempore pariatur! Odio
          odit praesentium quia et harum sequi aliquam perspiciatis esse
          veritatis impedit accusantium maiores sint neque laborum voluptatem
          magnam cupiditate fugiat excepturi commodi, iure adipisci reiciendis
          necessitatibus! Voluptatibus, accusamus quidem. Laudantium cupiditate
          laboriosam commodi, aliquam, exercitationem soluta, incidunt ea minima
          labore dicta deleniti enim. Atque quam dolorem molestias modi
          exercitationem sit ab expedita. Asperiores quas tenetur deleniti omnis
          fugiat! Asperiores. Rerum tenetur quia itaque earum ab est repudiandae
          minima, vitae quae illum quis sequi facere nisi eveniet debitis quasi
          sint? Ea voluptas totam eos laboriosam eveniet, fugiat saepe
          voluptates quae.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
