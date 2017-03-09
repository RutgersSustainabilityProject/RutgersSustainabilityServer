var mongoose = require('mongoose');

var NoiseSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  audio: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  decibels: {type: Number, required: true},
  epoch: {type: Number, required: true},
  tags: {type: String}
});

NoiseSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return obj;
};

module.exports = mongoose.model("Noise", NoiseSchema);
