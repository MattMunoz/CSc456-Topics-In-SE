const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoGameSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String
});

module.exports = mongoose.model('videogame', videoGameSchema);