import { BLOGGER_API_ENDPOINTS, httpClient } from '@core';
import {
  BlogInfo,
  Posts,
  Comments,
  BloggerRequestParams,
  Pages
} from '../entities';

function blogInfo(blogId: string, apiKey: string) {
  return httpClient.get<BlogInfo>(BLOGGER_API_ENDPOINTS.blog(blogId), {
    params: {
      key: apiKey
    }
  });
}

function getPosts(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Posts>(BLOGGER_API_ENDPOINTS.posts(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

function getPost(
  id: string,
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Posts['items'][0]>(
    BLOGGER_API_ENDPOINTS.post(id, blogId),
    {
      params: {
        ...params,
        key: apiKey
      }
    }
  );
}

function getPages(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Pages>(BLOGGER_API_ENDPOINTS.pages(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

function searchPosts(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Pages>(BLOGGER_API_ENDPOINTS.searchPosts(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

function getComments(
  blogId: string,
  postId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Comments>(
    BLOGGER_API_ENDPOINTS.comments(blogId, postId),
    {
      params: {
        ...params,
        key: apiKey
      }
    }
  );
}

const bloggerRepository = {
  blogInfo,
  getPost,
  getPosts,
  getPages,
  searchPosts,
  getComments
};

export default bloggerRepository;
