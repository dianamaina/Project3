const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  document: { type: String, required: true },
  category: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
