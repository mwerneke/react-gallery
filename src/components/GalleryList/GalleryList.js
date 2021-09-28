import React from "react";
import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, pictureLikes }) {
  return (
    <div>
      <div>
        {galleryList.map((picture) => (
          <div>
            <GalleryItem
              key={picture.id}
              picture={picture}
              pictureLikes={pictureLikes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryList;
