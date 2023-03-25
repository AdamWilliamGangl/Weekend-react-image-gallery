import { useState } from "react";

function GalleryItem({ item, likeImage }) {

    let [toggleSwitch, setToggleSwitch] = useState(true)

    const toggleImage = () => {
        setToggleSwitch(!toggleSwitch)
    }

    return (
        <div key={item.id} onClick={() => toggleImage()}>
            { toggleSwitch ? <img src={item.path} height="225px" /> : <p>{item.description}</p>}
            <button class="likeBtn" onClick={() => likeImage(item.id)}> love it! </button>
            <p>{item.likes} people love this!</p>
        </div>
    )
}

export default GalleryItem