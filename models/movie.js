const mongoose = require('mongoose');
const shortid = require('shortid');


const MovieSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
    default: shortid.generate
  },
  Title: {
    type: String,
    required: true
  },
  Synopsis: {
    type: String,
  },
  FilmTrailerUrl: {
    type: String,
  },
  Rating: {
    type: String,
    default: 'TBC'
  },
  Duration: {
    type: String,
    default: 'TBC'
  },
  FilmPosterUrl: {
    type: String,
  },  
  slide: {
    type: String,
  },
  OpeningDate: {
    type: Date,
    required: true
  },
  Updated: {
    type: Date,
    default: Date.now()
  }

});

module.exports = movie = mongoose.model('movie', MovieSchema);
