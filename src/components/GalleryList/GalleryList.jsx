import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//Overall component function
function GalleryList({ galleryList, likeImage }) {

    //A function to toggle the state of an individual item.
    function toggleState() {
    }

    //Return to render items to the DOM.
    return (
        <>
            {galleryList.map(item =>
                <GalleryItem item={item} likeImage={likeImage} key={item.id} />
            )}
        </>
    )
}

export default GalleryList