var express = require('express');
var router = express.Router();
var multer = require('multer')
var path=require('path')
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

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

///// Note: 'avatar' in single('avatar') and input(type="file", name="avatar", id="avatar") should be match /////
router.post('/profile', multer().single('avatar'),function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  console.log(req.body.firstname)
  res.end("File is uploaded to server's memory as Buffer")
})




module.exports = router;
