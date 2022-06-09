import { useQuery } from 'react-query';

import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { LoadingPost } from '../../components/Shimmer/LoadingPost';
import { Sidebar } from '../../components/Sidebar';
import { getAllPosts } from '../../services/api/post';
import styles from './styles.module.css';

export function Home() {
  const { data: posts, isLoading } = useQuery('posts', getAllPosts);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {isLoading ? (
            <>
              <LoadingPost />
              <LoadingPost />
            </>
          ) : (
            posts?.map((post) => <Post key={post.id} post={post} />)
          )}
        </main>
      </div>
    </div>
  );
}
