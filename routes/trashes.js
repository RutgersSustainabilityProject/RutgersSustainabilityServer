var express = require('express');
var multer = require('multer');
var upload = multer({dest : 'uploads/'});
var router = express.Router();
var passHash = require('password-hash');
var mongoose = require('mongoose');
var fs = require('fs');
var Trash = require('../models/Trash.js')

router.post('/postTrash', upload.array(), function(req, res, next){

  var userId = req.body.userId;
  var lat = req.body.latitude;
  var lon = req.body.longitude;
  var epoch = req.body.epoch;
  var tags = req.body.tags;

  var data = req.body.trashPhoto;
  var trash = {
    userId : userId,
    picture : data,
    latitude : lat,
    longitude : lon,
    epoch : epoch,
    tags : tags
  };

  Trash.create(trash, function(err, snap){
    if (err) {
      return next(err);
    }
    var response = {
      status : 'ok',
      message : 'Trash posted!',
      trash : trash
    };
    res.status(201).send(response);
  });
});

router.get('/getTrashByUserId', function(req, res){
  var userId = req.params.userId;
  userId = String(userId);
  Trash.find({'userId' : userId}, function(err, docs) {
      if (!err) {
        var response = {
          status : 'ok',
          message : 'Trash retrieved successfully',
          trash : docs
        };
        res.status(200).send(response);
        return;
      } else {
        var response = {
          status : 'error',
          message : 'Error retrieving trash, ' + err.msg
        }
        res.status(200).send(response);
      }
  });
});

module.exports = router;
