import React from "react";
import { connect } from "react-redux";
import { deletePhoto } from "../store/actions";

function GalleryItem(props) {
  return (
    <div className="galleryItem">
      <div className="img_wraper">
        <div className="second_wraper">
          <img className="itemPhoto" src={props.urlPhoto} />
          <div
            className="delete_photo"
            onClick={() => {
              let confirmDel = window.confirm(
                "Are you sure you want to delete this photo?"
              );
              if (confirmDel) {
                props.deletePhoto(props.id);
              }
            }}
          >
            X
          </div>
        </div>
      </div>
      <div className="text_comments">{props.commentPhoto}</div>
    </div>
  );
}

const mapDispatchToProps = {
  deletePhoto,
};

export default connect(null, mapDispatchToProps)(GalleryItem);
