import { Header } from '../../components/Header'

import styles from './styles.module.css'

export function Home() {
  return (
    <div>
     <Header />

     <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>

        <main>
          <div>Post 1</div>
          <div>Post 2</div>
        </main>
     </div>
    </div>
  )
}