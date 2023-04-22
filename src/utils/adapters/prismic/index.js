import { isEmpty } from 'lodash';
import { getVideoAutoplay, getVideoId } from '../components/video';

// @richTextProp parameter is the one you use on the PrismicRichText component
export const GetRichTextContent = (richTextProp = []) => richTextProp[0]?.text;

export const GetImage = imageObj => {
  if (isEmpty(imageObj?.dimensions) || !imageObj) return;

  const parsedImg = {
    main: {
      dimensions: imageObj.dimensions,
      alt: imageObj.alt,
      url: imageObj.url,
    }
  };

  ['desktop', 'tablet', 'mobile'].forEach(_device => {
    if(!imageObj[_device]?.dimensions) return 

    parsedImg[_device] = {
      dimensions: {
        ...imageObj[_device].dimensions || imageObj.dimensions,
      },
      alt: imageObj[_device].alt || imageObj.alt,
      url: imageObj[_device].url || imageObj.url,
    }
  })

  return parsedImg;
};

export const GetParagraphsContent = content => {
  if (!content) return;

  return content.filter(item => !!item.text).map(item => item.text);
};

export const GetLink = ({ link_name, link_url }) => {
  if (!link_name || !link_url) return;

  const validLink = !!(link_name && link_url?.url);

  return {
    name: link_name,
    url: link_url,
    valid: validLink,
  };
};

export const GetParsedVideoData = ({ video }) => {
  if (!video || isEmpty(video)) return;

  const provider = video.provider_name.toLowerCase();

  const parsedData = {
    channel: provider,
    videoId: getVideoId({ url: video.embed_url, provider }),
    autoplay: getVideoAutoplay({ provider }),
  };

  return parsedData;
};
