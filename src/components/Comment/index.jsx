import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'
import { formatLongDate, formatRelativeDate } from '../../utils/date'

import styles from './styles.module.css'

export function Comment(props) {
  const { content, author, createdAt } = props

  const createdDateFormatted = formatLongDate(createdAt)
  const createdDateRelativeToNow = formatRelativeDate(createdAt)

  return (
    <div className={styles.comment}>
      <Avatar 
        src={author.avatarUrl}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={createdDateFormatted} dateTime={createdAt.toISOString()}>
                {createdDateRelativeToNow}
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