import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import shortid from 'shortid';
import { useMutation, useQuery } from 'react-query';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { formatLongDate, formatRelativeDate } from '../../utils/date';
import { Post as PostTypes } from '../../types';
import { queryClient } from '../../services/queryClient';
import styles from './styles.module.css';
import { getAllCommentsByPost, postComment } from '../../services/api/comment';

type Comment = {
  id: string;
  content: string;
  createdAt: Date;
};

type PostProps = {
  post: PostTypes;
};

export function Post(props: PostProps) {
  const { post } = props;

  const [newCommentText, setNewCommentText] = useState('');

  const { mutate } = useMutation(postComment);
  const { data: comments } = useQuery(['comments', post.id], () =>
    getAllCommentsByPost(post.id),
  );

  const publishedDateFormatted = formatLongDate(new Date(post.publishedAt));
  const publishedDateRelativeToNow = formatRelativeDate(
    new Date(post.publishedAt),
  );
  const publishedDateIsoString = new Date(post.publishedAt).toISOString();

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    mutate(
      {
        content: newCommentText,
        postId: post.id,
        createdAt: new Date().toISOString(),
      },
      { onSuccess: () => queryClient.invalidateQueries(['comments', post.id]) },
    );

    setNewCommentText('');
  }

  function handleChangeNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}
            alt={`Avatar de ${post.author.name}`}
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedDateIsoString}>
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={shortid.generate()}>{line.content}</p>;
          }

          if (line.type === 'link') {
            return (
              <p key={shortid.generate()}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }

          return null;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
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
        {comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </article>
  );
}
