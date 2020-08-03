import React from "react";
import { connect } from "react-redux";

import GalleryItem from "./GalleryItem";

class GalleryGrid extends React.Component {
  render() {
    return (
      <div className="galleryGrid" >
        {this.props.stateArray.map((objPhoto) => {
          return (
            <GalleryItem
              urlPhoto={objPhoto.url}
              commentPhoto={objPhoto.comment}
              key={objPhoto.id}
              id={objPhoto.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateArray: state.stateArray,
  };
};

export default connect(mapStateToProps)(GalleryGrid);
