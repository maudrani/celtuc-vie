import React from 'react';

const HighlightedText = ({ text }) => {
  const regex = /::(.*?)::/g;
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(<span key={`highlight-${lastIndex}`} className="color-font">{match[1]}</span>);
    lastIndex = regex.lastIndex;
  }

  parts.push(text.slice(lastIndex));

  return <>{parts}</>;
};

export default HighlightedText;
