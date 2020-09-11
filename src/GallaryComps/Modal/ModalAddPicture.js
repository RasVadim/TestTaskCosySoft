import React from "react";
import { connect } from "react-redux";
import { addNewPhoto } from "../../store/actions";
import "./Modal.css";

class ModalAddPicture extends React.Component {
  constructor(props) {
    super(props);
    this.urlNewPhoto = null;
    this.textNewComment = null;
  }

  state = {
    isOpened: false,
    urlStyle: "modal_input",
    noUrl: "",
  };

  onAddNewPhoto() {
    this.props.addNewPhoto({
      id: Date.now(),
      url: this.urlNewPhoto.value,
      comment: this.textNewComment.value,
    });
  }
 
  render() {
    const patternUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    return (
      <React.Fragment>
        <button
          className={`addPhoto ${this.props.styleBtn && this.props.styleBtn}`}
          onClick={() => this.setState({ ...this.state, isOpened: true })}
        >
          {this.props.namebtn}
        </button>

        {this.state.isOpened && (
          <div
            className="modal"
            onClick={(event) => {
              if (!event.target.closest(".modal_body")) {
                this.setState({ ...this.state, isOpened: false });
              }
            }}
          >
            <div className="modal_body ">
              <h1>Add to photos</h1>
              <div className="wrapper_input">
                url photo
                <input
                  id="url_photo"
                  className={this.state.urlStyle}
                  ref={(ref) => (this.urlNewPhoto = ref)}
                ></input>
              </div>
              {this.state.noUrl}
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
                onClick={() => {
                  if (patternUrl.test(this.urlNewPhoto.value)) {
                    this.onAddNewPhoto();
                    this.setState({
                      isOpened: false,
                      urlStyle: "modal_input",
                      noUrl: "",
                    });
                  } else {
                    this.setState({
                      ...this.state,
                      urlStyle: "no_url",
                      noUrl: (
                        <div className="eror_url">
                          Please enter a valid url the photo
                        </div>
                      ),
                    });
                  }
                }}
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
