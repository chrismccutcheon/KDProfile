const mongoose = require('mongoose');
const {Schema} = mongoose;

const volunteringSchema = new Schema({
  id: Number,
  duration: String,
  roles: Array,
  organization: String
});

mongoose.model('volunteering', volunteringSchema);
