import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  //State to store an array of images
  let [galleryList, setGalleryList] = useState([]);

  //Initial mount to render the page.
  useEffect(() => {
    getGalleryList()
  }, []);

  //GET route
  const getGalleryList = () => {
    axios.get('/gallery').
      then(response => {
        console.log('Successful GET in App.jsx. This is response.data:', response.data);
        setGalleryList(response.data)
      })
  }

  //PUT route
  const likeImage = (likeItemId) => {
    axios.put(`/gallery/like/${likeItemId}`)
      .then(response => {
        console.log('Successful PUT in App.jsx. This is the response:', response);
        getGalleryList()
      }).catch(error => {
        alert('Error in PUT route in App.jsx');
        console.log('This is the error in PUT in App.jsx:', error)
      })
  }

//Return to render items on the DOM
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div class="container">
        <GalleryList galleryList={galleryList} likeImage={likeImage} />
      </div>
    </div>
  );
}

export default App;
