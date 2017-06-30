var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Hi there");
  var file = './data/resume.json';
  jsonfile.readFile(file, function(err, obj) {
    if(obj){
      res.json(obj);
    }
  })
});

module.exports = router;
