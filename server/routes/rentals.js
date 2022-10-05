const express = require('express');
const router = express.Router();
// const { getRentals, getRentalbyId, createRental, deleteRental, updateRental } = require('../controllers/rentals');
const { getRentals, getRentalbyId, createRental } = require('../controllers/rentals');

router.get('', getRentals);
router.get('/:rentalId', getRentalbyId);
router.post('', createRental);
// router.delete('/:id', deleteRental);
// router.patch('/:id', updateRental);

module.exports = router;