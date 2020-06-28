const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  Id: {
    type: String,
  },
  Title: {
    type: String,
  },
  Synopsis: {
    type: String,
  },
  FilmTrailerUrl: {
    type: String,
  },
  Rating: {
    type: String,
  },
  Duration: {
    type: Number,
  },
  poster: {
    type: String,
  },  
  slide: {
    type: String,
  },
  OpeningDate: {
    type: Date,
  },
  Updated: {
    type: Date,
    default: Date.now()
  }

});

module.exports = movie = mongoose.model('movie', MovieSchema);
