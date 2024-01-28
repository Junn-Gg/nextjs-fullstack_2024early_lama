import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

export const generateMetadata = async ({ params }) => {
  const post = await getData(params.slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error('Cound not fetch data from client');
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const post = await getData(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={post.img ? post.img : '/noimage.png'}
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
