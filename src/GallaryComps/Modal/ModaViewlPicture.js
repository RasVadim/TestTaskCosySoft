import React from "react";
import { connect } from "react-redux";
import { addNewPhoto, openModalPhoto, deletePhoto } from "../../store/actions";
import "./Modal.css";
import ModalAddPicture from "../Modal/ModalAddPicture";

class ModalViewPicture extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.modalPhoto.isOpened && (
          <div
            className="modal"
            onClick={(event) => {
              if (!event.target.closest(".modal_view_body")) {
                this.props.openModalPhoto(null, false);
              }
            }}
          >
            <div className="modal_view_body ">
              <div className="image_wraper">
                <img
                  className="img_photo"
                  src={this.props.modalPhoto.objOpenPhoto.url}
                />
              </div>
              <div className="photo_panel">
                <div className="add_new_photo">
                  <ModalAddPicture namebtn={"ADD NEW PHOTO"} />
                </div>
                <div
                  className="delete_this_photo"
                  onClick={() => {
                    let confirmDel = window.confirm(
                      "Are you sure you want to delete this photo?"
                    );
                    if (confirmDel) {
                      this.props.deletePhoto(
                        this.props.modalPhoto.objOpenPhoto.id
                      );
                      this.props.openModalPhoto(null, false)
                    }
                  }}
                >
                  DELETE THIS PHOTO
                </div>
                <div className="comment">
                  {this.props.modalPhoto.objOpenPhoto.comment}
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalPhoto: state.modalPhoto,
    stateArray: state.stateArray,
  };
};

const mapDispatchToProps = {
  openModalPhoto,
  addNewPhoto,
  deletePhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPicture);
