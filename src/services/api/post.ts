import { Post } from '../../types';

import { api } from '.';

export const getAllPosts = () =>
  api.get<Post[]>('/posts').then((response) => response.data);
