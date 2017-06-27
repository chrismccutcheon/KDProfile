var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
      sucess: "Test",
    });
    console.log("here");
});

module.exports = router;
