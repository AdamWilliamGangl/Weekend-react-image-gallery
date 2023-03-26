import { useState } from "react";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import GalleryItem from "../GalleryItem/GalleryItem";

//Overall component function
function GalleryList({ galleryList, likeImage, deleteImage }) {

    //Material UI component for Cards
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        </Box>
    );

    //Return to render items to the DOM.
    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {galleryList.map(item =>
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <GalleryItem item={item} likeImage={likeImage} deleteImage={deleteImage} key={item.id} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default GalleryList