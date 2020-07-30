import React from "react";

function GalleryItem(props) {
  return (
    <div className="galleryItem">
      <div className="img_wraper">
        <img className="itemPhoto" src={props.urlPhoto} />
      </div>
      <div className='text_comments'>{props.commentPhoto}</div>
    </div>
  );
}

export default GalleryItem;
