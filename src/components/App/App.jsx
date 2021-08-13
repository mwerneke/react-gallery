import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import {useState, useEffect} from 'react'
function App() {

  
  const[galleryList, setGalleryList] = useState([]);
  

  useEffect(()=>{
    console.log('In use Effect');
    fetchList()
  }, []);

  const fetchList = () => {
    axios.get('/gallery'
    ).then((response)=>{
      console.log('This is fetchList response',response.data);
      setGalleryList(response.data)
    }).catch(error =>{
      console.log('Get Fetch Data',error);
    })
  }




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kids at a Glance</h1>
        </header>
        
        <GalleryList 
          galleryList={galleryList}
          //galleryItem={galleryItem}
        />

       
      </div>
    );
}

export default App;
