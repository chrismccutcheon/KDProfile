const mongoose = require('mongoose');
const {Schema} = mongoose;

const experienceSchema = new Schema({
  employer: String,
  title: String,
  roles: Array,
  duration: String
});

mongoose.model('experience', experienceSchema);
