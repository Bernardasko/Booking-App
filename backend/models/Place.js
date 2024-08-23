const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: String,
  address: String,
  photo: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

module.exports = mongoose.model("Place", PlaceSchema);
