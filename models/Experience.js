const mongoose = require('mongoose');
const {Schema} = mongoose;

const experienceSchema = new Schema({
  id: Number,
  employer: String,
  title: String,
  roles: Array,
  duration: String
});

mongoose.model('experience', experienceSchema);
