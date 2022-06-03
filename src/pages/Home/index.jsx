import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Sidebar } from '../../components/Sidebar'

import styles from './styles.module.css'

export function Home() {
  return (
    <div>
     <Header />

     <div className={styles.wrapper}>
       <Sidebar />

        <main>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </main>
     </div>
    </div>
  )
}