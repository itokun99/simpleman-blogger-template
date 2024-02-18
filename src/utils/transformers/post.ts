import { Posts, AppConfig, Comments } from '@domain';
import { removeDomainAndSubdomain, removeHtmlTags, getConfig } from '@utils';

export function transformPostLabel(labels: Posts['items'][0]['labels']) {
  if (labels && labels.length > 0) {
    labels = labels.map(value => ({
      title: value as unknown as string,
      url: `/search?labels=${encodeURIComponent(value as unknown as string)}`
    }));
  }

  return labels;
}

export function createPostUrl(url: string) {
  if (getConfig().isBlogger) {
    return `${removeDomainAndSubdomain(url, false)}`;
  }

  return `${removeDomainAndSubdomain(url, true)}`;
}

export function transformPostAuthor(
  author: Posts['items'][0]['author'],
  authors: AppConfig['author']
) {
  // find the match data
  const customAuthorData = authors.filter(d => d.id === author.id)[0];

  if (customAuthorData) {
    author = {
      ...author,
      detail: customAuthorData
    };
  }
  return author;
}

// Function to group items by label and count occurrences
export function createGroupAndCountLabels(items: Posts['items']) {
  const labelCounts: {
    [key: string]: {
      id: string;
      title: string;
      count: number;
      url: string;
    };
  } = {};

  items.forEach(item => {
    if (item.labels) {
      item.labels.forEach(label => {
        const l = label as unknown as string;
        if (labelCounts[l]) {
          labelCounts[l].count++;
        } else {
          labelCounts[l] = {
            id: `tags-${l}`,
            title: l,
            count: 1,
            url: `/search?labels=${encodeURIComponent(l)}`
          };
        }
      });
    }
  });

  // Convert the labelCounts object into an array
  const groupedLabels = Object.values(labelCounts);

  const newItems = groupedLabels;

  return newItems;
}

export function transformPost(
  post: Posts['items'][0],
  authors: AppConfig['author']
) {
  if (post.author) post.author = transformPostAuthor(post.author, authors);
  if (post.labels) post.labels = transformPostLabel(post.labels);
  if (post.url) post.to = createPostUrl(post.url);
  if (post.content) post.summary = removeHtmlTags(post.content, 250, '[...]');
  return post;
}

export function transformComment(
  post: Comments['items'][0],
  authors: AppConfig['author']
) {
  if (post.author) post.author = transformPostAuthor(post.author, authors);
  return post;
}

export function transformPosts(data: Posts, authors: AppConfig['author']) {
  if (data?.items?.length > 0) {
    data.items = data.items.map(post => transformPost(post, authors));
  }

  return data;
}

export function transformComments(
  data: Comments,
  authors: AppConfig['author']
) {
  if (data?.items?.length > 0) {
    // const tempIds: string[] = [];

    data.items = data.items.map(com => {
      // com.replies = com.replies || [];
      //
      // // find replies
      // com.replies = data.items.filter(d => {
      //   if (
      //     d.inReplyTo?.id === com.id &&
      //     !com.replies?.some(v => v.id === com.id)
      //   ) {
      //     tempIds.push(d.id);
      //     return true;
      //   }
      //   return false;
      // });
      return transformComment(com, authors);
    });

    // remove duplicate item from replies
    // data.items = data.items.filter(com => !tempIds.includes(com.id));
  }

  return data;
}
