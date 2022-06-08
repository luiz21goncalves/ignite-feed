export type Profile = {
  name: string;
  role: string;
  avatarUrl: string;
  coverUrl: string;
};

export type Author = {
  name: string;
  role: string;
  avatarUrl: string;
};

export type Content = {
  type: string;
  content: string;
};

export type Post = {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: string;
};

export type Comment = {
  id: number;
  postId: string;
  content: string;
  createdAt: string;
};
