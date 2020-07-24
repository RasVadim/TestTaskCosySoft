import React from "react";
import "./Modal.css";

export default class ModalAddPicture extends React.Component {
  state = {
    isOpened: false,
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="addPhoto"
          onClick={ () => this.setState({ isOpened: true })}
        >
          +
        </button>

        {this.state.isOpened && (
          <div className="modal_add">
            <div className="modal_add_body">
              <h1>Add to photo</h1>
              <p>Enter url Photo</p>
              <p>Enter comments to Photo</p>
              <button  onClick={ () => this.setState({ isOpened: false })}>Add Photo</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
