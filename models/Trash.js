var mongoose = require('mongoose');

var TrashSchema = new mongoose.Schema({
  userId: {type: String, required: true, unique: true},
  picture: {data: Buffer, contentType: String},
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
