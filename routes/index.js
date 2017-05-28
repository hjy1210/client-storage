var express = require('express');
var router = express.Router();

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

module.exports = router;
