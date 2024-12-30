const mongoose = require("mongoose");

const AttractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = AttractionSchema;
