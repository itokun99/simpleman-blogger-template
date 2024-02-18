import { AppConfig } from '../../app/entities';
import { PostLabel } from '@general-types';
export interface BloggerRequestParams {
  q?: string;
  key?: string;
  maxResults?: string | number;
  fetchImages?: boolean;
  pageToken?: string;
  fetchBodies?: boolean;
  labels?: string;
  orderBy?: 'published' | 'updated';
  endDate?: string;
  sortOption?: 'descending' | 'ascending';
  startDate?: string;
  status?:
    | 'draft'
    | 'live'
    | 'scheduled'
    | 'imported'
    | 'emptied'
    | 'live'
    | 'pending'
    | 'spam';
  view?: 'ADMIN' | 'AUTHOR' | 'READER';
  maxComments?: string | number;
  fields?: string;
  path?: string;
}

export interface BlogInfo {
  kind: string;
  id: string;
  name: string;
  description: string;
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  posts: TotalType;
  pages: TotalType;
  locale: {
    language: string;
    country: string;
    variant: string;
  };
}

export interface Posts {
  kind: string;
  nextPageToken: string;
  items: Post[];
  etag: string;
}

export interface Post {
  kind: string;
  id: string;
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string;
  summary: string;
  images: ImageType[];
  author: Author;
  replies: TotalType;
  labels: PostLabel[];
  etag: string;
  to: string;
}

export interface Author {
  id: string;
  displayName: string;
  url: string;
  image: ImageType;
  detail: AppConfig['author'][0];
}

interface TotalType {
  totalItems: string | number;
  selfLink: string;
}

interface ImageType {
  url: string;
}

export type Pages = Posts;

export interface Comments {
  kind: string;
  items: CommentItem[];
  etag: string;
}

export interface CommentItem {
  kind: string;
  id: string;
  post: {
    id: string;
  };
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  selfLink: string;
  content: string;
  author: Author;
  inReplyTo?: {
    id: string;
  };
  replies?: CommentItem[];
}
