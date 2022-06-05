import { useState } from 'react'
import shortid from 'shortid'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { CURRENT_PROFILE } from '../../constants'
import { formatLongDate, formatRelativeDate } from '../../utils/date'

import styles from './styles.module.css'

export function Post(props) {
  const { author, content, publishedAt } = props

  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = formatLongDate(publishedAt)
  const publishedDateRelativeToNow = formatRelativeDate(publishedAt)

  function handleCreateNewComment(event) {
    event.preventDefault()

    if (newCommentText.length === 0) {
      return
    }

    setComments(prevState => ([
      ...prevState,
      {
        id: shortid.generate(),
        content: newCommentText,
        createdAt: new Date(),
      }
    ]))
    setNewCommentText('')
  }

  function handleChangeNewCommentText(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(id) {
    setComments(prevState => prevState.filter(comment => comment.id !== id))
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            author={CURRENT_PROFILE}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}