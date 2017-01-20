var mongoose = require('mongoose');

var TrashSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  picture: {type: String},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  epoch: {type: Number, required: true},
  tags: {type: String}
});

TrashSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return obj;
};

module.exports = mongoose.model("Trash", TrashSchema);
