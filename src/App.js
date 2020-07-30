import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import GalleryGrid from "./GallaryComps/GalleryGrid";
import ModalAddPicture from "./GallaryComps/Modal/ModalAddPicture";
import { rootReducer } from "./store/reducers";

const store = createStore(rootReducer);

function App() {
  //  console.log(modal.openModalAdd())

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
