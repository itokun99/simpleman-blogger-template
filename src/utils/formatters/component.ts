import { Posts } from '@domain';

export function createAuthorDataFromPost(author: Posts['items'][0]['author']) {
  return {
    title: author?.detail?.name || author?.displayName,
    subtitle:
      author?.detail?.title ||
      author.detail?.nickname ||
      author.detail?.username ||
      author?.detail?.email,
    image: author?.detail?.profilePic || author?.image?.url
  };
}
