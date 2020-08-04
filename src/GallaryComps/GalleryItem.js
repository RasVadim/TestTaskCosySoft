import React from "react";
import { connect } from "react-redux";
import { deletePhoto, openModalPhoto } from "../store/actions";

class GalleryItem extends React.Component {

  onOpenModalPhoto() {
    this.props.openModalPhoto({
      id: this.props.id,
      url: this.props.urlPhoto,
      comment: this.props.commentPhoto,
    }, true);
  }

  render() {
    return (
      <div className="galleryItem">
        <div className="img_wraper">
          <div className="second_wraper">
            <img
              className="itemPhoto"
              src={this.props.urlPhoto}
              onClick={() =>
                this.onOpenModalPhoto()
              }
            />
            <div
              className="delete_photo"
              onClick={() => {
                let confirmDel = window.confirm(
                  "Are you sure you want to delete this photo?"
                );
                if (confirmDel) {
                  this.props.deletePhoto(this.props.id);
                }
              }}
            >
              X
            </div>
          </div>
        </div>
        <div className="text_comments">{this.props.commentPhoto}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deletePhoto,
  openModalPhoto,
};

export default connect(null, mapDispatchToProps)(GalleryItem);
