//mongodb+srv://grant33:Lcelwair1@cluster0-mnbej.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

const FakeDb = require('./fake-db');
const app = express();
const Rental = require('./models/rental');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("app running on port: 3000")
});