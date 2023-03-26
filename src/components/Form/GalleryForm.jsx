import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function GalleryForm({ addImage }) {

    let [itemURL, setItemURL] = useState('');
    let [itemDesc, setItemDesc] = useState('');

    //Function for combining multiple functions so that they can be used on a MUI button lol.
    const handleSubmitAndClose = (event) => {
        handleModalSubmit();
        handleClose();
    }

    //Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Inside of HandleSubmit');
        let newItem = {
            path: itemURL,
            description: itemDesc,
            likes: 0
        }
        addImage(newItem)
        setItemURL('')
        setItemDesc('')
    };

    //Handle modal form submit
    const handleModalSubmit = (event) => {
        console.log('Inside of HandleModalSubmit');
        let newItem = {
            path: itemURL,
            description: itemDesc,
            likes: 0
        }
        addImage(newItem)
        setItemURL('')
        setItemDesc('')
    };

    //MUI box component.
    const bull = (
        <Box>
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        </Box>
    );

    //MUI modal form components
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log('this is itemURL:', itemURL)
        setOpen(false);
    };


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '15%' }}>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={{ justifyContent: 'center' }}>
                                <div>
                                    <p>Share your favorite moments!</p>
                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        Upload Image
                                    </Button>
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogTitle>Upload Image</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Upload an image by providing an image URL and description.
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Image URL"
                                                fullWidth
                                                variant="standard"
                                                onChange={(event) => setItemURL(event.target.value)}

                                            />
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Description"
                                                fullWidth
                                                variant="standard"
                                                onChange={(event) => setItemDesc(event.target.value)}
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit" onClick={handleSubmitAndClose}>Upload</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>

                            </Stack>
                        </form>
                        <CardActions>
                        </CardActions>
                    </CardContent>

                </Card>
            </Box>
        </>
    )
}

export default GalleryForm



