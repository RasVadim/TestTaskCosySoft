import React from "react";
import { connect } from 'react-redux'

import GalleryItem from "./GalleryItem";

function GalleryGrid(props) {
  return (
    <div className="galleryGrid">
       {props.stateArray.map(objPhoto => {
         return <GalleryItem urlPhoto={objPhoto.url} commentPhoto={objPhoto.comment} key={objPhoto.id} />
        })}
       
    </div>
  );
}

const mapStateToprops = state => {
  return {
    stateArray : state
  }
}

export default connect(mapStateToprops)(GalleryGrid);
