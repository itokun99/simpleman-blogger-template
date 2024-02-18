import { APP_CONFIG } from './app';

export const BLOGGER_API_ENDPOINTS = {
  blog: (blogId: string) => `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}`,
  posts: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts`,
  post: (id: string, blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts/${id}`,
  searchPosts: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts/search`,
  pages: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/pages`,
  users: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/users`,
  comments: (blogId: string, postId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts/${postId}/comments`
};

export const BLOGGER_FEED_ENDPOINTS = {
  postSummaries: (blogUrl: string) => `${blogUrl}/feeds/posts/summary`,
  postDefault: (blogUrl: string) => `${blogUrl}/feeds/posts/default`
};
