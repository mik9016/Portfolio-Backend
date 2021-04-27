const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email:{
      type:String,
      required: true,
      max: 255,
      min:6
  },
  message:{
      type: String,
      required: true,
      max: 255,
      min: 6
  },
  date:{
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model("Message", schema);