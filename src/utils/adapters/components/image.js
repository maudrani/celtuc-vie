export function resizeImage(imageSize, newSize) {
  if (!imageSize) return;

  // Calculate the aspect ratio of the original image
  const aspectRatio = imageSize.width / imageSize.height;

  // If newSize contains only the width key, calculate the height based on the aspect ratio
  if (newSize.width && !newSize.height) {
    newSize.height = Math.round(newSize.width / aspectRatio);
  }
  // If newSize contains only the height key, calculate the width based on the aspect ratio
  else if (newSize.height && !newSize.width) {
    newSize.width = Math.round(newSize.height * aspectRatio);
  }

  // Calculate the scaling factor for the image size
  const scaleX = newSize.width / imageSize.width;
  const scaleY = newSize.height / imageSize.height;

  // Use the smaller scaling factor to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY);

  // Calculate the new image size
  const newWidth = Math.round(imageSize.width * scale);
  const newHeight = Math.round(imageSize.height * scale);

  // Return the new modified imageSize object
  return {
    width: newWidth,
    height: newHeight,
  };
}
