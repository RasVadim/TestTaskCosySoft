import React from "react";
import "./App.css";
import GalleryGrid from "./GallaryComps/GalleryGrid";
import ModalAddPicture from "./GallaryComps/Modal/ModalAddPicture";

function App() {
  //  console.log(modal.openModalAdd())

  return (
    <div className="App">
      <div className="mainGrid">
        <header className="header">
          <p className="logo">CosySoft</p>
          <p className="description">
            {" "}
            Test task for the developer's frontend{" "}
          </p>
        </header>
        <div className="title">
          <p>Gallery</p>
         <ModalAddPicture />
        </div>
        <main>
          <GalleryGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
