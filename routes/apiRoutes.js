const passport = require('passport');
const express = require('express');
var router = express.Router();

router.get('/current_user', (req, res)=>{
  console.log(req.user);
  res.send(req.user);
});

router.get('/logout', (req, res)=>{
  req.logout();
  res.send(req.user);
})

module.exports = router;
