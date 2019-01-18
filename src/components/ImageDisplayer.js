import React from "react";

const ImageDisplayer = props => {
  const a = props.images.map((image, i) => {
    return <img key={i} alt={image.description} src={image.urls.small} />;
  });

  return <div>{a}</div>;
};

export default ImageDisplayer;
