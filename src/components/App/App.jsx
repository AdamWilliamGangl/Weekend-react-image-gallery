import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../Form/GalleryForm';

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

  //POST route
  const addImage = (newImage) => {
    console.log('this is newImage:', newImage);
    axios.post('/gallery', newImage)
      .then(response => {
        console.log('Successful POST in App.jsx. This is the response:', response);
        getGalleryList()
      }).catch(error => {
        alert('Error in POST route in App.jsx');
        console.log('This is the error in PUT in App.jsx:', error)
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

  //DELETE route
  const deleteImage = (deleteItemId) => {
    axios.delete(`/gallery/delete/${deleteItemId}`)
      .then(response => {
        console.log('Successful DELETE in App.jsx. This is the response', response);
        getGalleryList()
      }).catch(error => {
        alert('Error in DELETE route in App.jsx');
        console.log('This is the error in DELETE in App.jsx', deleteItemId, error)
      })
  }

  //Return to render items on the DOM
  return (
    <div className="App">
      <header className="App-header">
        <img src="images/Galeria.png" height="100" alt="" />
      </header>
      <GalleryForm addImage={addImage} />
      <div className="container">
        <GalleryList galleryList={galleryList} likeImage={likeImage} deleteImage={deleteImage} />
      </div>
    </div>
  );
}

export default App;
