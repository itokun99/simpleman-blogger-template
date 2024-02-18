/**
 * Helper for remove Html tags (div, span or etc) form html string
 * @param inputString html string e.g content from CMS / Blogger
 * @param limit max length char that shown
 * @param endWord additional char place end of string
 * @returns from <div>text</div> to test
 */
export function removeHtmlTags(
  inputString: string,
  limit?: number,
  endWord?: string
) {
  // Use a regular expression to match and remove both tags, their attributes, and replace newlines with spaces
  let result = inputString.replace(/<[^>]*>|[\r\n]/g, ' ');

  // Check if the result exceeds the character limit
  if (limit && result.length > limit) {
    // Trim the result to the specified character limit without breaking words
    result = result.substring(0, limit);
    // Remove any partial word at the end
    result = result.replace(/\s\w*$/, '');
  }

  // Trim the resulting string to remove leading and trailing spaces
  result = result.trim();

  // Add "[...]" at the end of the resulting string if it was trimmed and includeEllipsis is true
  if (endWord && result.length < inputString.length) {
    result += ` ${endWord}`;
  }

  return result;
}

/**
 * Helper for remove http / https and domain url string to relative path string
 * @param inputString url string e.g https://codepelajar.blogspot.com/service.html
 * @returns relative path string e.g /services
 */
export function removeDomainAndSubdomain(
  inputString: string,
  removeHtml = false
) {
  // Match the protocol and capture the domain, file path (if present), and subdomain
  const pattern = /https?:\/\/(www\d?\.)?([^/]+)(\/[^?#]*)?/i;
  // Replace the matched pattern with just the file path or subdomain
  const result = inputString.replace(
    pattern,
    (_match, subdomain, domain, path) => {
      if (!path || path === '/') {
        return subdomain ? '' : domain; // No file path, retain subdomain or domain
      } else {
        return path; // File path exists, remove subdomain and domain
      }
    }
  );

  if (removeHtml) {
    return result.replace(/\.html$/i, '');
  }

  // Remove .html from the result
  return result;
}

/**
 * Helper for Resize image from blogger image url
 * @param image blogger image url
 * @param width number
 * @param height number
 * @param crop boolean
 * @returns image url
 */
export const resizeImage = (
  image: string,
  width = 400,
  height = 400,
  crop = true
) => {
  const target = /\/s[0-9]+\c/g;
  const result = `/w${width}-h${height}-${crop ? 'c' : ''}`;
  return image.replace(target, result);
};

/**
 * Helper for conditional image, if image not defined will set to defaultImage
 * @param defaultImage image url
 * @param image image url
 * @returns
 */
export function getImage(defaultImage: string, image?: string) {
  if (image) return image;
  return defaultImage;
}
