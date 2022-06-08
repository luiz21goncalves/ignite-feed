import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import { useMutation, useQuery } from 'react-query';

import { Avatar } from '../Avatar';
import { formatLongDate, formatRelativeDate } from '../../utils/date';
import { Comment as CommentType } from '../../types';
import { deleteComment } from '../../services/api/comment';
import { queryClient } from '../../services/queryClient';
import { getCurrentUserProfile } from '../../services/api/profile';
import styles from './styles.module.css';

type CommentProps = {
  comment: CommentType;
};

export function Comment(props: CommentProps) {
  const { comment } = props;

  const { mutate } = useMutation(deleteComment);
  const { data: author } = useQuery('me', getCurrentUserProfile);

  const [likeComment, setLikeComment] = useState(0);

  const createdDateFormatted = formatLongDate(new Date(comment.createdAt));
  const createdDateRelativeToNow = formatRelativeDate(
    new Date(comment.createdAt),
  );
  const createdDateIsoString = new Date(comment.createdAt).toISOString();

  function handleLikeComment() {
    setLikeComment((prevState) => prevState + 1);
  }

  function handleDeleteComment() {
    mutate(comment.id, {
      onSuccess: () =>
        queryClient.invalidateQueries(['comments', Number(comment.postId)]),
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src={author?.avatarUrl}
        alt={`Avatar de ${author?.name}`}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author?.name}</strong>
              <time
                title={createdDateFormatted}
                dateTime={createdDateIsoString}
              >
                {createdDateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment} type="button">
            <ThumbsUp size={20} /> Aplaudir
            <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
