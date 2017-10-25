const mongoose = require('mongoose');
const {Schema} = mongoose;

const educationSchema = new Schema({
  title: String,
  school: String,
  location: String,
  degree: String,
  gradDate: String,
  misc: String
});

mongoose.model('education', educationSchema);
