import React from "react";
import "./ImageGalleryApp.css";
import Gallery from "./Gallery";
import AnimatedPage from "../AnimatedPage";

function ImageGalleryApp() {
  return (
    <AnimatedPage>
      <>
        <h1 style={{ textAlign: "center", color: "black" }}>Image Gallery</h1>
        <div>
          <Gallery />
        </div>
      </>
    </AnimatedPage>
  );
}

export default ImageGalleryApp;
