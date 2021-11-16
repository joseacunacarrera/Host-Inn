const express = require('express');
const { createPool } = require('mysql');
const router = express.Router();

const db = require('../database');

router.get('/addHotel', (req, res) => {
    res.render('hotels/add');
});

router.post('/addHotel', async (req, res) => {
    const { name, description, location, facilities, placeDescription } = req.body;
    const newHotel = {
        name, 
        description,
        location,
        facilities,
        placeDescription
    };
    const query = 'INSERT INTO hotel (nombre, descripcion, ubicacion, facilidades, descripcionInstalaciones, activo) VALUES (?, ?, ?, ?, ?, ?)';
    await db.query(query, [newHotel.name, newHotel.description, newHotel.location, newHotel.facilities, newHotel.placeDescription, 1]);
    res.redirect('/hotels');
})

router.get('/', async (req, res) => {
    const query = 'SELECT * FROM hotel WHERE activo = 1';
    const hotels = await db.query(query);
    res.render('hotels/list', { hotels:hotels });
})

router.get('/deleteHotel/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    const query = 'UPDATE hotel SET activo = 0 WHERE idHotel = ?';
    await db.query(query, [hotelId]);
    res.redirect('/hotels')
})

router.get('/editHotel/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    const query = 'SELECT * FROM hotel WHERE idHotel = ?';
    const hotels = await db.query(query, [hotelId]);
    res.render('hotels/edit', {hotel: hotels[0]});
})

router.post('/editHotel/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    const { name, description, location, facilities, placeDescription } = req.body;
    const editedHotel = {
        name, 
        description,
        location,
        facilities,
        placeDescription
    };
    const query = 'update hotel SET nombre=?, descripcion=?, ubicacion=?, facilidades=?, descripcionInstalaciones=? WHERE idHotel = ?';
    await db.query(query, [editedHotel.name, editedHotel.description, editedHotel.location, editedHotel.facilities, editedHotel.placeDescription, hotelId]);
    res.redirect('/hotels')
});

module.exports = router;
