import React from "react";
import "./ImageDisplayer.css";
import ImageCard from "./ImageCard";

const ImageDisplayer = props => {
  const a = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{a}</div>;
};

export default ImageDisplayer;
