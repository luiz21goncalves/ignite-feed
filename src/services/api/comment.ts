import { Comment } from '../../types';

import { api } from '.';

type CreateCommentData = {
  content: string;
  postId: number;
  createdAt: string;
};

export const postComment = ({
  content,
  postId,
  createdAt,
}: CreateCommentData) =>
  api.post(`/posts/${postId}/comments`, { content, postId, createdAt });

export const getAllCommentsByPost = (postId: number) =>
  api
    .get<Comment[]>(`/posts/${postId}/comments`)
    .then((response) => response.data);

export const deleteComment = (commentId: number) =>
  api.delete(`/comments/${commentId}`).then((response) => response.data);
