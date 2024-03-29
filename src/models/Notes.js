const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')
const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

NoteSchema.plugin(mongoosePaginate)
mongoose.model("Note", NoteSchema);
