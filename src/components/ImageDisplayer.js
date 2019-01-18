import React from "react";

const ImageDisplayer = props => {
  return (
    <div>
      <img src={props.imgUrl} alt="photoOfAmazingTHings" />
    </div>
  );
};

export default ImageDisplayer;
