const mongoose = require("mongoose");
const stadiumModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("stadiums", stadiumModel);
