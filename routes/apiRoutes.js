const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const Education = mongoose.model('education');
const Experience = mongoose.model('experience');
const Volunteering = mongoose.model('volunteering');
const Other = mongoose.model('other');
var router = express.Router();

router.get('/current_user', (req, res)=>{
  res.send(req.user);
});

router.get('/logout', (req, res)=>{
  req.logout();
  res.send(req.user);
});

router.post('/addeducation', (req, res)=>{
  if(req.body !== {}){
    const education = new Education({
      title: req.body.title,
      school: req.body.school,
      location: req.body.location,
      degree: req.body.degree,
      gradDate: req.body.gradDate
    }).save((err, edu)=>{
      if(err){
        res.send("Error")
      }
      res.send("Success");
    });
  } else {
    res.send("Error");
  }
});
router.get('/education', (req, res)=>{
  Education.find({}, (err, results)=>{
    if(err){
      res.send("Error");
    }
    res.send(results);
  })
});
router.post('/addexperience', (req, res)=>{
  if(req.body !== {}){
    const education = new Experience({
      title: req.body.title,
      employer: req.body.employer,
      duration: req.body.duration,
      roles: req.body.roles
    }).save((err, exp)=>{
      if(err){
        res.send("Error")
      }
      res.send("Success");
    });
  } else {
    res.send("Error");
  }
});
router.get('/experience', (req, res)=>{
  Experience.find({}, (err, results)=>{
    if(err){
      res.send("Error");
    }
    res.send(results);
  })
});

router.post('/addvolunteering', (req, res)=>{
  if(req.body !== {}){
    const volunteering = new Volunteering({
      title: req.body.title,
      organization: req.body.employer,
      duration: req.body.duration,
      roles: req.body.roles
    }).save((err, vol)=>{
      if(err){
        res.send("Error")
      }
      res.send("Success");
    });
  } else {
    res.send("Error");
  }
});
router.get('/volunteering', (req, res)=>{
  Volunteering.find({}, (err, results)=>{
    if(err){
      res.send("Error");
    }
    res.send(results);
  })
});

router.post('/addother', (req, res)=>{
  if(req.body !== {}){
    const other = new Other({
      title: req.body.title,
      organization: req.body.employer,
      duration: req.body.duration,
      roles: req.body.roles
    }).save((err, other)=>{
      if(err){
        res.send("Error")
      }
      res.send("Success");
    });
  } else {
    res.send("Error");
  }
});
router.get('/other', (req, res)=>{
  Other.find({}, (err, results)=>{
    if(err){
      res.send("Error");
    }
    res.send(results);
  })
});

module.exports = router;
