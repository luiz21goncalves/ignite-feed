import { useQuery } from 'react-query';

import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';
import { getAllPosts } from '../../services/api/post';
import styles from './styles.module.css';

export function Home() {
  const { data: posts } = useQuery('posts', getAllPosts);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts?.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
