import React from "react";
import { connect } from "react-redux";
import { addNewPhoto } from "../../store/actions";
import "./Modal.css";

class ModalAddPicture extends React.Component {
  constructor(props) {
    super(props);
    this.urlNewPhoto = null;
    this.textNewComment = null;
    this.modalBody = null;
  }

  state = {
    isOpened: false,
  };

  onAddNewPhoto() {
    this.props.addNewPhoto({
      id: Date.now(),
      url: this.urlNewPhoto.value,
      comment: this.textNewComment.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="addPhoto"
          onClick={() => this.setState({ isOpened: true })}
        >
          +
        </button>

        {this.state.isOpened && (
          <div
            className="modal"
            onClick={ event => {
              if (event.target !== this.modalBody) {
                this.setState({ isOpened: false });
              }
            }}
          >
            <div className="modal_body " 
            ref={(ref) => (this.modalBody = ref)}>
              <h1>Add to photos</h1>
              <div className="wrapper_input">
                url photo
                <input
                  id="url_photo"
                  className="modal_input"
                  ref={(ref) => (this.urlNewPhoto = ref)}
                ></input>
              </div>
              <div className="wrapper_input">
                comments to photo
                <input
                  id="text_comment"
                  className="modal_input"
                  ref={(ref) => (this.textNewComment = ref)}
                ></input>
              </div>
              <button
                className="btn_modal"
                onClick={() => this.setState({ isOpened: false })}
              >
                Add photo
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  addNewPhoto,
};

export default connect(null, mapDispatchToProps)(ModalAddPicture);

// export default ModalAddPicture
