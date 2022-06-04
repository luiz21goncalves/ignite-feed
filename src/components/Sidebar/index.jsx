import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="Cover image" 
      />

      <div className={styles.profile}>
        <Avatar 
          src="https://github.com/luiz21goncalves.png" 
          alt="Avatar de Luiz Gonçalves"
        />
        <strong>Luiz Gonçalves</strong>
        <span>Desenvolvedor Web</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}