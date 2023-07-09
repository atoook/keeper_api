const mongoose = require("mongoose");
//set schema to mongodb
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("Note", noteSchema);
