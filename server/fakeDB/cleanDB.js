const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDB = require('./FakeDB');

mongoose.connect(config.DB_URI, async () => {
	const fakeDB = new FakeDB();
	console.log('Starting populating DB');
	await fakeDB.populate();
	await mongoose.connection.close();
	console.log('DB has been populated');
});