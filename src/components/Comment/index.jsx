import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

export function Comment(props) {
  const { content } = props

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/luiz21goncalves.png" 
        alt="Avatar de Luiz Gonçalves"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Gonçalves</strong>
              <time title="4 de junho de 2022 às 09:55h" dateTime='2022-06-04 09:55:00'>
                Cerca de 2h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}