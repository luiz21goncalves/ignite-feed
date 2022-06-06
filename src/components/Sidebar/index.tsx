import { PencilSimpleLine } from 'phosphor-react'
import { CURRENT_PROFILE } from '../../constants'
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
          src={CURRENT_PROFILE.avatarUrl}
          alt={`Avatar de ${CURRENT_PROFILE.name}`}
        />
        <strong>{CURRENT_PROFILE.name}</strong>
        <span>{CURRENT_PROFILE.role}</span>
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