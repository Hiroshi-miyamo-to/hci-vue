var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

router.post('/login-process', function(req, res, next) {
  res.redirect('/simple-deep');
});

router.post('/sign-process',(req,res)=>{
  var signName = req.body.signName;
  var signId = req.body.signId;
  var signPw = req.body.signPw;
  var signPwRe = req.body.signPwRe;
  var signBirth = req.body.signBirth;
  var signJob = req.body.signJob;
  var signLive = req.body.signLive;
  console.log(signLive);
  res.redirect('/');
});
 

module.exports = router;
