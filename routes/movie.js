
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const upload = require('../config/multer.config.js');
const app = express();
fs = require('fs-extra')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// Load Movie model
const Movie = require('../models/movie');

// @route GET api/movies/test
// @trailer tests movies route
// @access Public
router.get('/test', (req, res) => res.send('movie route testing!'));

// @route GET api/movies
// @trailer Get all movies
// @access Public
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviesfound: 'No Movies found' }));
});

// @route GET api/movies/:id
// @trailer Get single movie by id
// @access Public
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({ nomoviefound: 'No Movie found' }));
});

// @route GET api/movies
// @trailer add/save movie
// @access Public
router.post('/', upload.array('poster'), (req, res) => {

  var filenames = req.files.map(function(file) {
    return 'http://localhost/media/' + file.filename; // or file.originalname
  });

  var a = (filenames.findIndex(function(item){
    return item.indexOf("poster")!==-1;
  }));

  var b = (filenames.findIndex(function(item){
      return item.indexOf("slide")!==-1;
  }));
  
  console.log(filenames.filename);
  // console.log(movieData);
  // console.log(req.body);

  // console.log(req.files);

  // var date = new Date(req.body.OpeningDate);
  // var isoString = date.toISOString();

  var movieData = {
    Title: req.body.Title,
    Synopsis: req.body.Synopsis,
    FilmTrailerUrl: req.body.FilmTrailerUrl,
    OpeningDate: req.body.OpeningDate,
    Rating: (req.body.Rating) ? req.body.Rating : 'TBC',
    Duration: req.body.Duration,
    FilmPosterUrl:  filenames[a],
    BackdropImageUrl: filenames[b]
  };

  if (req.body.Id != 'N/A') {
    movieData.Id = req.body.Id;
  }

  let movie = new Movie(movieData);
  movie.save()
    .then(() => res.json({ movie, msg: 'New movie added successfully' }))
    .catch(err => res.status(400).json('Unable to add this movie'))
});

// @route GET api/movies/:id
// @trailer Update movie
// @access Public
router.post('/:id', upload.array('poster'), (req, res) => {
Movie.findByIdAndUpdate(req.params.id)
.then(movie => {
  
    movie.Id = req.body.Id,
    movie.Title = req.body.Title,
    movie.Synopsis = req.body.Synopsis,
    movie.FilmTrailerUrl = req.body.FilmTrailerUrl,
    movie.Rating = req.body.Rating,
    movie.Duration = req.body.Duration,
    

  console.log(req.files);
  console.log(req.files.length);
  
  if (req.files.length > 0) {
    console.log('hi');
    var filenames = req.files.map(function(file) {
      return 'http://localhost/media/' + file.filename; // or file.originalname
    });

    var a = (filenames.findIndex(function(item){
      return item.indexOf("poster")!==-1;
    }));

    var b = (filenames.findIndex(function(item){
        return item.indexOf("slide")!==-1;
    }));

    console.log(a);

    if (a >= 0) {
      movie.FilmPosterUrl = filenames[a]
    }

    if (b >= 0) {
      movie.BackdropImageUrl = filenames[b]
    }

  }
  console.log(movie);
  movie.save()
  .then(() => res.json({ movie, msg: 'Updated successfully' }))
  .catch(err =>
      res.status(400).json('Unable to update the Database'))
    })
    .catch(err =>
      res.status(400).json('Unable to update the Database'));
});

router.get('/trash/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id)
  .then(movie => {
    
      movie.Status = 'trash',
      movie.Updated = Date.now(),

    console.log(movie);
    movie.save()
    .then(() => res.json({ movie, msg: 'Updated successfully' }))
    .catch(err =>
        res.status(400).json('Unable to update the Database'))
      })
      .catch(err =>
        res.status(400).json('Unable to update the Database'));
  });


  router.get('/restore/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id)
    .then(movie => {
      
        movie.Status = 'active',
        movie.Updated = Date.now(),
  
      console.log(movie);
      movie.save()
      .then(() => res.json({ movie, msg: 'Updated successfully' }))
      .catch(err =>
          res.status(400).json('Unable to update the Database'))
        })
        .catch(err =>
          res.status(400).json('Unable to update the Database'));
    });

// @route GET api/movies/:id
// @trailer Delete movie by id
// @access Public
router.delete('/delete/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => res.json('Movie entry deleted successfully'))
    .catch(err => res.status(404).json({ error: 'No such a movie' }));
});  
  



module.exports = router;
