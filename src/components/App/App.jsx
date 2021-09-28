import axios from "axios";
import React from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import { useState, useEffect } from "react";
import Example from "../Example/Example.jsx";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    console.log("In use Effect");
    fetchList();
  }, []);

  const fetchList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("This is fetchList response", response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Get Fetch Data", error);
      });
  };
  const pictureLikes = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        console.log("in pictures like", response);
        fetchList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Kids at a Glance</h1>
      </header>
      <Example />
    </div>
  );
}

export default App;
