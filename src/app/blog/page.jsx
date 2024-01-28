import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {next: {revalidate: 3000}});

  if (!res.ok) {
    throw new Error('API routes not available');
  }

  return res.json();
};

export const metadata = {
  title: 'Blog',
  description: 'Next.js 14 Blog description',
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      {/* <PostCard />
      <PostCard />
      <PostCard />
      <PostCard /> */}
    </div>
  );
};

export default BlogPage;
