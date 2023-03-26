import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonBases from "../ButtonBases/ButtonBases";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


function GalleryItem({ item, likeImage, deleteImage }) {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        </Box>
    );

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <ButtonBases item={item} key={item.id} />
                    <br></br>
                    <Typography variant="body1" gutterBottom>
                        <span>{item.likes} people love this!</span>
                    </Typography>
                    <IconButton aria-label="favorite" onClick={() => likeImage(item.id)}>
                        <FavoriteIcon color="primary" />
                        Like
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteImage(item.id)}>
                        <DeleteIcon color="primary" />
                        Delete
                    </IconButton>
                    <CardActions>
                    </CardActions>
                </CardContent>

            </Card>
        </>
    )
}

export default GalleryItem