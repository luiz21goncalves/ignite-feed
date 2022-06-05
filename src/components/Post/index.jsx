import { useState } from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import shortid from 'shortid'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './styles.module.css'

export function Post(props) {
  const { author, content, publishedAt } = props

  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments(prevState => ([
      ...prevState,
      {
        id: shortid.generate(),
        content: newCommentText
      }
    ]))
    setNewCommentText('')
  }

  function handleChangeNewCommentText(event) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p key={shortid.generate()}>{line.content}</p>
            )
          }

          if (line.type === 'link') {
            return (
              <p key={shortid.generate()}>
                <a href={line.content}>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
          name="comment"
          value={newCommentText}
          onChange={handleChangeNewCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <Comment key={comment.id} content={comment.content} />
        ))}
      </div>
    </article>
  )
}