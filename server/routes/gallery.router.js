const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "reactGallery" ORDER BY "id"`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log(`Error making database Query (GET) in gallery.router`, error)
            res.sendStatus(500)
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    console.log(req.body);
    let galleryItem = req.body;
    const queryText = `INSERT INTO "reactGallery" ("path", "description", "likes")
    VALUES 
    ($1, $2, $3)
    `
    pool.query(queryText, [galleryItem.path, galleryItem.description, galleryItem.likes])
        .then((result) => {
            console.log('Successful POST request for increasing likes.');
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query (POST)`, error)
            res.sendStatus(500)
        })
}); // END POST Route


// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "reactGallery" SET likes = likes +1 WHERE ID=$1`
    pool.query(queryText, [galleryId])
        .then((result) => {
            console.log('Successful PUT request for increasing likes.');
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(`Error making database query (PUT)`, error)
            res.sendStatus(500)
        })
}); // END PUT Route

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `DELETE FROM "reactGallery" WHERE ID=$1`
    pool.query(queryText, [galleryId])
        .then((result) => {
            console.log('Successful DELETE request.');
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(`Error making database query (DELETE)`, error)
            res.sendStatus(500)
        })
}); // END DELETE Route



module.exports = router;