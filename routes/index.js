var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/localstorage',function(req, res, next) {
  res.render('localstorage', { title: 'localStorage' });
});

router.get('/indexeddb',function(req, res, next) {
  res.render('indexeddb', { title: 'indexedDB' });
});

router.get('/image',function(req, res, next) {
  res.render('image');
});

router.get('/image/a',function(req, res, next) {
  var buf=fs.readFileSync("d:\\dvd\\mia\\Mia20161001.jpg")
  res.contentType("image/jpg");  // contentType seems not necessary
  res.send(buf);
});





module.exports = router;
