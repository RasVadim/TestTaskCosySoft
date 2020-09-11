import React from "react";
import { connect } from "react-redux";
import {
  addNewPhoto,
  openModalPhoto,
  deletePhoto,
  changeComment,
} from "../../store/actions";
import "./Modal.css";
import ModalAddPicture from "../Modal/ModalAddPicture";

class ModalViewPicture extends React.Component {
  constructor(props) {
    super(props);
    this.textComment = null;
  }

  state = {
    visibleEditPhoto: "invisible",
  };

  styleBtn = {
    fontWeight: 300
  }

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
                  <ModalAddPicture styleBtn={'add_photo_bold'} namebtn={"ADD NEW PHOTO"} />
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
                      this.props.openModalPhoto(null, false);
                    }
                  }}
                >
                  DELETE THIS PHOTO
                </div>
                <div
                  className="comment"
                  contentEditable="true"
                  ref={(ref) => (this.textComment = ref)}
                  suppressContentEditableWarning={true}
                  onInput={() => {
                    this.setState({ visibleEditPhoto: "" });
                  }}
                >
                  {this.props.modalPhoto.objOpenPhoto.comment}
                </div>
                <div
                  className={`edit_comment ${this.state.visibleEditPhoto}`}
                  onClick={() => {
                    this.props.changeComment(
                      this.props.modalPhoto.objOpenPhoto.id,
                      this.textComment.innerText
                    );
                    this.setState({ visibleEditPhoto: "invisible" })
                  }}
                >
                  CHANGE COMMENT
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
  changeComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPicture);
