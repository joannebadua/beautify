const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  description: String,
  // price: Integer,
  date: { type: Date, default: Date.now }
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelancer;
