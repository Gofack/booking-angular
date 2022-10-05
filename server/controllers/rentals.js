const Rental = require('../models/rental');

exports.getRentals = (req, res) => {
	Rental.find({}, (err, data) => {
		if (err) {
			return Rental
				.sendError(res, { status: 422, detail: 'Cannot retrieve data.' });
		}
		return res.json(data);
	});
}

exports.getRentalbyId = (req, res) => {
	const { rentalId } = req.params;
	Rental.findById(rentalId, (err, data) => {
		if (err) {
			return Rental
				.sendError(res, { status: 422, detail: 'Cannot retrieve data by ID.' });
		}
		return res.json(data);
	});
}

exports.createRental = (req, res) => {
	const rentalData = req.body;
	Rental.create(rentalData, (err, createdRental) => {
		if (err) {
			return Rental
				.sendError(res, { status: 422, detail: 'Cannot post data.' });
		}
		return res.json({ message: `Rental with id:${createdRental._id} was added.` })
	});

}
// exports.deleteRental = (req, res) => {
// 	const { id } = req.params;
// 	const rIndex = rentals.findIndex(r => r._id === id);
// 	rentals.splice(rIndex, 1);
// 	return res.json({ message: `Rental with id:${id} was removed.` })
// }
// exports.updateRental = (req, res) => {
// 	const { id } = req.params;
// 	const rentalToUpdate = req.body
// 	const rIndex = rentals.findIndex(r => r._id === id);
// 	rentals[rIndex].city = rentalToUpdate.city;
// 	rentals[rIndex].title = rentalToUpdate.title;
// 	return res.json({ message: `Rental with id:${id} was updated.` })
// }