var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
        // This is the News
router.get('/News', function(req, res, next) {
  res.render('news.hbs', { title: 'Express' });
});
        //  this is home
router.get('/Home', function(req, res, next) {
  res.render('home.hbs', { title: 'Express' });
});
    // This is teams
router.get('/Teams', function(req, res, next) {
  res.render('teams.hbs', { title: 'Express' });
});
          // this is events
router.get('/Events', function(req, res, next) {
  res.render('events.hbs', { title: 'Express' });
});
          // this is sponsors
router.get('/Sponsors', function(req, res, next) {
  res.render('sponsors.hbs', { title: 'Express' });
});
     // this is about
router.get('/About', function(req, res, next) {
  res.render('about.hbs', { title: 'Express' });
});
// this is watch
router.get('/Watch', function(req, res, next) {
  res.render('watch.hbs', { title: 'Express' });
});

module.exports = router;
