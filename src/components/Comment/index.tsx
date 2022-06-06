import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'
import { formatLongDate, formatRelativeDate } from '../../utils/date'

import styles from './styles.module.css'
import { useState } from 'react'

type Comment = {
  id: string;
  content: string;
  createdAt: Date;
}

type Author = {
  name: string;
  role: string;
  avatarUrl: string;
}

type CommentProps = {
  comment: Comment;
  author: Author;
  onDeleteComment: (id: string) => void;
}

export function Comment(props: CommentProps) {
  const { comment, author, onDeleteComment } = props

  const [likeComment, setLikeComment] = useState(0);

  const createdDateFormatted = formatLongDate(comment.createdAt)
  const createdDateRelativeToNow = formatRelativeDate(comment.createdAt)
  
  function handleLikeComment() {
    setLikeComment(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src={author.avatarUrl}
        alt={`Avatar de ${author.name}`}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={createdDateFormatted} dateTime={comment.createdAt.toISOString()}>
                {createdDateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} onClick={() => onDeleteComment(comment.id)} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> Aplaudir
            <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}