// @richTextProp parameter is the one you use on the PrismicRichText component
export const GetRichTextContent = (richTextProp = []) => richTextProp[0]?.text;

export const GetImage = (imageObj = {}) => {
  const parsedImg = {
    main: {
      dimensions: imageObj.dimensions,
      alt: imageObj.alt,
      url: imageObj.url,
    },
    desktop: {
      dimensions: {
        ...imageObj.desktop.dimensions,
      },
      alt: imageObj.desktop.alt || imageObj.alt,
      url: imageObj.desktop.url || imageObj.url,
    },
    tablet: {
      dimensions: {
        ...imageObj.tablet.dimensions,
      },
      alt: imageObj.tablet.alt || imageObj.alt,
      url: imageObj.tablet.url || imageObj.url,
    },
    mobile: {
      dimensions: {
        ...imageObj.mobile.dimensions,
      },
      alt: imageObj.mobile.alt || imageObj.alt,
      url: imageObj.mobile.url || imageObj.url,
    },
  };

  return parsedImg;
};
