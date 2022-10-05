const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const mongoose = require('mongoose');

//routes
const rentalRoutes = require('./routes/rentals');

//models
const Rental = require('./models/rental');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, () => {
	console.log('Connected to db');
});

//Middleware
app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
	console.log('Server is listening on port:', PORT);
});