var express = require('express');
var multer = require('multer');
var upload = multer({dest : 'uploads/'});
var router = express.Router();
var mongoose = require('mongoose');
var Noise = require('../models/Noise.js')

router.post('/postNoise', upload.array(), function(req, res, next){

  var userId = req.body.userId;
  var lat = req.body.latitude;
  var lon = req.body.longitude;
  var epoch = req.body.epoch;
  var tags = req.body.tags;
  var dec = req.body.decibels;

  var data = req.body.audioUrl;
  var noise = {
    userId : userId,
    audio : data,
    latitude : lat,
    longitude : lon,
    decibels : dec,
    epoch : epoch,
    tags : tags
  };

  Noise.create(noise, function(err, obj){
    if (err) {
      return next(err);
    }
    var response = {
      status : 'ok',
      message : 'Trash posted!',
      trash : [trash]
    };
    res.status(201).send(response);
  });
});

router.get('/getNoiseByUserId', function(req, res){
  var userId = req.query.userId;
  Noise.find({'userId' : userId}, function(err, docs) {
      if (!err) {
        var response = {
          status : 'ok',
          message : 'Noise retrieved successfully',
          trash : docs
        };
        res.status(200).send(response);
        return;
      } else {
        var response = {
          status : 'error',
          message : 'Error retrieving noise, ' + err.msg
        }
        res.status(200).send(response);
      }
  });
});

module.exports = router;
