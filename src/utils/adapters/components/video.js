export const getYouTubeVideoIdFromUrl = url => {
  // Our regex pattern to look for a youTube ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  //Match the url with the regex
  const match = url.match(regExp);
  //Return the result
  return match && match[2].length === 11 ? match[2] : undefined;
};

export const getVimeoIdFromUrl = url => {
  // Look for a string with 'vimeo', then whatever, then a
  // forward slash and a group of digits.
  const match = /vimeo.*\/(\d+)/i.exec(url);
  // If the match isn't null (i.e. it matched)
  if (match) {
    // The grouped/matched digits from the regex
    return match[1];
  }
};

export const getVideoId = ({ url, provider }) =>
  ({
    youtube: getYouTubeVideoIdFromUrl(url),
    vimeo: getVimeoIdFromUrl(url),
  }[provider]);

export const getVideoAutoplay = ({ provider }) =>
  ({ vimeo: true, youtube: 1 }[provider]);
