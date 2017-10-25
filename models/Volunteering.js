const mongoose = require('mongoose');
const {Schema} = mongoose;

const volunteringSchema = new Schema({
  duration: String,
  roles: Array,
  organization: String
});

mongoose.model('volunteering', volunteringSchema);
