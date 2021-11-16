const express = require('express');
const { createPool } = require('mysql');
const router = express.Router();

const db = require('../database');

router.get('/', async (req, res) => {
    const query = 'SELECT * FROM hotel WHERE activo = 1';
    const hotels = await db.query(query);
    res.render('inicio/inicio', { hotels:hotels });
})

router.get('/mostrarHotel/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    const query = 'SELECT * FROM hotel WHERE idHotel = ?';
    const hotels = await db.query(query, [hotelId]);
    res.render('inicio/informacion', {hotel: hotels[0]});
})

module.exports = router;

