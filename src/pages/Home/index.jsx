import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import styles from './styles.module.css'

export function Home() {
  return (
    <div>
     <Header />

     <div className={styles.wrapper}>
       <Sidebar />

        <main>
          <div>Post 1</div>
          <div>Post 2</div>
        </main>
     </div>
    </div>
  )
}